import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		faq_item_extra_css,
		faq_item_text_extra_css,
		faq_item_question,
		faq_item_id,
		faq_item_always_open,
		faq_item_section_id,
	} = attributes;

	const blockProps = useBlockProps.save();

	let sectionID = '';
	if(faq_item_always_open && faq_item_section_id){
		sectionID = '#accordion-'+faq_item_section_id;
	}

    return (
		<div class={ 'accordion-item' } >
			<div class={ 'accordion-header' } id={ 'flush-heading-'+faq_item_id } >
				<button class={ 'accordion-button collapsed pe-6 '+faq_item_extra_css } type="button" data-bs-toggle="collapse" data-bs-target={ '#flush-collapse-'+faq_item_id } aria-expanded={ 'false' } aria-controls={ 'flush-collapse-'+faq_item_id } >
					<span class={ faq_item_text_extra_css }>{ faq_item_question }</span>
				</button>
			</div>
			<div id={ 'flush-collapse-'+faq_item_id } class={ 'accordion-collapse collapse' } aria-labelledby={ 'flush-heading-'+faq_item_id } data-bs-parent={ sectionID }>
				<div class="accordion-body" >
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
    );

}