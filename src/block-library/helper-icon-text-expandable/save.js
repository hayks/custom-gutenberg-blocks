import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		icon_text_icon_expandable_extra_css,
		icon_text_icon_expandable_id,
	} = attributes;

	const blockProps = useBlockProps.save();

    return (
		<div class={ 'collapse '+icon_text_icon_expandable_extra_css } id={ 'card_expandable_'+icon_text_icon_expandable_id }>
			<InnerBlocks.Content />
		</div>
    );
}
