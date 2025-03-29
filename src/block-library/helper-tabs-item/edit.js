import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

const isTabIdReserved = ( tabs_item_id, clientId ) => {
    const blocksClientIds = wp.data.select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { tabs_item_id: _tabs_item_id } = wp.data.select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return clientId !== _clientId && tabs_item_id === _tabs_item_id;
    } );
};

export default function edit({ attributes, setAttributes, clientId }) {

	let blockIndex = wp.data.select( 'core/editor' ).getBlockIndex( clientId );
	
	const {
		tabs_item_extra_css,
		tabs_item_id,
		tabs_item_index,
		tabs_navigation,
		tabs_navigation_css,
		tabs_navigation_svg_upload,
		tabs_navigation_svg_width,
		tabs_navigation_svg_height,
		tabs_navigation_svg_extra_css,
		tabs_navigation_svg_style,
	} = attributes;

	function onChangeTabsItemCSS( newValue ) {
		setAttributes( { tabs_item_extra_css: newValue } );
	}
	function makeid(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}
	function onChangeTabsItemID( newValue ) {

		//if empty, generate new ID
			if(newValue.length === 0){
				newValue = makeid(8);
			}

		//save the ID
			setAttributes( { tabs_item_id: newValue } );

		//get parent ID and its attributes
			const parent     		= wp.data.select('core/block-editor').getBlockParentsByBlockName( clientId, 'custom-block/helper-tabs' );
			const parentAttributes 	= wp.data.select('core/block-editor').getBlockAttributes(parent[0]);
			//console.log('parentID ',parent);
			//console.log('parentAttributes ',parentAttributes.tabs_navigation);

		//regenerate the navigation HTML with the new IDs
			let navigationHTML = '';
			let navigationItemsCounter = 0;
		
			//get all innerBlockIds
			const innerBlockIds = wp.data.select( 'core/editor' ).getBlockOrder( parent[0] );
			
			//count the total inner block
			innerBlockIds.forEach( ( innerBlockId ) => {
				navigationItemsCounter++;
			} );
		
			if( navigationItemsCounter > 0){
				navigationHTML += '<div class="'+parentAttributes.tabs_navigation_container_css+'"><div class="'+parentAttributes.tabs_navigation_row_css+'"><div class="'+parentAttributes.tabs_navigation_col_css+'"><ul class="nav nav-tab '+parentAttributes.tabs_navigation_list_css+'">';
				innerBlockIds.forEach( ( innerBlockId ) => {
					let innerBlockData = wp.data.select( 'core/editor' ).getBlock( innerBlockId );				
					navigationHTML += '<li class="nav-item '+parentAttributes.tabs_navigation_item_css+'">';
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
			}
			//console.log(navigationHTML);

		//update the parent attribute
			wp.data.dispatch( 'core/block-editor' ).updateBlockAttributes( parent[0], { tabs_navigation: navigationHTML } )

		//validate - get paretn Attributes
		//const parentAttributesNEW = wp.data.select('core/block-editor').getBlockAttributes(parent[0]);
		//console.log('parentAttributesNEW ',parentAttributesNEW.tabs_navigation);

	}



	const setFreshTabId = () => {
		setAttributes({ tabs_item_id: makeid(8) });
	};

	if(tabs_item_id.length === 0){
		setFreshTabId();
	}

	if ( isTabIdReserved( tabs_item_id, clientId ) ) {
		//console.log( `Tab with id '${ tabs_item_id }' already exists. Regenerating...`, tabs_item_id );
		setFreshTabId();
	}


	setAttributes({
		tabs_item_index: parseInt(blockIndex),
	});
	function onChangeTabsNavigation( newValue ) {
		setAttributes( { tabs_navigation: newValue } );
	}
	function onChangeTabsNavigationCSS( newValue ) {
		setAttributes( { tabs_navigation_css: newValue } );
	}


	function onUpdateImage( image ) {
		setAttributes( { tabs_navigation_svg_upload: image } );
	}
	function onChangeSVGWidth( newValue ) {
		setAttributes( { tabs_navigation_svg_width: newValue } );
	}
	function onChangeSVGHeight( newValue ) {
		setAttributes( { tabs_navigation_svg_height: newValue } );
	}
	function onChangeSVGExtraCSS( newValue ) {
		setAttributes( { tabs_navigation_svg_extra_css: newValue } );
	}
	function onChangeSVGStyle( newValue ) {
		setAttributes( { tabs_navigation_svg_style: newValue } );
	}


	const blockProps = useBlockProps( {
		className: 'tab-'+tabs_item_id,
		/*'id': 'tabpanel',*/
		/*'data-tab-id': { tabs_item_index },*/
		/*'data-tab-navigation-label': { tabs_navigation },*/
		/*'data-tab-navigation-css': { tabs_navigation_css },*/
		'role': 'tabpanel'
	} );

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Tab Settings', 'custom' ) } initialOpen={ true }>
					<PanelRow>
						<TextControl
							label="Tab ID"
							value={ tabs_item_id }
							onChange={ onChangeTabsItemID }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Extra css"
							value={ tabs_item_extra_css }
							onChange={ onChangeTabsItemCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Navigation', 'custom' ) } initialOpen={ true }>
					<PanelRow>
						<TextControl
							label="Navigation label"
							value={ tabs_navigation }
							onChange={ onChangeTabsNavigation }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Navigation CSS"
							value={ tabs_navigation_css }
							onChange={ onChangeTabsNavigationCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Navigation Icon', 'custom' ) } initialOpen={ false }>

					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onUpdateImage } 
								allowedTypes={["image"]}
								multiple={false}
								render={({ open }) => (
									<>
										<div class="components-base-control">
											<div class="components-base-control">
												<button onClick={open} class="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
													{tabs_navigation_svg_upload.id === null ? 'Upload' : 'Select new file'}
												</button>
												<p>
													{tabs_navigation_svg_upload.name === null ? '' : '(' + tabs_navigation_svg_upload.name + ')'}
												</p>
											</div>
										</div>
									</>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="SVG width"
							value={ tabs_navigation_svg_width }
							onChange={ onChangeSVGWidth }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG height"
							value={ tabs_navigation_svg_height }
							onChange={ onChangeSVGHeight }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG extra css"
							value={ tabs_navigation_svg_extra_css }
							onChange={ onChangeSVGExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG inline style"
							value={ tabs_navigation_svg_style }
							onChange={ onChangeSVGStyle }
							help="By default the system will add width:100%; max-width:{width}px;"
						/>
					</PanelRow>
				</PanelBody>
				
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>

		</>
	);
}
