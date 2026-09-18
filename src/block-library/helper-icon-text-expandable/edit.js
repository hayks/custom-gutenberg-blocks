import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

import './editor.scss';

export default function edit({ attributes, setAttributes, context }) {
	
	const {
		icon_text_icon_expandable_extra_css,
		icon_text_icon_expandable_id,
	} = attributes;

	const {
		"lattice/helper-icon-text-id": icon_text_id,
	} = context;

	// Sync parent context value into child attribute via useEffect
	// to avoid infinite re-render from calling setAttributes in render body.
	useEffect( () => {
		if ( icon_text_id !== undefined && icon_text_id !== icon_text_icon_expandable_id ) {
			setAttributes({ icon_text_icon_expandable_id: icon_text_id });
		}
	}, [ icon_text_id, icon_text_icon_expandable_id, setAttributes ] );

	function onChangeIconTextExpandableExtraCSS( newValue ) {
		setAttributes( { icon_text_icon_expandable_extra_css: newValue } );
	}

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'layout-blocks' ) } >
					<PanelRow>
						<TextControl
							label="Extra css"
							value={ icon_text_icon_expandable_extra_css }
							onChange={ onChangeIconTextExpandableExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks />
			</div>

		</>
	);
}
