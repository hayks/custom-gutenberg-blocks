import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		card_flip_extra_css,
		card_flip_body_extra_css,
		card_flip_url_page,
		card_flip_url,
		card_flip_url_target,
		card_flip_url_rel,
	} = attributes;

	function onChangeCardFlipExtraCSS( newValue ) {
		setAttributes( { card_flip_extra_css: newValue } );
	}
	function onChangeCardFlipBodyExtraCSS( newValue ) {
		setAttributes( { card_flip_body_extra_css: newValue } );
	}



	function updateURLviaAjax(page_id){
		//fetch the selected page URL for the current language and save it in a variable so we can use it you build the button link
		apiFetch( { path: '/lattice/v1/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { card_flip_url: page_url } );
			}
		} );
	}
	const handleLinkChange = ( value ) => {
		if ( ! value ) {
			return;
		}

		if( value.id === value.url ){
			let new_value = value;
			new_value.title = value.url;
			setAttributes( { 
				card_flip_url_page: new_value,
				card_flip_url: value.url
			} );
		}else{
			setAttributes( { card_flip_url_page: value } );  
			updateURLviaAjax(value.id);
		}

		//Set link rel if set to open in new tab
		const newLinkTarget = value.opensInNewTab ? '_blank' : undefined;
		let updatedRel = card_flip_url_rel;
		if ( newLinkTarget && ! card_flip_url_rel ) {
			updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
		} else if ( ! newLinkTarget && card_flip_url_rel === NEW_TAB_REL_DEFAULT_VALUE ) {
			updatedRel = undefined;
		}
		setAttributes( {
			card_flip_url_target: newLinkTarget,
			card_flip_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			card_flip_url_page: {},
			card_flip_url: '',
			card_flip_url_target: undefined,
			card_flip_url_rel: ''
		} );  
	}

	// On page load, sync the URL for the current language.
	useEffect( () => {
		if ( card_flip_url_page?.id ) {
			updateURLviaAjax( card_flip_url_page.id );
		}
	}, [ card_flip_url_page?.id ] ); // eslint-disable-line react-hooks/exhaustive-deps


	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card flip settings', 'layout-blocks' ) } >
					<PanelRow>
						<TextControl
							label="Card flip extra css"
							value={ card_flip_extra_css }
							onChange={ onChangeCardFlipExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Card flip body extra css"
							value={ card_flip_body_extra_css }
							onChange={ onChangeCardFlipBodyExtraCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Link settings', 'layout-blocks' ) } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'layout-blocks' ) }
							value={ card_flip_url_rel || '' }
							onChange={ ( newRel ) => {
								setAttributes( { card_flip_url_rel: newRel } );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps( { className: 'flip-card-back ' + card_flip_extra_css } ) }>
				<BlockControls>
					<LinkControl
						searchInputPlaceholder="Search here..."
						value={ card_flip_url_page }
						onChange={ handleLinkChange }
						onRemove={ handleLinkRemove }
						withCreateSuggestion={false}
					>
					</LinkControl>
				</BlockControls>
				<div className={ 'position-relative h-100 ' + card_flip_body_extra_css }>
					<InnerBlocks />
				</div>
			</div>

		</>
	);
}
