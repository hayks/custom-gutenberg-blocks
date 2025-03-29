import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		card_media_extra_css,
	} = attributes;

	function onChangeCardMediaExtraCSS( newValue ) {
		setAttributes( { card_media_extra_css: newValue } );
	}

	//Create a template so only an image block can be placed inside
	const MEDIA_TEMPLATE = [
		['core/image'],
	];

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card settings', 'custom' ) } >
					<PanelRow>
						<TextControl
							label="Card media extra css"
							value={ card_media_extra_css }
							onChange={ onChangeCardMediaExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks
					template={MEDIA_TEMPLATE}
					templateLock="all"
				/>
			</div>

		</>
	);
}
