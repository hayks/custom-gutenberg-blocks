import { InnerBlocks } from '@wordpress/block-editor';

const v1 = {
	attributes: {
		card_extra_css: { type: 'string', default: '' },
		card_url_page: { type: 'object', default: {} },
		card_url: { type: 'string', default: '' },
		card_url_target: { type: 'string' },
		card_url_rel: { type: 'string' },
		card_type: { type: 'string', default: 'regular' },
	},
	save( { attributes } ) {
		const {
			card_extra_css,
			card_url,
			card_url_target,
			card_url_rel,
			card_type,
		} = attributes;

		if ( card_type === 'flip' ) {
			return (
				<div class={ 'card flip-card ' + card_extra_css }>
					<div class="flip-card-inner">
						<InnerBlocks.Content />
						{ card_url && card_url.length > 0 &&
							<a href={ card_url } rel={ card_url_rel } target={ card_url_target } class={ 'position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
						}
					</div>
				</div>
			);
		}

		if ( card_type === 'media' ) {
			return (
				<div class={ 'card ' + card_extra_css }>
					<div class="row g-0">
						<InnerBlocks.Content />
						{ card_url && card_url.length > 0 &&
							<a href={ card_url } rel={ card_url_rel } target={ card_url_target } class={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
						}
					</div>
				</div>
			);
		}

		return (
			<div class={ 'card ' + card_extra_css }>
				<InnerBlocks.Content />
				{ card_url && card_url.length > 0 &&
					<a href={ card_url } rel={ card_url_rel } target={ card_url_target } class={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
				}
			</div>
		);
	},
};

export default [ v1 ];
