<?php
/**
 * Plugin Name:       Layout Blocks
 * Plugin URI:        https://github.com/hayks/custom-gutenberg-blocks
 * Description:       WordPress blocks for page layout and UI — grid, cards, sliders, FAQs, tabs, and icons.
 * Requires at least: 6.8
 * Requires PHP:      8.1
 * Version:           1.1.0
 * Author:            Hayk Sargsyan
 * Author URI:        https://github.com/hayks
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       layout-blocks
 *
 * @package layout-blocks
 */

declare(strict_types=1);

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'LAYOUT_BLOCKS_VERSION', '1.1.0' );
define( 'LAYOUT_BLOCKS_DIR', plugin_dir_path( __FILE__ ) );
define( 'LAYOUT_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

/**
 * Sanitize a CSS size such as 24, 24px, or 1.5rem.
 *
 * @param mixed $value Raw value.
 * @return string
 */
function cgb_sanitize_css_size( mixed $value ): string {
	$value = sanitize_text_field( (string) $value );

	return 1 === preg_match( '/^(?:\d+|\d*\.\d+)(?:px|em|rem|%|vh|vw)?$/i', $value ) ? $value : '';
}

/**
 * Sanitize a space-separated class list.
 *
 * @param mixed $value Raw value.
 * @return string
 */
function cgb_sanitize_class_list( mixed $value ): string {
	$classes = preg_split( '/\s+/', sanitize_text_field( (string) $value ), -1, PREG_SPLIT_NO_EMPTY );

	if ( ! is_array( $classes ) ) {
		return '';
	}

	return implode( ' ', array_filter( array_map( 'sanitize_html_class', $classes ) ) );
}

/**
 * Sanitize menu item icon meta.
 *
 * @param mixed $meta_value Raw meta.
 * @return array<string, string>
 */
function cgb_sanitize_menu_item_icon( mixed $meta_value ): array {
	if ( ! is_array( $meta_value ) ) {
		$meta_value = array();
	}

	$lib = sanitize_key( (string) ( $meta_value['lib'] ?? '' ) );
	if ( ! in_array( $lib, array( '', 'carbon', 'custom' ), true ) ) {
		$lib = '';
	}

	$name = cgb_sanitize_icon_name( $meta_value['name'] ?? '' );

	return array(
		'lib'    => $lib,
		'name'   => $name,
		'width'  => cgb_sanitize_css_size( $meta_value['width'] ?? '' ),
		'height' => cgb_sanitize_css_size( $meta_value['height'] ?? '' ),
		'class'  => cgb_sanitize_class_list( $meta_value['class'] ?? '' ),
		'style'  => (string) safecss_filter_attr( (string) ( $meta_value['style'] ?? '' ) ),
	);
}

/**
 * Allow empty, same-site relative, or same-host absolute URLs.
 *
 * @param string $url URL.
 * @return bool
 */
function cgb_is_allowed_asset_url( string $url ): bool {
	if ( '' === $url ) {
		return true;
	}

	if ( str_starts_with( $url, '//' ) ) {
		return false;
	}

	if ( str_starts_with( $url, '/' ) ) {
		return true;
	}

	if ( ! wp_http_validate_url( $url ) ) {
		return false;
	}

	return wp_parse_url( home_url(), PHP_URL_HOST ) === wp_parse_url( $url, PHP_URL_HOST );
}

/**
 * Allowed icon libraries shipped or resolved by the plugin.
 *
 * @return array<int, string>
 */
function cgb_icon_libraries(): array {
	return array( 'carbon', 'bootstrap', 'custom' );
}

/**
 * Sanitize an icon identifier (Carbon file stem).
 *
 * @param mixed $value Raw name.
 * @return string
 */
function cgb_sanitize_icon_name( mixed $value ): string {
	$value = (string) $value;

	return 1 === preg_match( '/^[a-zA-Z0-9_-]+$/', $value ) ? $value : '';
}

/**
 * Absolute path to an icon SVG if it exists.
 *
 * @param string $library Library slug.
 * @param string $name    Icon name.
 * @return string
 */
function cgb_icon_file_path( string $library, string $name ): string {
	$library = sanitize_key( $library );
	$name    = cgb_sanitize_icon_name( $name );

	if ( '' === $library || '' === $name || ! in_array( $library, cgb_icon_libraries(), true ) ) {
		return '';
	}

	$candidates = array();

	if ( in_array( $library, array( 'carbon', 'bootstrap' ), true ) ) {
		$candidates[] = LAYOUT_BLOCKS_DIR . 'assets/icons/' . $library . '/' . $name . '.svg';
	}

	$theme = wp_get_theme();
	if ( 'custom' === $library ) {
		$candidates[] = get_stylesheet_directory() . '/assets/icons/custom/' . $name . '.svg';
	} else {
		$candidates[] = get_template_directory() . '/assets/icons/' . $library . '/node_modules/@carbon/icons/svg/32/' . $name . '.svg';
		$candidates[] = get_template_directory() . '/assets/icons/' . $library . '/' . $name . '.svg';
		if ( $theme->get_stylesheet() !== $theme->get_template() ) {
			$candidates[] = get_stylesheet_directory() . '/assets/icons/' . $library . '/' . $name . '.svg';
		}
	}

	foreach ( $candidates as $path ) {
		if ( is_readable( $path ) ) {
			$real = realpath( $path );
			if ( $real ) {
				return $real;
			}
		}
	}

	return '';
}

/**
 * Public URL for an icon SVG.
 *
 * @param string $library Library slug.
 * @param string $name    Icon name.
 * @return string
 */
function cgb_icon_file_url( string $library, string $name ): string {
	$path = cgb_icon_file_path( $library, $name );
	if ( '' === $path ) {
		return '';
	}

	$plugin_root = realpath( LAYOUT_BLOCKS_DIR );
	if ( $plugin_root && str_starts_with( $path, $plugin_root ) ) {
		$relative = ltrim( str_replace( '\\', '/', substr( $path, strlen( $plugin_root ) ) ), '/' );
		return LAYOUT_BLOCKS_URL . $relative;
	}

	$theme_root = realpath( get_template_directory() );
	if ( $theme_root && str_starts_with( $path, $theme_root ) ) {
		$relative = ltrim( str_replace( '\\', '/', substr( $path, strlen( $theme_root ) ) ), '/' );
		return trailingslashit( get_template_directory_uri() ) . $relative;
	}

	$child_root = realpath( get_stylesheet_directory() );
	if ( $child_root && str_starts_with( $path, $child_root ) ) {
		$relative = ltrim( str_replace( '\\', '/', substr( $path, strlen( $child_root ) ) ), '/' );
		return trailingslashit( get_stylesheet_directory_uri() ) . $relative;
	}

	return '';
}

/**
 * List icon names for a library.
 *
 * @param string $library Library slug.
 * @return array<int, string>
 */
function cgb_list_icon_names( string $library ): array {
	$library = sanitize_key( $library );
	if ( ! in_array( $library, cgb_icon_libraries(), true ) ) {
		return array();
	}

	$json = LAYOUT_BLOCKS_DIR . 'assets/icons/' . $library . '/index.json';
	if ( is_readable( $json ) ) {
		$decoded = json_decode( (string) file_get_contents( $json ), true );
		if ( is_array( $decoded ) ) {
			return array_values( array_filter( array_map( 'cgb_sanitize_icon_name', $decoded ) ) );
		}
	}

	$dir = LAYOUT_BLOCKS_DIR . 'assets/icons/' . $library;
	if ( ! is_dir( $dir ) ) {
		$dir = get_stylesheet_directory() . '/assets/icons/' . $library;
	}
	if ( ! is_dir( $dir ) ) {
		return array();
	}

	$names = array();
	$files = glob( $dir . '/*.svg' );
	if ( ! is_array( $files ) ) {
		return array();
	}

	foreach ( $files as $file ) {
		$name = cgb_sanitize_icon_name( basename( $file, '.svg' ) );
		if ( '' !== $name ) {
			$names[] = $name;
		}
	}

	sort( $names );

	return $names;
}

/**
 * Read and lightly sanitize a first-party SVG file.
 *
 * @param string $path File path.
 * @return string
 */
function cgb_read_icon_svg( string $path ): string {
	if ( '' === $path || ! is_readable( $path ) ) {
		return '';
	}

	$svg = (string) file_get_contents( $path );
	$svg = preg_replace( '/<script\b[^>]*>.*?<\/script>/is', '', $svg );
	$svg = preg_replace( '/\son[a-z]+\s*=\s*("[^"]*"|\'[^\']*\')/i', '', (string) $svg );

	return is_string( $svg ) ? trim( $svg ) : '';
}

/**
 * Render the svg_icon shortcode.
 *
 * @param array<string, mixed>|string $atts Shortcode attributes.
 * @return string
 */
function cgb_shortcode_svg_icon( $atts ): string {
	$atts = shortcode_atts(
		array(
			'name'    => '',
			'library' => 'carbon',
			'width'   => '32',
			'height'  => '32',
			'class'   => '',
			'style'   => '',
		),
		is_array( $atts ) ? $atts : array(),
		'svg_icon'
	);

	$library = sanitize_key( (string) $atts['library'] );
	$name    = cgb_sanitize_icon_name( $atts['name'] );
	$path    = cgb_icon_file_path( $library, $name );
	$svg     = cgb_read_icon_svg( $path );

	if ( '' === $svg ) {
		return '';
	}

	$width  = cgb_sanitize_css_size( $atts['width'] );
	$height = cgb_sanitize_css_size( $atts['height'] );
	$class  = cgb_sanitize_class_list( $atts['class'] );
	$style  = (string) safecss_filter_attr( (string) $atts['style'] );

	$extra = ' fill="currentColor" aria-hidden="true" focusable="false"';
	if ( '' !== $width ) {
		$extra .= ' width="' . esc_attr( $width ) . '"';
	}
	if ( '' !== $height && 'auto' !== strtolower( $height ) ) {
		$extra .= ' height="' . esc_attr( $height ) . '"';
	}
	if ( '' !== $class ) {
		$extra .= ' class="' . esc_attr( $class ) . '"';
	}
	if ( '' !== $style ) {
		$extra .= ' style="' . esc_attr( $style ) . '"';
	}

	$svg = (string) preg_replace( '/<svg\b/i', '<svg' . $extra, $svg, 1 );

	return $svg;
}

/**
 * Allowed column values for the navigation block.
 *
 * @param mixed $value Raw value.
 * @return string
 */
function cgb_sanitize_menu_columns( mixed $value ): string {
	$value = sanitize_key( (string) $value );

	return in_array( $value, array( 'flex', '1', '2', '3', '4', '5' ), true ) ? $value : '1';
}

/**
 * Render a nav menu from shortcode or block attributes.
 *
 * @param string $name          Menu slug, name, or ID.
 * @param string $class         Extra ul classes.
 * @param string $columns       flex|1|2|3|4|5.
 * @param string $item_css      Extra li classes.
 * @param string $item_link_css Extra anchor classes.
 * @param string $item_text_css Extra title span classes.
 * @return string
 */
function cgb_render_menu_markup( string $name, string $class = '', string $columns = '1', string $item_css = '', string $item_link_css = '', string $item_text_css = '' ): string {
	$name = sanitize_text_field( $name );
	if ( '' === $name ) {
		return '';
	}

	$columns    = cgb_sanitize_menu_columns( $columns );
	$col_class  = 'flex' === $columns ? 'lattice-menu--flex' : 'lattice-menu--cols-' . $columns;
	$menu_class = trim( 'lattice-menu ' . $col_class . ' ' . cgb_sanitize_class_list( $class ) );

	$html = wp_nav_menu(
		array(
			'menu'              => $name,
			'container'         => false,
			'menu_class'        => $menu_class,
			'fallback_cb'       => false,
			'echo'              => false,
			'cgb_nav'           => true,
			'cgb_item_css'      => cgb_sanitize_class_list( $item_css ),
			'cgb_item_link_css' => cgb_sanitize_class_list( $item_link_css ),
			'cgb_item_text_css' => cgb_sanitize_class_list( $item_text_css ),
		)
	);

	if ( ! is_string( $html ) || '' === $html ) {
		if ( is_admin() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
			return '<p class="lattice-menu-missing">' . esc_html__( 'Menu not found or empty.', 'layout-blocks' ) . '</p>';
		}

		return '';
	}

	return $html;
}

/**
 * Render the navigation block from its attributes.
 *
 * @param array<string, mixed> $attributes Block attributes.
 * @return string
 */
function cgb_render_navigation_from_attributes( array $attributes ): string {
	$menu = cgb_render_menu_markup(
		(string) ( $attributes['navigation_menu'] ?? '' ),
		(string) ( $attributes['navigation_menu_extra_css'] ?? '' ),
		(string) ( $attributes['navigation_menu_columns'] ?? '1' ),
		(string) ( $attributes['navigation_menu_item_extra_css'] ?? '' ),
		(string) ( $attributes['navigation_menu_item_link_extra_css'] ?? '' ),
		(string) ( $attributes['navigation_menu_item_text_extra_css'] ?? '' )
	);

	$container = cgb_sanitize_class_list( $attributes['navigation_menu_container_extra_css'] ?? '' );

	return '<div' . ( '' !== $container ? ' class="' . esc_attr( $container ) . '"' : '' ) . '>' . $menu . '</div>';
}

/**
 * Dynamic render callback for lattice/helper-navigation.
 *
 * @param array<string, mixed> $attributes Block attributes.
 * @param string               $content    Saved content.
 * @param WP_Block|null        $block      Block instance.
 * @return string
 */
function cgb_render_helper_navigation_block( array $attributes, string $content = '', $block = null ): string {
	unset( $content, $block );

	return cgb_render_navigation_from_attributes( $attributes );
}

/**
 * Attach a render callback to the navigation block.
 *
 * @param array<string, mixed> $args       Block type args.
 * @param string               $block_type Block name.
 * @return array<string, mixed>
 */
function cgb_filter_block_type_args( array $args, string $block_type ): array {
	if ( 'lattice/helper-navigation' === $block_type ) {
		$args['render_callback'] = 'cgb_render_helper_navigation_block';
	}

	return $args;
}
add_filter( 'register_block_type_args', 'cgb_filter_block_type_args', 10, 2 );

/**
 * Render the [menu] shortcode used by saved navigation blocks.
 *
 * @param array<string, mixed>|string $atts Shortcode attributes.
 * @return string
 */
function cgb_shortcode_menu( $atts ): string {
	$atts = shortcode_atts(
		array(
			'name'          => '',
			'class'         => '',
			'columns'       => '1',
			'item_css'      => '',
			'item_link_css' => '',
			'item_text_css' => '',
		),
		is_array( $atts ) ? $atts : array(),
		'menu'
	);

	return cgb_render_menu_markup(
		(string) $atts['name'],
		(string) $atts['class'],
		(string) $atts['columns'],
		(string) $atts['item_css'],
		(string) $atts['item_link_css'],
		(string) $atts['item_text_css']
	);
}

/**
 * SVG markup for a menu item icon.
 *
 * @param int $item_id Menu item ID.
 * @return string
 */
function cgb_get_menu_item_icon_html( int $item_id ): string {
	$icon = cgb_sanitize_menu_item_icon( get_post_meta( $item_id, 'menu_item_icon', true ) );
	if ( '' === $icon['lib'] || '' === $icon['name'] ) {
		return '';
	}

	return cgb_shortcode_svg_icon(
		array(
			'library' => $icon['lib'],
			'name'    => $icon['name'],
			'width'   => '' !== $icon['width'] ? $icon['width'] : '20',
			'height'  => '' !== $icon['height'] ? $icon['height'] : '20',
			'class'   => trim( 'lattice-menu__icon ' . $icon['class'] ),
			'style'   => $icon['style'],
		)
	);
}

/**
 * Extra li classes for plugin-rendered menus.
 *
 * @param array<int, string> $classes CSS classes.
 * @param WP_Post            $item    Menu item.
 * @param stdClass           $args    wp_nav_menu args.
 * @param int                $depth   Depth.
 * @return array<int, string>
 */
function cgb_nav_menu_css_class( array $classes, $item, $args, int $depth = 0 ): array {
	unset( $item, $depth );

	if ( ! is_object( $args ) || empty( $args->cgb_nav ) ) {
		return $classes;
	}

	$extra = cgb_sanitize_class_list( $args->cgb_item_css ?? '' );
	if ( '' !== $extra ) {
		$classes = array_merge( $classes, explode( ' ', $extra ) );
	}

	return $classes;
}
add_filter( 'nav_menu_css_class', 'cgb_nav_menu_css_class', 10, 4 );

/**
 * Extra anchor classes for plugin-rendered menus.
 *
 * @param array<string, string> $atts  Link attributes.
 * @param WP_Post               $item  Menu item.
 * @param stdClass              $args  wp_nav_menu args.
 * @param int                   $depth Depth.
 * @return array<string, string>
 */
function cgb_nav_menu_link_attributes( array $atts, $item, $args, int $depth = 0 ): array {
	unset( $item, $depth );

	if ( ! is_object( $args ) || empty( $args->cgb_nav ) ) {
		return $atts;
	}

	$extra = cgb_sanitize_class_list( $args->cgb_item_link_css ?? '' );
	if ( '' !== $extra ) {
		$atts['class'] = trim( ( $atts['class'] ?? '' ) . ' ' . $extra );
	}

	return $atts;
}
add_filter( 'nav_menu_link_attributes', 'cgb_nav_menu_link_attributes', 10, 4 );

/**
 * Prefix menu item titles with optional icons.
 *
 * @param string    $title Item title.
 * @param WP_Post   $item  Menu item.
 * @param stdClass  $args  wp_nav_menu args.
 * @param int       $depth Depth.
 * @return string
 */
function cgb_nav_menu_item_title( string $title, $item, $args, int $depth = 0 ): string {
	unset( $depth );

	if ( ! is_object( $args ) || empty( $args->cgb_nav ) || ! $item instanceof WP_Post ) {
		return $title;
	}

	$icon       = cgb_get_menu_item_icon_html( (int) $item->ID );
	$text_class = cgb_sanitize_class_list( $args->cgb_item_text_css ?? '' );
	if ( '' !== $text_class ) {
		$title = '<span class="' . esc_attr( $text_class ) . '">' . $title . '</span>';
	}

	return $icon . $title;
}
add_filter( 'nav_menu_item_title', 'cgb_nav_menu_item_title', 10, 4 );

/**
 * Register plugin shortcodes unless the theme already provides them.
 *
 * @return void
 */
function cgb_register_shortcodes(): void {
	if ( ! shortcode_exists( 'svg_icon' ) ) {
		add_shortcode( 'svg_icon', 'cgb_shortcode_svg_icon' );
	}
	if ( ! shortcode_exists( 'menu' ) ) {
		add_shortcode( 'menu', 'cgb_shortcode_menu' );
	}
}
add_action( 'init', 'cgb_register_shortcodes' );

/**
 * Register the block category.
 *
 * @param array<int, array<string, mixed>> $categories Categories.
 * @return array<int, array<string, mixed>>
 */
function cgb_register_block_category( array $categories ): array {
	array_unshift(
		$categories,
		array(
			'slug'  => 'layout-blocks',
			'title' => __( 'Layout Blocks', 'layout-blocks' ),
		)
	);

	return $categories;
}
add_filter( 'block_categories_all', 'cgb_register_block_category' );

/**
 * Register blocks from the build manifest.
 *
 * @return void
 */
function cgb_register_blocks(): void {
	$build_dir = LAYOUT_BLOCKS_DIR . 'build';
	$manifest  = $build_dir . '/blocks-manifest.php';

	if ( function_exists( 'wp_register_block_types_from_metadata_collection' ) && file_exists( $manifest ) ) {
		wp_register_block_types_from_metadata_collection( $build_dir, $manifest );
		return;
	}

	$block_jsons = glob( $build_dir . '/*/block.json' );
	if ( ! is_array( $block_jsons ) ) {
		return;
	}

	foreach ( $block_jsons as $block_json ) {
		register_block_type( dirname( $block_json ) );
	}
}
add_action( 'init', 'cgb_register_blocks' );

/**
 * Pass theme slugs to the block editor only.
 *
 * @return void
 */
function cgb_enqueue_editor_assets(): void {
	$theme = wp_get_theme();

	$settings = wp_json_encode(
		array(
			'stylesheet' => sanitize_key( $theme->get_stylesheet() ),
			'template'   => sanitize_key( $theme->get_template() ),
			'pluginUrl'  => LAYOUT_BLOCKS_URL,
		)
	);

	wp_add_inline_script(
		'wp-block-editor',
		'window.latticeEditorSettings = ' . $settings . ';',
		'before'
	);
}
add_action( 'enqueue_block_editor_assets', 'cgb_enqueue_editor_assets' );

/**
 * Register menu item icon meta.
 *
 * @return void
 */
function cgb_register_menu_item_icon_meta(): void {
	register_post_meta(
		'nav_menu_item',
		'menu_item_icon',
		array(
			'type'              => 'object',
			'single'            => true,
			'sanitize_callback' => 'cgb_sanitize_menu_item_icon',
			'auth_callback'     => static function (): bool {
				return current_user_can( 'edit_theme_options' );
			},
			'show_in_rest'      => array(
				'schema' => array(
					'type'       => 'object',
					'properties' => array(
						'lib'    => array( 'type' => 'string' ),
						'name'   => array( 'type' => 'string' ),
						'width'  => array( 'type' => 'string' ),
						'height' => array( 'type' => 'string' ),
						'class'  => array( 'type' => 'string' ),
						'style'  => array( 'type' => 'string' ),
					),
				),
			),
		)
	);
}
add_action( 'init', 'cgb_register_menu_item_icon_meta' );

/**
 * Render menu icon fields.
 *
 * @param int $item_id Menu item ID.
 * @return void
 */
function cgb_menu_items_view( int $item_id ): void {
	$icon = cgb_sanitize_menu_item_icon( get_post_meta( $item_id, 'menu_item_icon', true ) );
	?>
	<input type="hidden" class="nav-menu-id" value="<?php echo esc_attr( (string) $item_id ); ?>" />
	<div style="clear: both;">
		<div style="float:left;width: 24%; padding-right: 1%;">
			<span class="description"><?php esc_html_e( 'Icon Library', 'layout-blocks' ); ?></span><br />
			<select style="width: 99%;" name="menu_item_icon[<?php echo esc_attr( (string) $item_id ); ?>][lib]">
				<option <?php selected( $icon['lib'], '' ); ?> value=""><?php esc_html_e( 'None', 'layout-blocks' ); ?></option>
				<option <?php selected( $icon['lib'], 'carbon' ); ?> value="carbon"><?php esc_html_e( 'Carbon', 'layout-blocks' ); ?></option>
				<option <?php selected( $icon['lib'], 'custom' ); ?> value="custom"><?php esc_html_e( 'Custom', 'layout-blocks' ); ?></option>
			</select>
		</div>
		<div style="float:left;width: 24%; padding-right: 1%;">
			<span class="description"><?php esc_html_e( 'Icon Name', 'layout-blocks' ); ?></span><br />
			<input style="width: 99%;" type="text" name="menu_item_icon[<?php echo esc_attr( (string) $item_id ); ?>][name]" value="<?php echo esc_attr( $icon['name'] ); ?>" />
		</div>
		<div style="float:left;width: 24%; padding-right: 1%;">
			<span class="description"><?php esc_html_e( 'Width', 'layout-blocks' ); ?></span><br />
			<input style="width: 99%;" type="text" name="menu_item_icon[<?php echo esc_attr( (string) $item_id ); ?>][width]" value="<?php echo esc_attr( $icon['width'] ); ?>" />
		</div>
		<div style="float:left;width: 24%; padding-right: 1%;">
			<span class="description"><?php esc_html_e( 'Height', 'layout-blocks' ); ?></span><br />
			<input style="width: 99%;" type="text" name="menu_item_icon[<?php echo esc_attr( (string) $item_id ); ?>][height]" value="<?php echo esc_attr( $icon['height'] ); ?>" />
		</div>
	</div>
	<div style="clear: both;">
		<div style="float:left;width: 49%; padding-right: 1%;">
			<span class="description"><?php esc_html_e( 'Icon Class', 'layout-blocks' ); ?></span><br />
			<input style="width: 99%;" type="text" name="menu_item_icon[<?php echo esc_attr( (string) $item_id ); ?>][class]" value="<?php echo esc_attr( $icon['class'] ); ?>" />
		</div>
		<div style="float:left;width: 49%; padding-right: 1%;">
			<span class="description"><?php esc_html_e( 'Icon Style', 'layout-blocks' ); ?></span><br />
			<input style="width: 99%;" type="text" name="menu_item_icon[<?php echo esc_attr( (string) $item_id ); ?>][style]" value="<?php echo esc_attr( $icon['style'] ); ?>" />
		</div>
	</div>
	<?php
}
add_action( 'wp_nav_menu_item_custom_fields', 'cgb_menu_items_view' );

/**
 * Save menu icon fields.
 *
 * @param int $menu_id         Menu ID.
 * @param int $menu_item_db_id Menu item ID.
 * @return void
 */
function cgb_menu_items_save( int $menu_id, int $menu_item_db_id ): void {
	unset( $menu_id );

	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}

	// phpcs:ignore WordPress.Security.NonceVerification.Missing -- Core nav-menus.php verifies the nonce.
	if ( empty( $_POST['menu_item_icon'][ $menu_item_db_id ] ) || ! is_array( $_POST['menu_item_icon'][ $menu_item_db_id ] ) ) {
		delete_post_meta( $menu_item_db_id, 'menu_item_icon' );
		return;
	}

	// phpcs:ignore WordPress.Security.NonceVerification.Missing, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized -- Sanitized by cgb_sanitize_menu_item_icon().
	$raw_icon = wp_unslash( $_POST['menu_item_icon'][ $menu_item_db_id ] );
	update_post_meta( $menu_item_db_id, 'menu_item_icon', cgb_sanitize_menu_item_icon( $raw_icon ) );
}
add_action( 'wp_update_nav_menu_item', 'cgb_menu_items_save', 10, 2 );

/**
 * Add Icon to nav menu screen options.
 *
 * @param array<string, string> $args Columns.
 * @return array<string, string>
 */
function cgb_menu_screen_options( array $args ): array {
	$args['custom_menu_icon'] = __( 'Icon', 'layout-blocks' );
	return $args;
}
add_filter( 'manage_nav-menus_columns', 'cgb_menu_screen_options', 20 );

/**
 * Register REST routes.
 *
 * @return void
 */
function cgb_register_rest_routes(): void {
	register_rest_route(
		'lattice/v1',
		'/menus',
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => 'cgb_rest_list_menus',
			'permission_callback' => static function (): bool {
				return current_user_can( 'edit_posts' );
			},
		)
	);

	register_rest_route(
		'lattice/v1',
		'/icons',
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => 'cgb_rest_list_icons',
			'permission_callback' => static function (): bool {
				return current_user_can( 'edit_posts' );
			},
			'args'                => array(
				'library' => array(
					'type'              => 'string',
					'default'           => 'carbon',
					'sanitize_callback' => 'sanitize_key',
				),
			),
		)
	);

	register_rest_route(
		'lattice/v1',
		'/dynamic_url',
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => 'cgb_rest_get_dynamic_page_url',
			'permission_callback' => static function ( WP_REST_Request $request ): bool {
				$page_id = absint( $request->get_param( 'page_id' ) );
				return $page_id > 0 && current_user_can( 'edit_posts' ) && current_user_can( 'read_post', $page_id );
			},
			'args'                => array(
				'page_id' => array(
					'required'          => true,
					'type'              => 'integer',
					'sanitize_callback' => 'absint',
				),
			),
		)
	);

	register_rest_route(
		'lattice/v1',
		'/dynamic_svg_asset',
		array(
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => 'cgb_rest_get_dynamic_svg_asset',
			'permission_callback' => static function (): bool {
				return current_user_can( 'edit_posts' );
			},
			'args'                => array(
				'name'   => array(
					'required'          => true,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_file_name',
				),
				'width'  => array(
					'type'              => 'integer',
					'default'           => 0,
					'sanitize_callback' => 'absint',
				),
				'height' => array(
					'type'              => 'integer',
					'default'           => 0,
					'sanitize_callback' => 'absint',
				),
				'class'  => array(
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'cgb_sanitize_class_list',
				),
				'style'  => array(
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'safecss_filter_attr',
				),
				'url'    => array(
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'esc_url_raw',
					'validate_callback' => static function ( mixed $param ): bool {
						return cgb_is_allowed_asset_url( trim( (string) $param ) );
					},
				),
			),
		)
	);
}
add_action( 'rest_api_init', 'cgb_register_rest_routes' );

/**
 * Resolve a translated permalink.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response|WP_Error
 */
function cgb_rest_get_dynamic_page_url( WP_REST_Request $request ): WP_REST_Response|WP_Error {
	$page_id       = absint( $request->get_param( 'page_id' ) );
	$translated_id = apply_filters( 'wpml_object_id', $page_id, 'post', true );
	$translated_id = absint( $translated_id ? $translated_id : $page_id );
	$permalink     = get_permalink( $translated_id );

	if ( ! $permalink ) {
		return new WP_Error( 'cgb_page_not_found', __( 'Page not found.', 'layout-blocks' ), array( 'status' => 404 ) );
	}

	return rest_ensure_response( $permalink );
}

/**
 * Render an SVG via the theme get_asset shortcode callback only.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response|WP_Error
 */
function cgb_rest_get_dynamic_svg_asset( WP_REST_Request $request ): WP_REST_Response|WP_Error {
	global $shortcode_tags;

	if ( empty( $shortcode_tags['get_asset'] ) || ! is_callable( $shortcode_tags['get_asset'] ) ) {
		return new WP_Error( 'cgb_shortcode_missing', __( 'The get_asset helper is not available.', 'layout-blocks' ), array( 'status' => 501 ) );
	}

	$output = call_user_func(
		$shortcode_tags['get_asset'],
		array(
			'name'   => sanitize_file_name( (string) $request->get_param( 'name' ) ),
			'type'   => 'svg',
			'width'  => absint( $request->get_param( 'width' ) ),
			'height' => absint( $request->get_param( 'height' ) ),
			'class'  => cgb_sanitize_class_list( $request->get_param( 'class' ) ),
			'style'  => safecss_filter_attr( (string) $request->get_param( 'style' ) ),
			'url'    => (string) $request->get_param( 'url' ),
		),
		null,
		'get_asset'
	);

	return rest_ensure_response( is_string( $output ) ? $output : '' );
}

/**
 * List classic nav menus for the navigation block picker.
 *
 * @return WP_REST_Response
 */
function cgb_rest_list_menus(): WP_REST_Response {
	$items = array();

	foreach ( wp_get_nav_menus() as $menu ) {
		if ( ! $menu instanceof WP_Term ) {
			continue;
		}

		$items[] = array(
			'id'    => (int) $menu->term_id,
			'name'  => $menu->name,
			'slug'  => $menu->slug,
			'count' => (int) $menu->count,
		);
	}

	return rest_ensure_response( $items );
}

/**
 * List icons for the block editor picker.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response|WP_Error
 */
function cgb_rest_list_icons( WP_REST_Request $request ): WP_REST_Response|WP_Error {
	$library = sanitize_key( (string) $request->get_param( 'library' ) );
	if ( ! in_array( $library, cgb_icon_libraries(), true ) ) {
		return new WP_Error( 'cgb_invalid_library', __( 'Unknown icon library.', 'layout-blocks' ), array( 'status' => 400 ) );
	}

	$items = array();
	foreach ( cgb_list_icon_names( $library ) as $name ) {
		$url = cgb_icon_file_url( $library, $name );
		if ( '' === $url ) {
			continue;
		}
		$items[] = array(
			'name' => $name,
			'url'  => $url,
		);
	}

	return rest_ensure_response( $items );
}
