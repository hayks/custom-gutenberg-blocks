import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';
import { hasUploadedMedia, svgIconShortcode, getAssetShortcode } from '../editor-utils';

export default function save({ attributes }) {

	const {
		inline_svg_upload,
		inline_svg_width,
		inline_svg_height,
		inline_svg_extra_css,
		inline_svg_style,
	} = attributes;

	if ( ! hasUploadedMedia( inline_svg_upload ) ) {
		return null;
	}

	return (
		<>
			<RawHTML>{getAssetShortcode( inline_svg_upload, inline_svg_width, inline_svg_height, inline_svg_extra_css, inline_svg_style )}</RawHTML>
		</>
	);

}
