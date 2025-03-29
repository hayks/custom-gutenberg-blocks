import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

	const {
		icon_name,
		icon_library,
		icon_size,
		icon_extra_css,
		icon_style,
		icon_container_extra_css,
		icon_url,
		icon_url_target,
		icon_url_rel,
		icon_url_extra_css,
		icon_background_upload,
		icon_background_width,
		icon_background_height,
		icon_background_extra_css,
		icon_background_style,
	} = attributes;

	return (
		(() => {
			if(icon_url==='') {
				if(icon_background_upload==='') {
					return (
						<div class={icon_container_extra_css}>
							<RawHTML>{'[svg_icon name="'+icon_name+'" library="'+icon_library+'" width="'+icon_size+'" height="'+icon_size+'" class="'+icon_extra_css+'" style="'+icon_style+'" /]'}</RawHTML>
						</div>
					)
				} else {
					return (
						<div class={icon_container_extra_css}>
							<RawHTML>{'[svg_icon name="'+icon_name+'" library="'+icon_library+'" width="'+icon_size+'" height="'+icon_size+'" class="'+icon_extra_css+'" style="'+icon_style+'" /]'}</RawHTML>
							<RawHTML>{'[get_asset name="'+icon_background_upload.name+'" type="svg" width="'+icon_background_width+'" height="'+icon_background_height+'" class="'+icon_background_extra_css+'" style="'+icon_background_style+'" url="'+icon_background_upload.url+'" /]'}</RawHTML>
						</div>
					)
				}

			} else {

				if(icon_url==='') {
					return (
						<div class={icon_container_extra_css}>
							<a href={icon_url} rel={icon_url_rel} target={icon_url_target} class={icon_url_extra_css} >
								<RawHTML>{'[svg_icon name="'+icon_name+'" library="'+icon_library+'" width="'+icon_size+'" height="'+icon_size+'" class="'+icon_extra_css+'" style="'+icon_style+'" /]'}</RawHTML>
							</a>
						</div>
					)
				} else {
					return (
						<div class={icon_container_extra_css}>
							<a href={icon_url} rel={icon_url_rel} target={icon_url_target} class={icon_url_extra_css} >
								<RawHTML>{'[svg_icon name="'+icon_name+'" library="'+icon_library+'" width="'+icon_size+'" height="'+icon_size+'" class="'+icon_extra_css+'" style="'+icon_style+'" /]'}</RawHTML>
								<RawHTML>{'[get_asset name="'+icon_background_upload.name+'" type="svg" width="'+icon_background_width+'" height="'+icon_background_height+'" class="'+icon_background_extra_css+'" style="'+icon_background_style+'" url="'+icon_background_upload.url+'" /]'}</RawHTML>
							</a>
						</div>
					)
				}
			}
		})()  
	);
}