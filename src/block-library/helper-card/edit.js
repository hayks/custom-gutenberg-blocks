import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

export default function edit({ attributes, setAttributes, context }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		card_extra_css,
		card_url_page,
		card_url,
		card_url_target,
		card_url_rel,
		card_type,
	} = attributes;

	const {
		"custom-block/card_type": card_type_context,
	} = context;

	function onChangeCardExtraCSS( newValue ) {
		setAttributes( { card_extra_css: newValue } );
	}
	function onChangeCardType( newValue ) {
		setAttributes( { card_type: newValue } );
	}



	function updateURLviaAjax(page_id){
		//fetch the selected page URL for the current language and save it in a variable so we can use it you build the button link
		apiFetch( { path: '/custom/v2/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { card_url: page_url } );
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
				card_url_page: new_value,
				card_url: value.url
			} );
		}else{
			setAttributes( { card_url_page: value } );  
			updateURLviaAjax(value.id);
		}

		//Set link rel if set to open in new tab
		const newLinkTarget = value.opensInNewTab ? '_blank' : undefined;
		let updatedRel = card_url_rel;
		if ( newLinkTarget && ! card_url_rel ) {
			updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
		} else if ( ! newLinkTarget && card_url_rel === NEW_TAB_REL_DEFAULT_VALUE ) {
			updatedRel = undefined;
		}
		setAttributes( {
			card_url_target: value.opensInNewTab,
			card_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			card_url_page: '',
			card_url: '',
			card_url_target: false,
			card_url_rel: ''
		} );  
	}

	//Force update on page load - make sure to set the correct page URL even if the button has been copied from another language
	updateURLviaAjax(card_url_page.id);


	const REGULAR_TEMPLATE = [
		['custom-block/helper-card-main'],
	];
	const REGULAR_TEMPLATE_ALLOWED_BLOCKS = [
		['custom-block/helper-card-main'],
	];

	const FLIP_TEMPLATE = [
		['custom-block/helper-card-main'],
		['custom-block/helper-card-flip'],
	];
	const FLIP_TEMPLATE_ALLOWED_BLOCKS = [
		['custom-block/helper-card-main'],
		['custom-block/helper-card-flip'],
	];

	const MEDIA_TEMPLATE = [
		['custom-block/helper-card-main'],
		['custom-block/helper-card-media'],
	];
	const MEDIA_TEMPLATE_ALLOWED_BLOCKS = [
		['custom-block/helper-card-main'],
		['custom-block/helper-card-media'],
	];


	const blockProps = useBlockProps( {
		className: 'card'+card_extra_css,
	} );

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card settings', 'custom' ) } >
					<PanelRow>
						<SelectControl
							label="Card type"
							value={ card_type }
							options={ [
								{ label: 'Regular', value: 'regular' },
								{ label: 'Flip', value: 'flip' },
								{ label: 'Media', value: 'media' },
							] }
							onChange={ onChangeCardType }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Card extra css"
							value={ card_extra_css }
							onChange={ onChangeCardExtraCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Link settings', 'custom' ) } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'custom' ) }
							value={ card_url_rel || '' }
							onChange={ ( newRel ) => {
								setAttributes( { card_url_rel: newRel } );
							} }
						/>
					</PanelRow>
				</PanelBody>

			</InspectorControls>

			{
				(() => {
					if(card_type==='flip') {
						return (
							<div { ...blockProps }>
								<BlockControls>
									<LinkControl
										searchInputPlaceholder="Search here..."
										value={ card_url_page }
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
								<InnerBlocks
									template={FLIP_TEMPLATE}
									allowedBlocks={FLIP_TEMPLATE_ALLOWED_BLOCKS}
								/>
								{card_url.length > 0 &&
									<a href={ card_url } rel={ card_url_rel } target={ card_url_target } class={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
								}
							</div>
						)
					} else if (card_type==='media') {
						return (
							<div { ...blockProps }>
								<BlockControls>
									<LinkControl
										searchInputPlaceholder="Search here..."
										value={ card_url_page }
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
								<InnerBlocks
									template={MEDIA_TEMPLATE}
									allowedBlocks={MEDIA_TEMPLATE_ALLOWED_BLOCKS}
								/>
								{card_url.length > 0 &&
									<a href={ card_url } rel={ card_url_rel } target={ card_url_target } class={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
								}
							</div>
						)
					} else {
						return (
							//...useBlockProps()
							<div { ...blockProps }>
								<BlockControls>
									<LinkControl
										searchInputPlaceholder="Search here..."
										value={ card_url_page }
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
								<InnerBlocks
									template={REGULAR_TEMPLATE}
									allowedBlocks={REGULAR_TEMPLATE_ALLOWED_BLOCKS}
								/>
								{card_url.length > 0 &&
									<a href={ card_url } rel={ card_url_rel } target={ card_url_target } class={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
								}
							</div>
						)
					}
				})()  
			} 


		</>
	);
}
