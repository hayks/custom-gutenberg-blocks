import { InnerBlocks } from '@wordpress/block-editor';

const v1 = {
	attributes: {
		tabs_item_extra_css: { type: 'string', default: '' },
		tabs_item_id: { type: 'string', default: '' },
		tabs_item_index: { type: 'integer', default: 0 },
		tabs_navigation: { type: 'string', default: '' },
		tabs_navigation_css: { type: 'string', default: '' },
		tabs_navigation_svg_upload: { type: 'object', default: {} },
		tabs_navigation_svg_width: { type: 'string', default: '100' },
		tabs_navigation_svg_height: { type: 'string', default: 'auto' },
		tabs_navigation_svg_extra_css: { type: 'string', default: '' },
		tabs_navigation_svg_style: { type: 'string', default: '' },
	},
	save( { attributes } ) {
		const {
			tabs_item_extra_css,
			tabs_item_id,
			tabs_item_index,
			tabs_navigation,
			tabs_navigation_css,
		} = attributes;

		return (
			<div id={ 'tab-' + tabs_item_id } class={ 'tab-pane ' + tabs_item_extra_css } data-tab-id={ tabs_item_index } data-tab-navigation-label={ tabs_navigation } data-tab-navigation-css={ tabs_navigation_css } role={ 'tabpanel' }>
				<InnerBlocks.Content />
			</div>
		);
	},
};

export default [ v1 ];
