import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEffect } from '@wordpress/element';
import { makeId } from '../editor-utils';

import './editor.scss';

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
		"lattice/helper-faq-always-open": faq_always_open,
		"lattice/helper-faq-section-id": faq_section_id,
		"lattice/helper-faq-structured_data": faq_structured_data
	} = context;

	const selectSiblings = useSelect( ( select ) => {
		const editor = select( 'core/block-editor' );
		const parents = editor.getBlockParentsByBlockName( clientId, 'lattice/helper-faq' );
		if ( ! parents[0] ) {
			return [];
		}
		return editor.getBlocks( parents[0] );
	}, [ clientId ] );

	useEffect( () => {
		if (
			faq_item_always_open !== faq_always_open ||
			faq_item_section_id !== faq_section_id ||
			faq_item_structured_data !== faq_structured_data
		) {
			setAttributes({
				faq_item_always_open: faq_always_open,
				faq_item_section_id: faq_section_id,
				faq_item_structured_data: faq_structured_data,
			});
		}
	}, [ faq_always_open, faq_section_id, faq_structured_data, faq_item_always_open, faq_item_section_id, faq_item_structured_data, setAttributes ] );

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

	useEffect( () => {
		if ( ! faq_item_id ) {
			setAttributes({ faq_item_id: makeId() });
			return;
		}
		const siblings = selectSiblings || [];
		const firstWithId = siblings.find( ( block ) => block.attributes?.faq_item_id === faq_item_id );
		if ( firstWithId && firstWithId.clientId !== clientId ) {
			setAttributes({ faq_item_id: makeId() });
		}
	}, [ faq_item_id, selectSiblings, clientId, setAttributes ] );

	const FAQ_ITEM_TEMPLATE_ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/image',
		'core/buttons',
		'lattice/helper-button',
		'lattice/helper-icon',
		'lattice/helper-icon-text',
	];

	const blockProps = useBlockProps();
	const titleProps = { className: 'accordion_title' };

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'FAQ item settings', 'layout-blocks' ) } >
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

			<div { ...blockProps }>
				<RichText 
					{ ...titleProps }
					value={faq_item_question}
					onChange={onChangeFAQItemQuestion}
					allowedFormats={ [] }
					keepPlaceholderOnFocus
					placeholder='Enter question here.'
				/>
				<InnerBlocks allowedBlocks={ FAQ_ITEM_TEMPLATE_ALLOWED_BLOCKS } />
			</div>

		</>
	);
}
