import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { makeId } from '../editor-utils';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		faq_extra_css,
		faq_always_open,
		faq_section_id,
		faq_structured_data,
	} = attributes;


	function onChangeAlwaysOpen() {
		setAttributes( { faq_always_open: !faq_always_open } );
	}
	function onChangeSectionID( newValue ) {
		setAttributes( { faq_section_id: newValue } );
	}
	function onChangeFAQExtraCSS( newValue ) {
		setAttributes( { faq_extra_css: newValue } );
	}
	function onChangeStructuredData( newValue ) {
		setAttributes( { faq_structured_data: newValue } );
	}

	useEffect( () => {
		if ( ! faq_section_id ) {
			setAttributes( { faq_section_id: makeId() } );
		}
	}, [ faq_section_id, setAttributes ] );

	const FAQ_TEMPLATE_ALLOWED_BLOCKS = [
		'lattice/helper-faq-item'
	];

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Faq settings', 'layout-blocks' ) } >
					<PanelRow>
						<ToggleControl
							label={ __( 'Always open' ) }
							checked={ !!faq_always_open }
							onChange={ onChangeAlwaysOpen }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Section ID"
							value={ faq_section_id }
							onChange={ onChangeSectionID }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="FAQ Extra CSS"
							value={ faq_extra_css }
							onChange={ onChangeFAQExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
				        <SelectControl
				            label="Structured data"
				            value={ faq_structured_data }
				            options={ [
				                { value: 'none', label: 'None' },
				                { value: 'faq', label: 'FAQ' },
				            ] }
				            onChange={ onChangeStructuredData }
				        />

			        </PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( {
				className: 'accordion accordion-flush ' + faq_extra_css,
				id: faq_section_id ? 'accordion-' + faq_section_id : undefined,
			} ) }>
				<InnerBlocks
					allowedBlocks={FAQ_TEMPLATE_ALLOWED_BLOCKS}
				/>
			</div>

		</>
	);
}
