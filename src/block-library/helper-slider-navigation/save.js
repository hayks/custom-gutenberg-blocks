import { RawHTML } from '@wordpress/element';
import { svgIconShortcode } from '../editor-utils';

export default function save({ attributes }) {

	const {
		slider_navigation_extra_css,
		slider_relation_id,
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

	const relationId = slider_relation_id || undefined;

	return (
		(() => {
			if(slider_navigation_type==='pagination') {
				return (
					<>
						<div id={ relationId ? relationId + '-pagination' : undefined } class={'slider-external-pagination '+slider_navigation_extra_css}></div>
					</>
				);
			} else if(slider_navigation_type==='dots') {
				return (
					<>
						<div id={ relationId ? relationId + '-dots' : undefined } class={'slider-external-dots '+slider_navigation_extra_css}></div>
					</>
				);
			} else {
				return (
					<>
						<div id={ relationId ? relationId + '-arrows' : undefined } class={'slider-external-arrows '+slider_navigation_extra_css}><div class={'slider-external-arrow-prev slick-prev '+slider_icon_container_extra_css_prev}><RawHTML>{svgIconShortcode( slider_icon_name_prev, slider_icon_library, slider_icon_size_width, slider_icon_size_height, slider_icon_css, slider_icon_style )}</RawHTML></div><div class={'slider-external-arrow-next slick-next '+slider_icon_container_extra_css_next}><RawHTML>{svgIconShortcode( slider_icon_name_next, slider_icon_library, slider_icon_size_width, slider_icon_size_height, slider_icon_css, slider_icon_style )}</RawHTML></div></div>
					</>
				);
			}
		})()  
	);


}
