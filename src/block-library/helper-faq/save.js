import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		faq_extra_css,
		faq_always_open,
		faq_section_id,
		faq_structured_data,
	} = attributes;

	const structured_data = {
		"quote": {
			"type": "string",
			"source": "text",
			"selector": ".quote"
		},
		"author": {
			"type": "string",
			"source": "text",
			"selector": ".author"
		}
	};

    return (
    	<div id={ 'accordion-'+faq_section_id } class={ 'accordion accordion-flush '+faq_extra_css } data-strcutured={faq_structured_data} >
    		<InnerBlocks.Content />
			<script type={'application/ld+json'}>{structured_data}</script>
    	</div>
    );
}
