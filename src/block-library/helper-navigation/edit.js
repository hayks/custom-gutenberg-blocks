import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		navigation_menu,
		navigation_menu_columns,
		navigation_menu_container_extra_css,
		navigation_menu_extra_css,
		navigation_menu_item_extra_css,
		navigation_menu_item_link_extra_css,
		navigation_menu_item_text_extra_css,
	} = attributes;

	function onChangeNavigationMenu( newValue ) {
		setAttributes( { navigation_menu: newValue } );
	}
	function onChangeNavigationMenuColumns( newValue ) {
		setAttributes( { navigation_menu_columns: newValue } );
	}
	function onChangeNavigationMenuContainerExtraCSS( newValue ) {
		setAttributes( { navigation_menu_container_extra_css: newValue } );
	}
	function onChangeNavigationMenuExtraCSS( newValue ) {
		setAttributes( { navigation_menu_extra_css: newValue } );
	}
	function onChangeNavigationMenuItemExtraCSS( newValue ) {
		setAttributes( { navigation_menu_item_extra_css: newValue } );
	}
	function onChangeNavigationMenuItemLinkExtraCSS( newValue ) {
		setAttributes( { navigation_menu_item_link_extra_css: newValue } );
	}
	function onChangeNavigationMenuItemTextExtraCSS( newValue ) {
		setAttributes( { navigation_menu_item_text_extra_css: newValue } );
	}
	
	//Get the current menus
	const menus = useSelect( ( select ) => {
		return select('core').getMenus({ per_page: 100, suppress_filters: false });
	});

	//Prepare the array with options for the dropdown menu
	const menuOptions = [];
	menuOptions.push( { label: '- Select menu -', value: '' } );
	{ menus && menus.map( ( menu ) => {
		menuOptions.push( { label: menu.name, value: menu.slug } );
	})}

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Navgation settings', 'custom' ) } >

					<PanelRow>
						<SelectControl
							label="Navgation columns"
							value={ navigation_menu_columns }
							options={ [
								{ label: 'Flex', 	value: 'flex' },
								{ label: '1', 		value: '1' },
								{ label: '2', 		value: '2' },
								{ label: '3', 		value: '3' },
								{ label: '4', 		value: '4' },
								{ label: '5', 		value: '5' },
							] }
							onChange={ onChangeNavigationMenuColumns }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Container css class"
							value={ navigation_menu_container_extra_css }
							onChange={ onChangeNavigationMenuContainerExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Menu css class"
							value={ navigation_menu_extra_css }
							onChange={ onChangeNavigationMenuExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Item css class"
							value={ navigation_menu_item_extra_css }
							onChange={ onChangeNavigationMenuItemExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Item link css class"
							value={ navigation_menu_item_link_extra_css }
							onChange={ onChangeNavigationMenuItemLinkExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Item text css class"
							value={ navigation_menu_item_text_extra_css }
							onChange={ onChangeNavigationMenuItemTextExtraCSS }
						/>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<SelectControl
					label="Navigation menu"
					value={ navigation_menu }
					options={ menuOptions }
					onChange={ onChangeNavigationMenu }
				/>
			</div>

		</>
	);
}
