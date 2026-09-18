import { InnerBlocks } from '@wordpress/block-editor';

const v1 = {
	attributes: {
		card_main_extra_css: {
			type: 'string',
			default: '',
		},
		card_main_body_extra_css: {
			type: 'string',
			default: '',
		},
		card_main_type: {
			type: 'string',
		},
	},
	save( { attributes } ) {
		const {
			card_main_extra_css,
			card_main_body_extra_css,
			card_main_type,
		} = attributes;

		if ( card_main_type === 'flip' ) {
			return (
				<div class={ 'flip-card-front ' + card_main_extra_css }>
					<div class={ 'osition-relative h-100 ' + card_main_body_extra_css }>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		}

		if ( card_main_type === 'media' ) {
			return (
				<div class={ 'col-sm-12 ' + card_main_extra_css }>
					<div class={ 'card-body ' + card_main_body_extra_css }>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		}

		return (
			<>
				<div class={ 'card-body ' + card_main_extra_css }>
					<div class={ card_main_body_extra_css }>
						<InnerBlocks.Content />
					</div>
				</div>
			</>
		);
	},
};

export default [ v1 ];
