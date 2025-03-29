<?php

/**
 * Plugin Name:       Custom Gutenber Blocks
 * Description:       Design system blocks for Gutenberg
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Hayk Sargsyan
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 *
 * @package           custom-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 *
 */

add_filter('should_load_separate_core_block_assets', '__return_true');



function create_block_custom_plugin_block_init(){

	add_filter( 'block_categories_all' , function( $categories ) {

		//Insert the new category on top of the list
		$new_categories = [
			'slug'  => 'custom-custom-blocks',
			'title' => 'Custom Blocks'
		];
		array_unshift($categories, $new_categories);

		return $categories;
	});

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
		'helper-readmore'
	);

	foreach ($blocks as $block) {
		register_block_type(plugin_dir_path(__FILE__) . '/src/block-library/' . $block);
	}

    // Enqueue script after register_block_type() so script handle is valid
    add_action('admin_enqueue_scripts', 'custom_gutenberg_blocks_inline_script');
    //add_action('wp_enqueue_scripts', 'custom_gutenberg_blocks_inline_script');

}
add_action('init', 'create_block_custom_plugin_block_init');

function custom_gutenberg_blocks_inline_script(){
	$wordpress_theme = wp_get_theme();
	wp_register_script( 'custom-gutenberg-blocks-variables', '',);
	wp_enqueue_script( 'custom-gutenberg-blocks-variables' );
	wp_add_inline_script( 'custom-gutenberg-blocks-variables', 'const wordpress_theme = ' . json_encode( array(
	    'stylesheet' => $wordpress_theme->stylesheet,
	    'template' => $wordpress_theme->template,
	) ).";", 'before' );

	//wp_register_style( 'admin_css', get_stylesheet_directory_uri().'/assets/css/style.css', array() );
	//wp_enqueue_style( 'admin_css', get_stylesheet_directory_uri().'/assets/css/style.css', array() );
}


function custom_custom_menu_items_view( $item_id, $item ) {
	$menu_item_icon_raw = get_post_meta( $item_id, 'menu_item_icon', true );
	$menu_item_icon = maybe_unserialize($menu_item_icon_raw, true);
	?>
	<input type="hidden" class="nav-menu-id" value="<?php echo $item_id ;?>" />

	<div style="clear: both;">
		<div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php _e( "Icon Library", 'custom' ); ?></span><br />
		    <div class="logged-input-holder">
		        <select style="width: 99%; " name="menu_item_icon[<?php echo $item_id ;?>][lib]" id="menu_item_icon_<?php echo $item_id ;?>_lib" style="margin-left: 18px;">
		        	<option <?php if( !isset($menu_item_icon['lib']) || empty($menu_item_icon['lib']) ){ echo 'selected="selected"'; } ?> value=""><?php _e( "None", 'custom' ); ?></option>
		        	<option <?php if( isset($menu_item_icon['lib']) && !empty($menu_item_icon['lib']) && $menu_item_icon['lib'] == 'carbon' ){ echo 'selected="selected"'; }?> value="carbon"><?php _e( "Carbon", 'custom' ); ?></option>
		        	<option <?php if( isset($menu_item_icon['lib']) && !empty($menu_item_icon['lib']) && $menu_item_icon['lib'] == 'custom' ){ echo 'selected="selected"'; }?> value="custom"><?php _e( "Custom", 'custom' ); ?></option>
		       	</select>
		    </div>
	    </div>
	    <div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php _e( "Icon Name", 'custom' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%; " type="text" name="menu_item_icon[<?php echo $item_id ;?>][name]" id="menu_item_icon_<?php echo $item_id ;?>_name" value="<?php if( isset($menu_item_icon['name']) || !empty($menu_item_icon['name']) ){ echo esc_attr($menu_item_icon['name']); } ?>" />
		    </div>
	    </div>
	    <div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php _e( "Width", 'custom' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $item_id ;?>][width]" id="menu_item_icon_<?php echo $item_id ;?>_width" value="<?php if( isset($menu_item_icon['width']) || !empty($menu_item_icon['width']) ){ echo esc_attr($menu_item_icon['width']); } ?>" />
		    </div>
	    </div>
	    <div style="float:left;width: 24%; padding-right: 1%;">
		    <span class="description"><?php _e( "Height", 'custom' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $item_id ;?>][height]" id="menu_item_icon_<?php echo $item_id ;?>_height" value="<?php if( isset($menu_item_icon['height']) || !empty($menu_item_icon['height']) ){ echo esc_attr($menu_item_icon['height']); } ?>" />
		    </div>
	    </div>
	</div>
	<div style="clear: both;">
	    <div style="float:left;width: 49%; padding-right: 1%;">
		    <span class="description"><?php _e( "Icon Class", 'custom' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $item_id ;?>][class]" id="menu_item_icon_<?php echo $item_id ;?>_class" value="<?php if( isset($menu_item_icon['class']) || !empty($menu_item_icon['class']) ){ echo esc_attr($menu_item_icon['class']); } ?>" />
		    </div>
	    </div>
	    <div style="float:left;width: 49%; padding-right: 1%;">
		    <span class="description"><?php _e( "Icon Style", 'custom' ); ?></span><br />
		    <div class="logged-input-holder">
		        <input style="width: 99%;" type="text" name="menu_item_icon[<?php echo $item_id ;?>][style]" id="menu_item_icon_<?php echo $item_id ;?>_style" value="<?php if( isset($menu_item_icon['style']) || !empty($menu_item_icon['style']) ){ echo esc_attr($menu_item_icon['style']); } ?>" />
		    </div>
	    </div>
	</div>

	<?php
}
add_action( 'wp_nav_menu_item_custom_fields', 'custom_custom_menu_items_view', 10, 2 );

function custom_custom_menu_items_save( $menu_id, $menu_item_db_id ) {
	if ( isset( $_POST['menu_item_icon'][$menu_item_db_id]  ) ) {
		//$sanitized_data = json_encode( $_POST['menu_item_icon'][$menu_item_db_id] );
		$sanitized_data = maybe_serialize( $_POST['menu_item_icon'][$menu_item_db_id] );
		update_post_meta( $menu_item_db_id, 'menu_item_icon', $sanitized_data );
	} else {
		delete_post_meta( $menu_item_db_id, 'menu_item_icon' );
	}
}
add_action( 'wp_update_nav_menu_item', 'custom_custom_menu_items_save', 10, 2 );

function custom_custom_menu_screen_options($args) {
    $args["custom_menu_icon"] = __("Icon", "custom");
    return $args;
}
add_filter("manage_nav-menus_columns", "custom_custom_menu_screen_options", 20);






 
function custom_dynamic_url_rest_route(){
	register_rest_route(
		'custom/v2',
		'/dynamic_url',
		array(
			'methods' => 'GET',
			'callback' => 'get_dynamic_page_url',
			'permission_callback' => '__return_true',
		)
	);

	register_rest_route(
		'custom/v2',
		'/dynamic_svg_asset',
		array(
			'methods' => 'GET',
			'callback' => 'get_dynamic_svg_asset',
			'permission_callback' => '__return_true',
		)
	);

}
add_action( 'rest_api_init', 'custom_dynamic_url_rest_route' );

function get_dynamic_page_url($request) {

	/*
	[dynamic_page_url page_id="35" parameters="?tab=free" url_only="true"]
	*/
	$output = '';
	$page_id = $request->get_param('page_id'); 
	$page_id_new = apply_filters( 'wpml_object_id', $page_id, 'post' );
	$output .= do_shortcode( '[dynamic_page_url page_id="'.$page_id_new.'" url_only="true"]' );

	return $output;
}

function get_dynamic_svg_asset($request) {

	/*
		https://luckybansko.bg.custom.local/wp-json/custom/v2/dynamic_svg_asset?name=icons-kid-room&width=50&height=50&class=mb-3&style=&url=https://luckybansko.bg.custom.local/wp-content/uploads/2024/09/icons-kid-room.svg

		<?php echo get_asset("placeholder", "svg", 510, null, null, 'width:100%; max-width:510px;'); ?>

		<img decoding="async" src="https://luckybansko.bg.custom.local/wp-content/uploads/2024/09/icons-kid-room.svg" class="mb-3" style="" width="50" height="50">
	*/

	$output = '';
	$name = $request->get_param('name'); 
	$width = $request->get_param('width'); 
	$height = $request->get_param('height'); 
	$class = $request->get_param('class'); 
	$style = $request->get_param('style'); 
	$url = $request->get_param('url'); 

	$output .= do_shortcode( '[get_asset name="'.$name.'" type="svg" width="'.$width.'" height="'.$height.'" class="'.$class.'" style="'.$style.'" url="'.$url.'" /]' );

	return $output;
}