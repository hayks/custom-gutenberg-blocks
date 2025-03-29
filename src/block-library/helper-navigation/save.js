import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

	const {
		navigation_menu,
		navigation_menu_columns,
		navigation_menu_container_extra_css,
		navigation_menu_extra_css,
		navigation_menu_item_extra_css,
		navigation_menu_item_link_extra_css,
		navigation_menu_item_text_extra_css,
	} = attributes;

	return (
		<>
			<div class={navigation_menu_container_extra_css}>
				<RawHTML>{'[menu name="'+navigation_menu+'" class="'+navigation_menu_extra_css+'" columns="'+navigation_menu_columns+'" item_css="'+navigation_menu_item_extra_css+'" item_link_css="'+navigation_menu_item_link_extra_css+'" item_text_css="'+navigation_menu_item_text_extra_css+'" ]'}</RawHTML>
			</div>
		</>
	);
}
