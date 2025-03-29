import { InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		tabs_item_extra_css,
		tabs_item_id,
		tabs_item_index,
		tabs_navigation,
		tabs_navigation_css,
	} = attributes;

	return (
		<div id={'tab-'+tabs_item_id} class={'tab-pane '+tabs_item_extra_css} data-tab-id={ tabs_item_index } data-tab-navigation-label={ tabs_navigation } data-tab-navigation-css={ tabs_navigation_css } role={'tabpanel'}>
			<InnerBlocks.Content />
		</div>
	);

}