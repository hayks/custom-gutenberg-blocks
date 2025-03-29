import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';

import './editor.scss';

const isFAQSectionIdReserved = ( faq_section_id, clientId ) => {
    const blocksClientIds = wp.data.select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { faq_section_id: _faq_section_id } = wp.data.select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return clientId !== _clientId && faq_section_id === _faq_section_id;
    } );
};

export default function edit({ attributes, setAttributes, clientId }) {
	
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

	const setFreshFAQSectionId = () => {
		setAttributes({ faq_section_id: makeid(8) });
	};

	if(faq_section_id.length === 0){
		setFreshFAQSectionId();
	}

	if ( isFAQSectionIdReserved( faq_section_id, clientId ) ) {
		//console.log( `Tab with id '${ faq_section_id }' already exists. Regenerating...`, faq_section_id );
		setFreshFAQSectionId();
	}

	const FAQ_TEMPLATE_ALLOWED_BLOCKS = [
		['custom-block/helper-faq-item']
	];

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Faq settings', 'custom' ) } >
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

			<div { ...useBlockProps() }>
				<InnerBlocks
					allowedBlocks={FAQ_TEMPLATE_ALLOWED_BLOCKS}
				/>
			</div>

		</>
	);
}
