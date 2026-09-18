import { InnerBlocks } from '@wordpress/block-editor';

const v1 = {
	attributes: {
		section_extra_css: { type: 'string', default: '' },
		section_id: { type: 'string', default: '' },
	},
	save( { attributes } ) {
		const {
			section_extra_css,
			section_id,
		} = attributes;

		return (
			<div id={ section_id } class={ section_extra_css } >
				<InnerBlocks.Content />
			</div>
		);
	},
};

export default [ v1 ];
