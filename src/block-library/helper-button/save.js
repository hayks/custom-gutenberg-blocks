import { useBlockProps } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

	const {
		button_extra_css,
		button_text_extra_css,
		button_text,

		button_url,
		button_url_target,
		button_url_rel,

		button_icon_name,
		button_icon_library,
		button_icon_width,
		button_icon_height,
		button_icon_extra_css,
		button_icon_style,
		button_icon_poistion,

		button_video_youtube,
		button_video_vimeo,
	} = attributes;


	return (
		(() => {
			if(button_icon_poistion==='right') {
				if(button_video_youtube) {
					return (
						<>
							<a href={button_url} rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-youtube={ button_video_youtube } ><span class={ button_text_extra_css }>{button_text}</span> <RawHTML>{'[svg_icon name="'+button_icon_name+'" library="'+button_icon_library+'" width="'+button_icon_width+'" height="'+button_icon_height+'" class="'+button_icon_extra_css+'" style="'+button_icon_style+'" /]'}</RawHTML></a>
						</>
					);
				} else if(button_video_vimeo) {
					return (
						<>
							<a href={button_url} rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-vimeo={ button_video_vimeo } ><span class={ button_text_extra_css }>{button_text}</span> <RawHTML>{'[svg_icon name="'+button_icon_name+'" library="'+button_icon_library+'" width="'+button_icon_width+'" height="'+button_icon_height+'" class="'+button_icon_extra_css+'" style="'+button_icon_style+'" /]'}</RawHTML></a>
						</>
					);
				}else{
					return (
						<>
							<a href={button_url} rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } ><span class={ button_text_extra_css }>{button_text}</span> <RawHTML>{'[svg_icon name="'+button_icon_name+'" library="'+button_icon_library+'" width="'+button_icon_width+'" height="'+button_icon_height+'" class="'+button_icon_extra_css+'" style="'+button_icon_style+'" /]'}</RawHTML></a>
						</>
					);
				}
			} else {
				if(button_video_youtube) {
					return (
						<>
							<a href={button_url} rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-youtube={ button_video_youtube } ><RawHTML>{'[svg_icon name="'+button_icon_name+'" library="'+button_icon_library+'" width="'+button_icon_width+'" height="'+button_icon_height+'" class="'+button_icon_extra_css+'" style="'+button_icon_style+'" /]'}</RawHTML> <span class={ button_text_extra_css }>{button_text}</span></a>
						</>
					);
				} else if(button_video_vimeo) {
					return (
						<>
							<a href={button_url} rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-vimeo={ button_video_vimeo } ><RawHTML>{'[svg_icon name="'+button_icon_name+'" library="'+button_icon_library+'" width="'+button_icon_width+'" height="'+button_icon_height+'" class="'+button_icon_extra_css+'" style="'+button_icon_style+'" /]'}</RawHTML> <span class={ button_text_extra_css }>{button_text}</span></a>
						</>
					);
				}else{
					return (
						<>
							<a href={button_url} rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } ><RawHTML>{'[svg_icon name="'+button_icon_name+'" library="'+button_icon_library+'" width="'+button_icon_width+'" height="'+button_icon_height+'" class="'+button_icon_extra_css+'" style="'+button_icon_style+'" /]'}</RawHTML> <span class={ button_text_extra_css }>{button_text}</span></a>
						</>
					);
				}
			}
		})()  
	);


}
