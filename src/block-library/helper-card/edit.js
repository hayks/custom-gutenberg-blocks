import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, SelectControl, ToggleControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useRef } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { createBlock } from '@wordpress/blocks';

import './editor.scss';

export default function edit({ attributes, setAttributes, clientId }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		card_extra_css,
		card_url_page,
		card_url,
		card_url_target,
		card_url_rel,
		card_type,
	} = attributes;

	function onChangeCardExtraCSS( newValue ) {
		setAttributes( { card_extra_css: newValue } );
	}
	function onChangeCardType( newValue ) {
		setAttributes( { card_type: newValue } );
	}



	function updateURLviaAjax(page_id){
		//fetch the selected page URL for the current language and save it in a variable so we can use it you build the button link
		apiFetch( { path: '/lattice/v1/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { card_url: page_url } );
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
			card_url_target: newLinkTarget,
			card_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			card_url_page: {},
			card_url: '',
			card_url_target: undefined,
			card_url_rel: ''
		} );  
	}

	// On page load, sync the URL for the current language.
	// useEffect prevents the infinite re-render loop that occurred when
	// updateURLviaAjax was called directly in the render body.
	useEffect( () => {
		if ( card_url_page?.id ) {
			updateURLviaAjax( card_url_page.id );
		}
	}, [ card_url_page?.id ] ); // eslint-disable-line react-hooks/exhaustive-deps


	const REGULAR_TEMPLATE = [
		['lattice/helper-card-main'],
	];
	const REGULAR_TEMPLATE_ALLOWED_BLOCKS = [
		'lattice/helper-card-main',
	];

	const FLIP_TEMPLATE = [
		['lattice/helper-card-main'],
		['lattice/helper-card-flip'],
	];
	const FLIP_TEMPLATE_ALLOWED_BLOCKS = [
		'lattice/helper-card-main',
		'lattice/helper-card-flip',
	];

	const MEDIA_TEMPLATE = [
		['lattice/helper-card-main'],
		['lattice/helper-card-media'],
	];
	const MEDIA_TEMPLATE_ALLOWED_BLOCKS = [
		'lattice/helper-card-main',
		'lattice/helper-card-media',
	];

	const innerBlocks = useSelect( ( select ) => {
		return select( 'core/block-editor' ).getBlocks( clientId );
	}, [ clientId ] );
	const { replaceInnerBlocks } = useDispatch( 'core/block-editor' );
	const previousType = useRef( card_type );

	useEffect( () => {
		if ( previousType.current === card_type ) {
			return;
		}
		previousType.current = card_type;

		const main = innerBlocks.find( ( block ) => block.name === 'lattice/helper-card-main' )
			|| createBlock( 'lattice/helper-card-main' );

		if ( card_type === 'flip' ) {
			const flip = innerBlocks.find( ( block ) => block.name === 'lattice/helper-card-flip' )
				|| createBlock( 'lattice/helper-card-flip' );
			replaceInnerBlocks( clientId, [ main, flip ], false );
			return;
		}

		if ( card_type === 'media' ) {
			const media = innerBlocks.find( ( block ) => block.name === 'lattice/helper-card-media' )
				|| createBlock( 'lattice/helper-card-media' );
			replaceInnerBlocks( clientId, [ main, media ], false );
			return;
		}

		replaceInnerBlocks( clientId, [ main ], false );
	}, [ card_type, clientId, innerBlocks, replaceInnerBlocks ] );

	const blockProps = useBlockProps( {
		className: 'card ' + ( card_type === 'flip' ? 'flip-card ' : '' ) + card_extra_css,
	} );

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Card settings', 'layout-blocks' ) } >
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

				<PanelBody title={ __( 'Link settings', 'layout-blocks' ) } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'layout-blocks' ) }
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
								<div className="flip-card-inner">
									<InnerBlocks
										template={FLIP_TEMPLATE}
										allowedBlocks={FLIP_TEMPLATE_ALLOWED_BLOCKS}
										templateLock="insert"
									/>
									{card_url && card_url.length > 0 &&
										<a href={ card_url } rel={ card_url_rel } target={ card_url_target } className={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
									}
								</div>
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
								<div className="row g-0">
									<InnerBlocks
										template={MEDIA_TEMPLATE}
										allowedBlocks={MEDIA_TEMPLATE_ALLOWED_BLOCKS}
										templateLock="insert"
									/>
									{card_url && card_url.length > 0 &&
										<a href={ card_url } rel={ card_url_rel } target={ card_url_target } className={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
									}
								</div>
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
									templateLock="insert"
								/>
								{card_url && card_url.length > 0 &&
									<a href={ card_url } rel={ card_url_rel } target={ card_url_target } className={ 'overlay-link position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
								}
							</div>
						)
					}
				})()  
			} 


		</>
	);
}
