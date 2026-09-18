import { RawHTML } from '@wordpress/element';
import { hasUploadedMedia, svgIconShortcode, getAssetShortcode } from '../editor-utils';

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
			if(!icon_url) {
				if(!hasUploadedMedia(icon_background_upload)) {
					return (
						<div class={icon_container_extra_css}>
							<RawHTML>{svgIconShortcode( icon_name, icon_library, icon_size, icon_size, icon_extra_css, icon_style )}</RawHTML>
						</div>
					)
				} else {
					return (
						<div class={icon_container_extra_css}>
							<RawHTML>{svgIconShortcode( icon_name, icon_library, icon_size, icon_size, icon_extra_css, icon_style )}</RawHTML>
							<RawHTML>{getAssetShortcode( icon_background_upload, icon_background_width, icon_background_height, icon_background_extra_css, icon_background_style )}</RawHTML>
						</div>
					)
				}

			} else {

				if(!hasUploadedMedia(icon_background_upload)) {
					return (
						<div class={icon_container_extra_css}>
							<a href={icon_url} rel={icon_url_rel} target={icon_url_target} class={icon_url_extra_css} >
								<RawHTML>{svgIconShortcode( icon_name, icon_library, icon_size, icon_size, icon_extra_css, icon_style )}</RawHTML>
							</a>
						</div>
					)
				} else {
					return (
						<div class={icon_container_extra_css}>
							<a href={icon_url} rel={icon_url_rel} target={icon_url_target} class={icon_url_extra_css} >
								<RawHTML>{svgIconShortcode( icon_name, icon_library, icon_size, icon_size, icon_extra_css, icon_style )}</RawHTML>
								<RawHTML>{getAssetShortcode( icon_background_upload, icon_background_width, icon_background_height, icon_background_extra_css, icon_background_style )}</RawHTML>
							</a>
						</div>
					)
				}
			}
		})()  
	);
}