import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';

import './editor.scss';

export default function edit({ attributes, setAttributes, context }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		card_main_extra_css,
		card_main_body_extra_css,
		card_main_type,
	} = attributes;

	const {
		"lattice/card_type": card_type,
	} = context;

	// Sync parent context value into child attribute via useEffect
	// to avoid infinite re-render from calling setAttributes in render body.
	useEffect( () => {
		if ( card_type !== undefined && card_type !== card_main_type ) {
			setAttributes({ card_main_type: card_type });
		}
	}, [ card_type, card_main_type, setAttributes ] );

	function onChangeCardMainExtraCSS( newValue ) {
		setAttributes( { card_main_extra_css: newValue } );
	}
	function onChangeCardMainBodyExtraCSS( newValue ) {
		setAttributes( { card_main_body_extra_css: newValue } );
	}

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card settings', 'layout-blocks' ) } >
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

			<div { ...useBlockProps( {
				className: card_main_type === 'flip'
					? 'flip-card-front ' + card_main_extra_css
					: card_main_type === 'media'
						? 'col-sm-12 ' + card_main_extra_css
						: 'card-body ' + card_main_extra_css,
			} ) }>
				<div className={
					card_main_type === 'flip'
						? 'position-relative h-100 ' + card_main_body_extra_css
						: card_main_type === 'media'
							? 'card-body ' + card_main_body_extra_css
							: card_main_body_extra_css
				}>
					<InnerBlocks />
				</div>
			</div>

		</>
	);
}
