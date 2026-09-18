import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl, TextControl, Placeholder, Disabled, Spinner } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import ServerSideRender from '@wordpress/server-side-render';

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

	const [ menus, setMenus ] = useState( [] );
	const [ menusLoaded, setMenusLoaded ] = useState( false );

	useEffect( () => {
		let alive = true;

		apiFetch( { path: '/lattice/v1/menus' } )
			.then( ( records ) => {
				if ( ! alive ) {
					return;
				}
				setMenus( Array.isArray( records ) ? records : [] );
				setMenusLoaded( true );
			} )
			.catch( () => {
				if ( alive ) {
					setMenus( [] );
					setMenusLoaded( true );
				}
			} );

		return () => {
			alive = false;
		};
	}, [] );

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

	const menuOptions = [ { label: __( '- Select menu -', 'layout-blocks' ), value: '' } ];
	menus.forEach( ( menu ) => {
		menuOptions.push( {
			label: menu.name,
			value: menu.slug,
		} );
	} );

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Navgation settings', 'layout-blocks' ) } >

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
					label={ __( 'Navigation menu', 'layout-blocks' ) }
					value={ navigation_menu }
					options={ menuOptions }
					onChange={ onChangeNavigationMenu }
					help={ menusLoaded && menus.length === 0
						? __( 'No menus found. Create one under Appearance → Menus.', 'layout-blocks' )
						: undefined }
				/>
				{ ! menusLoaded && <Spinner /> }
				{ navigation_menu
					? (
						<Disabled>
							<ServerSideRender
								block="lattice/helper-navigation"
								attributes={ attributes }
							/>
						</Disabled>
					)
					: (
						<Placeholder
							label={ __( 'Navigation', 'layout-blocks' ) }
							instructions={ __( 'Select a WordPress menu to display it here.', 'layout-blocks' ) }
						/>
					)
				}
			</div>

		</>
	);
}
