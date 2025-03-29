import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		container_extra_css,
		container_type,
	} = attributes;

	const blockProps = useBlockProps.save();

    return (
		<div class={ container_type+' '+container_extra_css } >
			<InnerBlocks.Content />
		</div>
    );
}
