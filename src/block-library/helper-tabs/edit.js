import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { RawHTML, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { buildTabsNavigationHtml } from '../editor-utils';

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

	const innerBlocks = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlocks( clientId );
	}, [ clientId ] );

	useEffect( () => {
		const navigationHTML = buildTabsNavigationHtml( attributes, innerBlocks );
		if ( navigationHTML !== tabs_navigation ) {
			setAttributes( { tabs_navigation: navigationHTML } );
		}
	}, [ innerBlocks, tabs_navigation_container_css, tabs_navigation_row_css, tabs_navigation_col_css, tabs_navigation_list_css, tabs_navigation_item_css ] ); // eslint-disable-line react-hooks/exhaustive-deps

	const TABS_TEMPLATE_ALLOWED_BLOCKS = [
		'lattice/helper-tabs-item'
	];

	const blockProps = useBlockProps( {
		className: ' tab-content ',
	} );

	return (
		<>	
			<InspectorControls>

				<PanelBody title={ __( 'Classes', 'layout-blocks' ) } >
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

			<div className={ 'wp-block-lattice-helper-tabs_navigation' }><RawHTML>{ tabs_navigation }</RawHTML></div>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={TABS_TEMPLATE_ALLOWED_BLOCKS}
				/>
			</div>
		</>
	);
}
