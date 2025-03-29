import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes, context }) {
	
	const {
		icon_text_icon_expandable_extra_css,
		icon_text_icon_expandable_id,
	} = attributes;

	const {
		"custom-block/helper-icon-text-id": icon_text_id,
	} = context;

	// copy value from parent context into child attribute
	setAttributes({
		icon_text_icon_expandable_id: icon_text_id,
	});

	function onChangeIconTextExpandableExtraCSS( newValue ) {
		setAttributes( { icon_text_icon_expandable_extra_css: newValue } );
	}

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'custom' ) } >
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
