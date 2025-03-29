import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		card_media_extra_css,
	} = attributes;

	const blockProps = useBlockProps.save();

    return (
		<div class={ 'card-media '+card_media_extra_css }>
			<InnerBlocks.Content />
		</div>
    );
}
