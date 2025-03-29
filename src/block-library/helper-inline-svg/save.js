import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

	const {
		inline_svg_upload,
		inline_svg_width,
		inline_svg_height,
		inline_svg_extra_css,
		inline_svg_style,
	} = attributes;

	return (
		<>
			<RawHTML>{'[get_asset name="'+inline_svg_upload.name+'" type="svg" width="'+inline_svg_width+'" height="'+inline_svg_height+'" class="'+inline_svg_extra_css+'" style="'+inline_svg_style+'" url="'+inline_svg_upload.url+'" /]'}</RawHTML>
		</>
	);

}
