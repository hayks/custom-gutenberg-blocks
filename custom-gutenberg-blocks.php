<?php
declare(strict_types=1);

/**
 * Plugin Name:       Custom Gutenberg Blocks
 * Description:       Design system blocks for Gutenberg
 * Requires at least: 6.1
 * Requires PHP:      7.4
 * Version:           1.0.1
 * Author:            Hayk Sargsyan
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-gutenberg-blocks
 *
 * @package           custom-gutenberg-blocks
 */

// Abort if this file is called directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load each block's assets separately for better performance.
 */
add_filter( 'should_load_separate_core_block_assets', '__return_true' );

/**
 * Register a custom block category at the top of the inserter.
 *
 * @param array[] $categories Existing block categories.
 * @return array[] Modified block categories.
 */
function cgb_register_block_category( array $categories ): array {
	array_unshift( $categories, [
		'slug'  => 'custom-custom-blocks',
		'title' => __( 'Custom Blocks', 'custom-gutenberg-blocks' ),
	] );

	return $categories;
}
add_filter( 'block_categories_all', 'cgb_register_block_category' );

/**
 * Register all custom Gutenberg blocks from the block library.
 *
 * @return void
 */
function cgb_register_blocks(): void {
	$blocks = array(
		'grid-section',
		'grid-container',
		'grid-row',
		'grid-column',
		'helper-spacer',
		'helper-button',
		'helper-icon',
		'helper-background-image',
		'helper-inline-svg',
		'helper-icon-text',
		'helper-icon-text-expandable',
		'helper-card',
		'helper-card-main',
		'helper-card-flip',
		'helper-card-media',
		'helper-navigation',
		'helper-table',
		'helper-faq',
		'helper-faq-item',
		'helper-slider',
		'helper-slider-item',
		'helper-slider-navigation',
		'helper-slider-avatar',
		'helper-tabs',
		'helper-tabs-item',
		'helper-readmore',
	);

	foreach ( $blocks as $block ) {
		register_block_type( plugin_dir_path( __FILE__ ) . 'src/block-library/' . $block );
	}
}
add_action( 'init', 'cgb_register_blocks' );

/**
 * Enqueue inline script that exposes the current theme info to the block editor.
 *
 * Uses wp_localize_script() for proper escaping and data passing.
 *
 * @return void
 */
function cgb_enqueue_editor_inline_script(): void {
	$wordpress_theme = wp_get_theme();

	wp_register_script(
		'cgb-editor-variables',
		'',
		array(),
		'1.0.0',
		false
	);
	wp_enqueue_script( 'cgb-editor-variables' );
	wp_add_inline_script(
		'cgb-editor-variables',
		'const wordpress_theme = ' . wp_json_encode( array(
			'stylesheet' => sanitize_text_field( $wordpress_theme->stylesheet ),
			'template'   => sanitize_text_field( $wordpress_theme->template ),
		) ) . ';',
		'before'
	);
}
add_action( 'admin_enqueue_scripts', 'cgb_enqueue_editor_inline_script' );


/* --------------------------------------------------------------------------
 * Navigation Menu — Custom Icon Fields
 * ----------------------------------------------------------------------- */

/**
 * Render custom icon fields on the nav menu item edit screen.
 *
 * @param int      $item_id Menu item ID.
 * @param WP_Post  $item    Menu item post object.
 * @return void
 */
function cgb_menu_items_view( int $item_id, $item ): void {
	$menu_item_icon_raw = get_post_meta( $item_id, 'menu_item_icon', true );
	$menu_item_icon     = maybe_unserialize( $menu_item_icon_raw );

	// Ensure we always have an array to avoid undefined-index notices.
	if ( ! is_array( $menu_item_icon ) ) {
		$menu_item_icon = array();
	}

	$escaped_id = esc_attr( (string) $item_id );
	?>
	<input type="hidden" class="nav-menu-id" value="<?php echo $escaped_id; ?>" />

	<div style="clear: both;">
		<div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php esc_html_e( 'Icon Library', 'custom-gutenberg-blocks' ); ?></span><br />
		    <div class="logged-input-holder">
		        <select style="width: 99%;" name="menu_item_icon[<?php echo $escaped_id; ?>][lib]" id="menu_item_icon_<?php echo $escaped_id; ?>_lib">
		        	<option <?php selected( empty( $menu_item_icon['lib'] ?? '' ) ); ?> value=""><?php esc_html_e( 'None', 'custom-gutenberg-blocks' ); ?></option>
		        	<option <?php selected( ( $menu_item_icon['lib'] ?? '' ), 'carbon' ); ?> value="carbon"><?php esc_html_e( 'Carbon', 'custom-gutenberg-blocks' ); ?></option>
		        	<option <?php selected( ( $menu_item_icon['lib'] ?? '' ), 'custom' ); ?> value="custom"><?php esc_html_e( 'Custom', 'custom-gutenberg-blocks' ); ?></option>
		       	</select>
		    </div>
	    </div>
	    <div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php esc_html_e( 'Icon Name', 'custom-gutenberg-blocks' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $escaped_id; ?>][name]" id="menu_item_icon_<?php echo $escaped_id; ?>_name" value="<?php echo esc_attr( $menu_item_icon['name'] ?? '' ); ?>" />
		    </div>
	    </div>
	    <div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php esc_html_e( 'Width', 'custom-gutenberg-blocks' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $escaped_id; ?>][width]" id="menu_item_icon_<?php echo $escaped_id; ?>_width" value="<?php echo esc_attr( $menu_item_icon['width'] ?? '' ); ?>" />
		    </div>
	    </div>
	    <div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php esc_html_e( 'Height', 'custom-gutenberg-blocks' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $escaped_id; ?>][height]" id="menu_item_icon_<?php echo $escaped_id; ?>_height" value="<?php echo esc_attr( $menu_item_icon['height'] ?? '' ); ?>" />
		    </div>
	    </div>
	</div>
	<div style="clear: both;">
	    <div style="float:left;width: 49%; padding-right: 1%;">
		    <span class="description"><?php esc_html_e( 'Icon Class', 'custom-gutenberg-blocks' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $escaped_id; ?>][class]" id="menu_item_icon_<?php echo $escaped_id; ?>_class" value="<?php echo esc_attr( $menu_item_icon['class'] ?? '' ); ?>" />
		    </div>
	    </div>
	    <div style="float:left;width: 49%; padding-right: 1%;">
		    <span class="description"><?php esc_html_e( 'Icon Style', 'custom-gutenberg-blocks' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $escaped_id; ?>][style]" id="menu_item_icon_<?php echo $escaped_id; ?>_style" value="<?php echo esc_attr( $menu_item_icon['style'] ?? '' ); ?>" />
		    </div>
	    </div>
	</div>

	<?php
}
add_action( 'wp_nav_menu_item_custom_fields', 'cgb_menu_items_view', 10, 2 );

/**
 * Save the custom icon fields when a nav menu item is updated.
 *
 * Sanitizes every field individually before persisting to the database.
 *
 * @param int $menu_id         The ID of the menu being saved.
 * @param int $menu_item_db_id The ID of the menu item being saved.
 * @return void
 */
function cgb_menu_items_save( int $menu_id, int $menu_item_db_id ): void {
	// phpcs:ignore WordPress.Security.NonceVerification.Missing -- Nonce is verified by WordPress core in wp-admin/nav-menus.php.
	if ( isset( $_POST['menu_item_icon'][ $menu_item_db_id ] ) ) {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$raw_data = $_POST['menu_item_icon'][ $menu_item_db_id ];

		// Sanitize each field individually.
		$sanitized_data = array(
			'lib'    => sanitize_text_field( $raw_data['lib'] ?? '' ),
			'name'   => sanitize_text_field( $raw_data['name'] ?? '' ),
			'width'  => absint( $raw_data['width'] ?? 0 ),
			'height' => absint( $raw_data['height'] ?? 0 ),
			'class'  => sanitize_text_field( $raw_data['class'] ?? '' ),
			'style'  => sanitize_text_field( $raw_data['style'] ?? '' ),
		);

		update_post_meta( $menu_item_db_id, 'menu_item_icon', $sanitized_data );
	} else {
		delete_post_meta( $menu_item_db_id, 'menu_item_icon' );
	}
}
add_action( 'wp_update_nav_menu_item', 'cgb_menu_items_save', 10, 2 );

/**
 * Add the "Icon" checkbox to the Screen Options on the nav menus admin page.
 *
 * @param array $args Existing screen options columns.
 * @return array Modified screen options columns.
 */
function cgb_menu_screen_options( array $args ): array {
	$args['custom_menu_icon'] = __( 'Icon', 'custom-gutenberg-blocks' );
	return $args;
}
add_filter( 'manage_nav-menus_columns', 'cgb_menu_screen_options', 20 );


/* --------------------------------------------------------------------------
 * REST API — Dynamic URL & SVG Asset Endpoints
 * ----------------------------------------------------------------------- */

/**
 * Register custom REST API routes for dynamic page URLs and SVG assets.
 *
 * Both endpoints require the `edit_posts` capability to prevent
 * unauthenticated shortcode execution.
 *
 * @return void
 */
function cgb_register_rest_routes(): void {
	register_rest_route(
		'custom/v2',
		'/dynamic_url',
		array(
			'methods'             => 'GET',
			'callback'            => 'cgb_rest_get_dynamic_page_url',
			'permission_callback' => static function (): bool {
				return current_user_can( 'edit_posts' );
			},
			'args'                => array(
				'page_id' => array(
					'required'          => true,
					'type'              => 'integer',
					'validate_callback' => static function ( $param ): bool {
						return is_numeric( $param ) && (int) $param > 0;
					},
					'sanitize_callback' => 'absint',
				),
			),
		)
	);

	register_rest_route(
		'custom/v2',
		'/dynamic_svg_asset',
		array(
			'methods'             => 'GET',
			'callback'            => 'cgb_rest_get_dynamic_svg_asset',
			'permission_callback' => static function (): bool {
				return current_user_can( 'edit_posts' );
			},
			'args'                => array(
				'name'   => array(
					'required'          => true,
					'type'              => 'string',
					'sanitize_callback' => 'sanitize_file_name',
					'validate_callback' => static function ( $param ): bool {
						return ! empty( $param ) && preg_match( '/^[a-zA-Z0-9_\-]+$/', $param );
					},
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
					'sanitize_callback' => 'sanitize_text_field',
				),
				'style'  => array(
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'sanitize_text_field',
				),
				'url'    => array(
					'type'              => 'string',
					'default'           => '',
					'sanitize_callback' => 'esc_url_raw',
					'validate_callback' => static function ( $param ): bool {
						if ( empty( $param ) ) {
							return true;
						}
						// Only allow URLs from the same site.
						$site_url = wp_parse_url( home_url(), PHP_URL_HOST );
						$param_host = wp_parse_url( $param, PHP_URL_HOST );
						return $param_host === $site_url;
					},
				),
			),
		)
	);
}
add_action( 'rest_api_init', 'cgb_register_rest_routes' );

/**
 * REST callback: resolve a dynamic page URL via WPML and a shortcode.
 *
 * @param WP_REST_Request $request Full details about the request.
 * @return WP_REST_Response Response containing the page URL string.
 */
function cgb_rest_get_dynamic_page_url( WP_REST_Request $request ): WP_REST_Response {
	$page_id     = $request->get_param( 'page_id' );
	$page_id_new = apply_filters( 'wpml_object_id', $page_id, 'post' );
	$output      = do_shortcode( '[dynamic_page_url page_id="' . absint( $page_id_new ) . '" url_only="true"]' );

	return new WP_REST_Response( $output, 200 );
}

/**
 * REST callback: render an SVG asset via a shortcode.
 *
 * All parameters are sanitized through the route's `args` schema before
 * reaching this callback.
 *
 * @param WP_REST_Request $request Full details about the request.
 * @return WP_REST_Response Response containing the rendered SVG markup.
 */
function cgb_rest_get_dynamic_svg_asset( WP_REST_Request $request ): WP_REST_Response {
	$name   = $request->get_param( 'name' );
	$width  = $request->get_param( 'width' );
	$height = $request->get_param( 'height' );
	$class  = $request->get_param( 'class' );
	$style  = $request->get_param( 'style' );
	$url    = $request->get_param( 'url' );

	$output = do_shortcode(
		'[get_asset'
		. ' name="' . esc_attr( $name ) . '"'
		. ' type="svg"'
		. ' width="' . esc_attr( (string) $width ) . '"'
		. ' height="' . esc_attr( (string) $height ) . '"'
		. ' class="' . esc_attr( $class ) . '"'
		. ' style="' . esc_attr( $style ) . '"'
		. ' url="' . esc_url( $url ) . '"'
		. ' /]'
	);

	return new WP_REST_Response( $output, 200 );
}