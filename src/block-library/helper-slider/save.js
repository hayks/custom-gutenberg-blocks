import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		slider_container_extra_css,
		slider_id,
		slider_items_show,
		slider_items_show_mobile,
		slider_items_scroll,
		slider_items_scroll_mobile,
		slider_infinite,
		slider_dots,
		slider_arrows,
		slider_autoplay,
	} = attributes;

	let slider_infinite_value = "false";
	if(slider_infinite === true || slider_infinite == 'true'){
		slider_infinite_value = "true";
	}

	let slider_dots_value = "false";
	if(slider_dots === true || slider_dots == 'true'){
		slider_dots_value = "true";
	}

	let slider_arrows_value = "false";
	if(slider_arrows === true || slider_arrows == 'true'){
		slider_arrows_value = "true";
	}

	let slider_autoplay_value = "false";
	if(slider_autoplay === true || slider_autoplay == 'true'){
		slider_autoplay_value = "true";
	}

    return (
		<div class={ slider_container_extra_css } data-component="slider" data-slider-id={ slider_id } data-slider-show={ slider_items_show } data-slider-show-mobile={ slider_items_show_mobile } data-slider-scroll={ slider_items_scroll } data-slider-scroll-mobile={ slider_items_scroll_mobile } data-slider-infinite={ slider_infinite_value } data-slider-dots={ slider_dots_value } data-slider-arrows={ slider_arrows_value } data-slider-autoplay={ slider_autoplay_value }>
    		<InnerBlocks.Content />
    	</div>
    );
}
