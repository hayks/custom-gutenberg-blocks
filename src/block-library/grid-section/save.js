import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		section_extra_css,
		section_id,
	} = attributes;

	const blockProps = useBlockProps.save();

    return (
		<div id={ section_id } class={ section_extra_css } >
			<InnerBlocks.Content />
		</div>
    );
}
