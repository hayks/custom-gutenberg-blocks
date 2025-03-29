import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

	const {
		slider_navigation_extra_css,
		slider_relation_id,
		slider_item_total,
		slider_navigation_type,
		slider_icon_name_prev,
		slider_icon_name_next,
		slider_icon_library,
		slider_icon_size_width,
		slider_icon_size_height,
		slider_icon_style,
		slider_icon_css,
		slider_icon_container_extra_css_prev,
		slider_icon_container_extra_css_next,
	} = attributes;

	return (
		(() => {
			if(slider_navigation_type==='pagination') {
				return (
					<>
						<div id={slider_relation_id+'-pagination'} class={'slider-external-pagination '+slider_navigation_extra_css}></div>
					</>
				);
			} else if(slider_navigation_type==='dots') {
				return (
					<>
						<div id={slider_relation_id+'-dots'} class={'slider-external-dots '+slider_navigation_extra_css}></div>
					</>
				);
			} else {
				return (
					<>
						<div id={slider_relation_id+'-arrows'} class={'slider-external-arrows '+slider_navigation_extra_css}><div class={'slider-external-arrow-prev slick-prev '+slider_icon_container_extra_css_prev}><RawHTML>{'[svg_icon name="'+slider_icon_name_prev+'" library="'+slider_icon_library+'" width="'+slider_icon_size_width+'" height="'+slider_icon_size_height+'" class="'+slider_icon_css+'" style="'+slider_icon_style+'" /]'}</RawHTML></div><div class={'slider-external-arrow-next slick-next '+slider_icon_container_extra_css_next}><RawHTML>{'[svg_icon name="'+slider_icon_name_next+'" library="'+slider_icon_library+'" width="'+slider_icon_size_width+'" height="'+slider_icon_size_height+'" class="'+slider_icon_css+'" style="'+slider_icon_style+'" /]'}</RawHTML></div></div>
					</>
				);
			}
		})()  
	);


}
