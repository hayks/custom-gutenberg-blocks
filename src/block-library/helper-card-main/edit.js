import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes, context }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		card_main_extra_css,
		card_main_body_extra_css,
		card_main_type,
	} = attributes;

	const {
		"custom-block/card_type": card_type,
	} = context;

	// copy value from parent context into child attribute
	setAttributes({
		card_main_type: card_type,
	});

	function onChangeCardMainExtraCSS( newValue ) {
		setAttributes( { card_main_extra_css: newValue } );
	}
	function onChangeCardMainBodyExtraCSS( newValue ) {
		setAttributes( { card_main_body_extra_css: newValue } );
	}

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card settings', 'custom' ) } >
					<PanelRow>
						<TextControl
							label="Card main extra css"
							value={ card_main_extra_css }
							onChange={ onChangeCardMainExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Card main body extra css"
							value={ card_main_body_extra_css }
							onChange={ onChangeCardMainBodyExtraCSS }
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
