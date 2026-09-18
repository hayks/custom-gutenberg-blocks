import { InnerBlocks } from '@wordpress/block-editor';

const v1 = {
	attributes: {
		faq_extra_css: { type: 'string', default: '' },
		faq_always_open: { type: 'boolean', default: false },
		faq_section_id: { type: 'string', default: '' },
		faq_structured_data: { type: 'string', default: 'none' },
	},
	save( { attributes } ) {
		const {
			faq_extra_css,
			faq_section_id,
			faq_structured_data,
		} = attributes;

		const structured_data = {
			quote: {
				type: 'string',
				source: 'text',
				selector: '.quote',
			},
			author: {
				type: 'string',
				source: 'text',
				selector: '.author',
			},
		};

		return (
			<div id={ 'accordion-' + faq_section_id } class={ 'accordion accordion-flush ' + faq_extra_css } data-strcutured={ faq_structured_data } >
				<InnerBlocks.Content />
				<script type={ 'application/ld+json' }>{ structured_data }</script>
			</div>
		);
	},
};

export default [ v1 ];
