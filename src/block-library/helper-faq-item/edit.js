import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl } from '@wordpress/components';

import './editor.scss';

const isFAQItemIdReserved = ( faq_item_id, clientId ) => {
    const blocksClientIds = wp.data.select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { faq_item_id: _faq_item_id } = wp.data.select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return clientId !== _clientId && faq_item_id === _faq_item_id;
    } );
};

export default function edit({ attributes, setAttributes, context, clientId }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		faq_item_extra_css,
		faq_item_text_extra_css,
		faq_item_question,
		faq_item_id,
		faq_item_always_open,
		faq_item_section_id,
		faq_item_structured_data,
	} = attributes;

	const {
		"custom-block/helper-faq-always-open": faq_always_open,
		"custom-block/helper-faq-section-id": faq_section_id,
		"custom-block/helper-faq-structured_data": faq_structured_data
	} = context;

	// copy value from parent context into child attribute
	setAttributes({
		faq_item_always_open: faq_always_open,
		faq_item_section_id: faq_section_id,
		faq_item_structured_data: faq_structured_data,
	});

	function onChangeFAQItemExtraCSS( newValue ) {
		setAttributes( { faq_item_extra_css: newValue } );
	}
	function onChangeFAQItemTextExtraCSS(newValue) {
		setAttributes({ faq_item_text_extra_css: newValue });
	}
	function onChangeFAQItemQuestion(newVal) {
		setAttributes({ faq_item_question: newVal });
	}
	function onChangeFAQItemID(newVal) {
		setAttributes({ faq_item_id: newVal });
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

	const setFreshFAQItemId = () => {
		setAttributes({ faq_item_id: makeid(8) });
	};

	if(faq_item_id.length === 0){
		setFreshFAQItemId();
	}

	if ( isFAQItemIdReserved( faq_item_id, clientId ) ) {
		//console.log( `Tab with id '${ faq_item_id }' already exists. Regenerating...`, faq_item_id );
		setFreshFAQItemId();
	}

	const FAQ_ITEM_TEMPLATE_ALLOWED_BLOCKS = [
		['core/paragraph']
	];

	const blockPropsTitle = useBlockProps( {
		className: 'accordion_title',
	} );

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'FAQ item settings', 'custom' ) } >
					<PanelRow>
						<TextControl
							label="FAQ item ID"
							value={ faq_item_id }
							onChange={ onChangeFAQItemID }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="FAQ item extra css"
							value={ faq_item_extra_css }
							onChange={ onChangeFAQItemExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="FAQ item text extra css"
							value={ faq_item_text_extra_css }
							onChange={ onChangeFAQItemTextExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<RichText 
					{ ...blockPropsTitle }
					value={faq_item_question}
					onChange={onChangeFAQItemQuestion}
					allowedFormats={ [] }
					keepPlaceholderOnFocus
					placeholder='Enter question here.'
				/>
				<InnerBlocks />
			</div>

		</>
	);
}
