import { RawHTML } from '@wordpress/element';
import { svgIconShortcode } from '../editor-utils';

const v1 = {
	attributes: {
		slider_navigation_extra_css: { type: 'string', default: '' },
		slider_navigation_type: { type: 'string', default: 'pagination' },
		slider_relation_id: { type: 'string', default: '' },
		slider_icon_library: { type: 'string', default: 'carbon' },
		slider_icon_size_width: { type: 'string', default: '32' },
		slider_icon_size_height: { type: 'string', default: '32' },
		slider_icon_name_prev: { type: 'string', default: '' },
		slider_icon_name_next: { type: 'string', default: '' },
		slider_icon_style: { type: 'string', default: '' },
		slider_icon_css: { type: 'string', default: '' },
		slider_icon_container_extra_css_prev: { type: 'string', default: '' },
		slider_icon_container_extra_css_next: { type: 'string', default: '' },
	},
	save( { attributes } ) {
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

		if ( slider_navigation_type === 'pagination' ) {
			return (
				<>
					<div id={ slider_relation_id + '-pagination' } class={ 'slider-external-pagination ' + slider_navigation_extra_css }></div>
				</>
			);
		}

		if ( slider_navigation_type === 'dots' ) {
			return (
				<>
					<div id={ slider_relation_id + '-dots' } class={ 'slider-external-dots ' + slider_navigation_extra_css }></div>
				</>
			);
		}

		return (
			<>
				<div id={ slider_relation_id + '-arrows' } class={ 'slider-external-arrows ' + slider_navigation_extra_css }><div class={ 'slider-external-arrow-prev slick-prev ' + slider_icon_container_extra_css_prev }><RawHTML>{ svgIconShortcode( slider_icon_name_prev, slider_icon_library, slider_icon_size_width, slider_icon_size_height, slider_icon_css, slider_icon_style ) }</RawHTML></div><div class={ 'slider-external-arrow-next slick-next ' + slider_icon_container_extra_css_next }><RawHTML>{ svgIconShortcode( slider_icon_name_next, slider_icon_library, slider_icon_size_width, slider_icon_size_height, slider_icon_css, slider_icon_style ) }</RawHTML></div></div>
			</>
		);
	},
};

export default [ v1 ];
