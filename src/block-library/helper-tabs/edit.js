import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { RawHTML } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

export default function edit({ attributes, setAttributes, clientId }) {
	
	const {
		tabs_navigation,
		tabs_navigation_container_css,
		tabs_navigation_row_css,
		tabs_navigation_col_css,
		tabs_navigation_list_css,
		tabs_navigation_item_css,
	} = attributes;

	//row mx-0
	//col-12 col-sm-12 px-0 

	function onChangeTabsNavigation( newValue ) {
		setAttributes( { tabs_navigation: newValue } );
	}

	function onChangeTabsNavigationContainerCss( newValue ) {
		setAttributes( { tabs_navigation_container_css: newValue } );
	}

	function onChangeTabsNavigationRowCss( newValue ) {
		setAttributes( { tabs_navigation_row_css: newValue } );
	}

	function onChangeTabsNavigationColCss( newValue ) {
		setAttributes( { tabs_navigation_col_css: newValue } );
	}

	function onChangeTabsNavigationListCss( newValue ) {
		setAttributes( { tabs_navigation_list_css: newValue } );
	}

	function onChangeTabsNavigationItemCss( newValue ) {
		setAttributes( { tabs_navigation_item_css: newValue } );
	}

	let navigationHTML = '';
	let navigationItemsCounter = 0;

	//get all innerBlockIds
	const innerBlockIds = wp.data.select( 'core/editor' ).getBlockOrder( clientId );

	//count the total inner block
	innerBlockIds.forEach( ( innerBlockId ) => {
		navigationItemsCounter++;
	} );




	if( navigationItemsCounter > 0){
		navigationHTML += '<div class="'+tabs_navigation_container_css+'"><div class="'+tabs_navigation_row_css+'"><div class="'+tabs_navigation_col_css+'"><ul class="nav nav-tab '+tabs_navigation_list_css+'">';
		innerBlockIds.forEach( ( innerBlockId ) => {
			let innerBlockData = wp.data.select( 'core/editor' ).getBlock( innerBlockId );
			navigationHTML += '<li class="nav-item '+tabs_navigation_item_css+'">';
				navigationHTML += '<span class="nav-link '+innerBlockData.attributes.tabs_navigation_css+'" data-bs-toggle="pill" data-bs-target="#tab-'+innerBlockData.attributes.tabs_item_id+'" type="button" role="tab">';
					if( innerBlockData.attributes.tabs_navigation_svg_upload){
						navigationHTML += '<img src="'+innerBlockData.attributes.tabs_navigation_svg_upload.url+'" class="'+innerBlockData.attributes.tabs_navigation_svg_extra_css+'" style="'+innerBlockData.attributes.tabs_navigation_svg_style+'" width="'+innerBlockData.attributes.tabs_navigation_svg_width+'" height="'+innerBlockData.attributes.tabs_navigation_svg_height+'" alt="'+innerBlockData.attributes.tabs_navigation+'" />';
						/*
						apiFetch( { path: '/custom/v2/dynamic_svg_asset?name='+innerBlockData.attributes.tabs_navigation_svg_upload.name+'&width='+innerBlockData.attributes.tabs_navigation_svg_width+'&height='+innerBlockData.attributes.tabs_navigation_svg_height+'&class='+innerBlockData.attributes.tabs_navigation_svg_extra_css+'&style='+innerBlockData.attributes.tabs_navigation_svg_style+'&url='+innerBlockData.attributes.tabs_navigation_svg_upload.url+'' } ).then( ( svg_asset ) => {
							if(svg_asset){
								//console.log( svg_asset );
								navigationHTML += svg_asset;
							}
						} );
						 */
						//navigationHTML += <RawHTML>{'[get_asset name="'+innerBlockData.attributes.tabs_navigation_svg_upload.name+'" type="svg" width="'+innerBlockData.attributes.tabs_navigation_svg_width+'" height="'+innerBlockData.attributes.tabs_navigation_svg_height+'" class="'+innerBlockData.attributes.tabs_navigation_svg_extra_css+'" style="'+innerBlockData.attributes.tabs_navigation_svg_style+'" url="'+innerBlockData.attributes.tabs_navigation_svg_upload.url+'" /]'}</RawHTML>;
					}
					navigationHTML += '<span>'+innerBlockData.attributes.tabs_navigation+'</span>';
				navigationHTML += '</span>';
			navigationHTML += '</li>';
		} );
		navigationHTML += '</ul></div></div></div>';
		//save into the block variables so we can render the navigation
		setAttributes({
			tabs_navigation: navigationHTML,
		});
	}

	const TABS_TEMPLATE_ALLOWED_BLOCKS = [
		['custom-block/helper-tabs-item']
	];

	const blockProps = useBlockProps( {
		className: ' tab-content ',
	} );

	return (
		<>	
			<InspectorControls>

				<PanelBody title={ __( 'Classes', 'custom' ) } >
					<PanelRow>
						<TextControl
							label="Navigation container css"
							value={ tabs_navigation_container_css }
							onChange={ onChangeTabsNavigationContainerCss }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Navigation row css"
							value={ tabs_navigation_row_css }
							onChange={ onChangeTabsNavigationRowCss }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Navigation col css"
							value={ tabs_navigation_col_css }
							onChange={ onChangeTabsNavigationColCss }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Navigation list css"
							value={ tabs_navigation_list_css }
							onChange={ onChangeTabsNavigationListCss }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Navigation items css"
							value={ tabs_navigation_item_css }
							onChange={ onChangeTabsNavigationItemCss }
						/>
					</PanelRow>
				</PanelBody>

			</InspectorControls>

			<div class={ 'wp-block-custom-block-helper-tabs_navigation' }><RawHTML>{ tabs_navigation }</RawHTML></div>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={TABS_TEMPLATE_ALLOWED_BLOCKS}
				/>
			</div>
		</>
	);
}
