import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		faq_extra_css,
		faq_section_id,
		faq_structured_data,
	} = attributes;

	return (
		<div
			id={ faq_section_id ? 'accordion-' + faq_section_id : undefined }
			class={ 'accordion accordion-flush ' + faq_extra_css }
			data-structured={ faq_structured_data }
		>
			<InnerBlocks.Content />
		</div>
	);
}
