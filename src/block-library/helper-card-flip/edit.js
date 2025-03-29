import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

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
		apiFetch( { path: '/custom/v2/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { card_flip_url: page_url } );
			}
		} );
	}
	const handleLinkChange = ( value ) => {
		/*
			id: 180408
			kind: "post-type"
			title: "<strong>Резерват Тисата в Пирин: какво ви очаква?</strong>"
			type: "post"
			url: "https://luckybansko.bg.custom.local/rezervat-tisata-v-pirin-kakvo-vi-ochakva-p180408/"
			opensInNewTab: true
		*/

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
			card_flip_url_target: value.opensInNewTab,
			card_flip_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			card_flip_url_page: '',
			card_flip_url: '',
			card_flip_url_target: false,
			card_flip_url_rel: ''
		} );  
	}

	//Force update on page load - make sure to set the correct page URL even if the button has been copied from another language
	updateURLviaAjax(card_flip_url_page.id);


	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card flip settings', 'custom' ) } >
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

				<PanelBody title={ __( 'Link settings', 'custom' ) } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'custom' ) }
							value={ card_flip_url_rel || '' }
							onChange={ ( newRel ) => {
								setAttributes( { card_flip_url_rel: newRel } );
							} }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<BlockControls>
					<LinkControl
						searchInputPlaceholder="Search here..."
						value={ card_flip_url_page }
						/*
						settings={[
							{
								id: 'opensInNewTab',
								title: 'New tab?',
							},
							{
								id: 'customDifferentSetting',
								title: 'Has this custom setting?'
							}
						]}
						*/
						onChange={ handleLinkChange }
						onRemove={ handleLinkRemove }
						//onChange={ ( newPost ) => setAttributes( { post: newPost } ) }
						withCreateSuggestion={false}
					>
					</LinkControl>
				</BlockControls>
				<InnerBlocks />
			</div>

		</>
	);
}
