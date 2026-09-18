import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		section_extra_css,
		section_id,
	} = attributes;

	return (
		<div id={ section_id || undefined } class={ section_extra_css } >
			<InnerBlocks.Content />
		</div>
	);
}
