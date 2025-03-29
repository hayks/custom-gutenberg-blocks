import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		spacer_type,
		spacer_type_sm,
		spacer_type_md,
		spacer_type_lg,
		spacer_type_xl,
		spacer_type_xxl,
		spacer_extra_css,
	} = attributes;

	const spacerOptions = [
		{ label: '- Select -', 			value: '' },
		{ label: '0 = 0px/0rem', 		value: '0' },
		{ label: '1 = 4px/0.25rem', 	value: '1' },
		{ label: '2 = 8px/0.5rem', 		value: '2' },
		{ label: '3 = 16px/1rem', 		value: '3' },
		{ label: '4 = 20px/1.25rem', 	value: '4' },
		{ label: '5 = 24px/1.5rem', 	value: '5' },
		{ label: '6 = 32px/2rem', 		value: '6' },
		{ label: '7 = 40px/2.5rem', 	value: '7' },
		{ label: '8 = 48px/3rem', 		value: '8' },
		{ label: '9 = 56px/3.5rem', 	value: '9' },
		{ label: '10 = 64px/4rem', 		value: '10' },
		{ label: '11 = 80px/5rem', 		value: '11' },
		{ label: '12 = 96px/6rem', 		value: '12' },
		{ label: '13 = 128px/8rem', 	value: '13' },
		{ label: '14 = 160px/10rem', 	value: '14' },
		{ label: '15 = 192px/12rem', 	value: '15' },
		{ label: '16 = 224px/14rem', 	value: '16' },
		{ label: '17 = 256px/16rem', 	value: '17' },
	];

	function onChangeSpacerType( newValue ) {
		setAttributes( { spacer_type: newValue } );
	}
	function onChangeSpacerTypeSM( newValue ) {
		setAttributes( { spacer_type_sm: newValue } );
	}
	function onChangeSpacerTypeMD( newValue ) {
		setAttributes( { spacer_type_md: newValue } );
	}
	function onChangeSpacerTypeLG( newValue ) {
		setAttributes( { spacer_type_lg: newValue } );
	}
	function onChangeSpacerTypeXL( newValue ) {
		setAttributes( { spacer_type_xl: newValue } );
	}
	function onChangeSpacerTypeXXL( newValue ) {
		setAttributes( { spacer_type_xxl: newValue } );
	}
	function onChangeSpacerExtraCSS( newValue ) {
		setAttributes( { spacer_extra_css: newValue } );
	}

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Spacer settings', 'custom' ) } >
					<PanelRow>
						<SelectControl
							label="Spacer type"
							value={ spacer_type }
							options={ spacerOptions }
							onChange={ onChangeSpacerType }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Spacer type - SM"
							value={ spacer_type_sm }
							options={ spacerOptions }
							onChange={ onChangeSpacerTypeSM }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Spacer type - MD"
							value={ spacer_type_md }
							options={ spacerOptions }
							onChange={ onChangeSpacerTypeMD }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Spacer type - LG"
							value={ spacer_type_lg }
							options={ spacerOptions }
							onChange={ onChangeSpacerTypeLG }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Spacer type - XL"
							value={ spacer_type_xl }
							options={ spacerOptions }
							onChange={ onChangeSpacerTypeXL }
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Spacer type - XXL"
							value={ spacer_type_xxl }
							options={ spacerOptions }
							onChange={ onChangeSpacerTypeXXL }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Spacer extra css"
							value={ spacer_extra_css }
							onChange={ onChangeSpacerExtraCSS }
						/>
					</PanelRow>

				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps({ className: 'spacer-'+spacer_type }) }></div>

		</>
	);
}
