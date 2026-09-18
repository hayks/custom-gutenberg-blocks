import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { buildTabsNavigationHtml, makeId } from '../editor-utils';

import './editor.scss';

export default function edit({ attributes, setAttributes, clientId }) {
	const blockIndex = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlockIndex( clientId );
	}, [ clientId ] );
	const { updateBlockAttributes } = useDispatch( 'core/block-editor' );
	
	const {
		tabs_item_extra_css,
		tabs_item_id,
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

	const parentClientId = useSelect( ( select ) => {
		const parents = select( 'core/block-editor' ).getBlockParentsByBlockName( clientId, 'lattice/helper-tabs' );
		return parents[0];
	}, [ clientId ] );

	const parentData = useSelect( ( select ) => {
		if ( ! parentClientId ) {
			return null;
		}
		const editor = select( 'core/block-editor' );
		return {
			attributes: editor.getBlockAttributes( parentClientId ),
			innerBlocks: editor.getBlocks( parentClientId ),
		};
	}, [ parentClientId ] );

	function updateParentNavigation() {
		if ( ! parentData || ! parentClientId ) {
			return;
		}
		const navigationHTML = buildTabsNavigationHtml( parentData.attributes, parentData.innerBlocks );
		if ( navigationHTML && navigationHTML !== parentData.attributes?.tabs_navigation ) {
			updateBlockAttributes( parentClientId, {
				tabs_navigation: navigationHTML,
			} );
		}
	}

	function onChangeTabsItemID( newValue ) {
		setAttributes( { tabs_item_id: newValue || makeId() } );
		updateParentNavigation();
	}

	useEffect( () => {
		if ( ! tabs_item_id ) {
			setAttributes( { tabs_item_id: makeId() } );
			return;
		}
		const siblings = parentData?.innerBlocks || [];
		const firstWithId = siblings.find( ( block ) => block.attributes?.tabs_item_id === tabs_item_id );
		if ( firstWithId && firstWithId.clientId !== clientId ) {
			setAttributes( { tabs_item_id: makeId() } );
		}
	}, [ tabs_item_id, parentData, clientId, setAttributes ] );

	useEffect( () => {
		updateParentNavigation();
	}, [ tabs_item_id, tabs_navigation, tabs_navigation_css, tabs_navigation_svg_upload, tabs_navigation_svg_width, tabs_navigation_svg_height, tabs_navigation_svg_extra_css, tabs_navigation_svg_style, parentClientId ] ); // eslint-disable-line react-hooks/exhaustive-deps

	useEffect( () => {
		if ( Number.isInteger( blockIndex ) && attributes.tabs_item_index !== blockIndex ) {
			setAttributes( { tabs_item_index: parseInt( blockIndex, 10 ) } );
		}
	}, [ blockIndex ] ); // eslint-disable-line react-hooks/exhaustive-deps

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
		className: 'tab-' + tabs_item_id + ( Number.isInteger( blockIndex ) && blockIndex === 0 ? ' show active' : '' ),
		role: 'tabpanel'
	} );

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Tab Settings', 'layout-blocks' ) } initialOpen={ true }>
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

				<PanelBody title={ __( 'Navigation', 'layout-blocks' ) } initialOpen={ true }>
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

				<PanelBody title={ __( 'Navigation Icon', 'layout-blocks' ) } initialOpen={ false }>

					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onUpdateImage } 
								allowedTypes={["image"]}
								multiple={false}
								render={({ open }) => (
									<>
										<div className="components-base-control">
											<div className="components-base-control">
												<button onClick={open} className="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
													{tabs_navigation_svg_upload?.id ? 'Select new file' : 'Upload'}
												</button>
												<p>
													{tabs_navigation_svg_upload?.name ? '(' + tabs_navigation_svg_upload.name + ')' : ''}
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
