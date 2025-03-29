import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, InspectorControls, __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, ToggleControl, SelectControl, Dashicon } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';
import { RawHTML } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';

export default function edit({ attributes, isSelected, setAttributes }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		button_extra_css,
		button_text_extra_css,
		button_text,

		button_page,
		button_url,
		button_url_target,
		button_url_rel,

		button_icon_name,
		button_icon_library,
		button_icon_width,
		button_icon_height,
		button_icon_extra_css,
		button_icon_style,
		button_icon_poistion,

		button_video_youtube,
		button_video_vimeo,
	} = attributes;

	


	function onChangeButtonExtraCSS( newValue ) {
		setAttributes( { button_extra_css: newValue } );
	}
	function onChangeButtonTextExtraCSS( newValue ) {
		setAttributes( { button_text_extra_css: newValue } );
	}


	function editButtonText(newVal) {
		setAttributes({ button_text: newVal });
	}


	function onChangeButtonIconName( newValue ) {
		setAttributes( { button_icon_name: newValue } );
	}
	function onChangeButtonIconLibrary( newValue ) {
		setAttributes( { button_icon_library: newValue } );
	}
	function onChangeButtonIconWidth( newValue ) {
		setAttributes( { button_icon_width: newValue } );
	}
	function onChangeButtonIconHeight( newValue ) {
		setAttributes( { button_icon_height: newValue } );
	}
	function onChangeButtonIconExtraCSS( newValue ) {
		setAttributes( { button_icon_extra_css: newValue } );
	}
	function onChangeButtonIconStyle( newValue ) {
		setAttributes( { button_icon_style: newValue } );
	}
	function onChangeButtonIconPosition( newValue ) {
		setAttributes( { button_icon_poistion: newValue } );
	}


	function onChangeButtonVideoYoutube( newValue ) {
		setAttributes( { button_video_youtube: newValue } );
	}
	function onChangeButtonVideoVimeo( newValue ) {
		setAttributes( { button_video_vimeo: newValue } );
	}

	function updateURLviaAjax(page_id){
		//fetch the selected page URL for the current language and save it in a variable so we can use it you build the button link
		apiFetch( { path: '/custom/v2/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { button_url: page_url } );
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
				button_page: new_value,
				button_url: value.url
			} );
		}else{
			setAttributes( { button_page: value } );  
			updateURLviaAjax(value.id);
		}

		//Set link rel if set to open in new tab
		const newLinkTarget = value.opensInNewTab ? '_blank' : undefined;
		let updatedRel = button_url_rel;
		if ( newLinkTarget && ! button_url_rel ) {
			updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
		} else if ( ! newLinkTarget && button_url_rel === NEW_TAB_REL_DEFAULT_VALUE ) {
			updatedRel = undefined;
		}
		setAttributes( {
			button_url_target: value.opensInNewTab,
			button_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			button_page: '',
			button_url: '',
			button_url_target: false,
			button_url_rel: ''
		} );  
	}

	let icon_path = '';
	if(button_icon_name != '' && button_icon_library==='carbon'){
		icon_path = '/wp-content/themes/'+wordpress_theme.template+'/assets/icons/carbon/node_modules/@carbon/icons/svg/32/'+button_icon_name+'.svg';
	}else if(button_icon_name != '' && button_icon_library==='custom'){
		icon_path = '/wp-content/themes/'+wordpress_theme.stylesheet+'/assets/icons/custom/'+button_icon_name+'.svg';
	}else if(button_icon_name != '' && button_icon_library==='bootstrap'){
		icon_path = '/wp-content/themes/'+wordpress_theme.template+'/assets/icons/carbon/node_modules/@carbon/icons/svg/32/'+button_icon_name+'.svg';
	}

	let iconStyle = {
		display: 'inline-block',
		margin: '0 6px',
	};
	if(button_icon_style!=''){
		let iconStyleParsed = parseInlineStyle(button_icon_style);  
		iconStyle = { ...iconStyle, ...iconStyleParsed };
	}
	const blockPropsIcon = useBlockProps( { class: button_icon_extra_css, style: iconStyle } );


	//console.log(icon_path);

	//Force update on page load - make sure to set the correct page URL even if the button has been copied from another language
	updateURLviaAjax(button_page.id);

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Link', 'custom' ) } initialOpen={ true } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'custom' ) }
							value={ button_url_rel || '' }
							onChange={ ( newRel ) => {
								setAttributes( { button_url_rel: newRel } );
							} }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'CSS Classes', 'custom' ) } initialOpen={ false } >
					<PanelRow>
						<TextControl
							label="CSS Class for the button"
							value={ button_extra_css }
							onChange={ onChangeButtonExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="CSS Class for the text wrapper"
							value={ button_text_extra_css }
							onChange={ onChangeButtonTextExtraCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Icon', 'custom' ) } initialOpen={ false } >

					<PanelRow>
						<TextControl
							label="Icon name"
							value={ button_icon_name }
							onChange={ onChangeButtonIconName }
						/>
					</PanelRow>

					<PanelRow>
						<SelectControl
							label="Icon library"
							value={ button_icon_library }
							options={ [
								{ label: 'Carbon', value: 'carbon' },
								{ label: 'Bootstrap', value: 'bootstrap' },
								{ label: 'Custom', value: 'custom' },
							] }
							onChange={ onChangeButtonIconLibrary }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon width"
							value={ button_icon_width }
							onChange={ onChangeButtonIconWidth }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon height"
							value={ button_icon_height }
							onChange={ onChangeButtonIconHeight }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon extra css"
							value={ button_icon_extra_css }
							onChange={ onChangeButtonIconExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon inline style"
							value={ button_icon_style }
							onChange={ onChangeButtonIconStyle }
						/>
					</PanelRow>

					<PanelRow>
				        <SelectControl
				            label="Icon poition"
				            value={ button_icon_poistion }
				            options={ [
								{ label: 'Right', value: 'right' },
								{ label: 'Left', value: 'left' }
				            ] }
				            onChange={ onChangeButtonIconPosition }
				        />
					</PanelRow>

				</PanelBody>

				<PanelBody title={ __( 'Video popup', 'custom' ) } initialOpen={ false } >
					<PanelRow>
						<TextControl
							label="YouTube"
							value={ button_video_youtube }
							onChange={ onChangeButtonVideoYoutube }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Vimeo"
							value={ button_video_vimeo }
							onChange={ onChangeButtonVideoVimeo }
						/>
					</PanelRow>
				</PanelBody>

			</InspectorControls>

			{
				(() => {
					if(button_icon_poistion==='right') {
						if(button_video_youtube) {
							return (
								<>
									<div { ...useBlockProps() }>
										<BlockControls>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={ button_page }
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
										<span rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-youtube={ button_video_youtube } >
											<span class={ button_text_extra_css }>{button_text}</span> 
											{
												(() => {
													if(icon_path != '') {
														return (
															<>
																<img { ...blockPropsIcon } src={ icon_path } width={button_icon_width} height={button_icon_height} />
															</>
														);
													}
												})()  
											}
										</span>
									</div>
								</>
							);
						} else if(button_video_vimeo) {
							return (
								<>
									<div { ...useBlockProps() }>
										<BlockControls>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={ button_page }
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
										<span rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-vimeo={ button_video_vimeo } >
											<span class={ button_text_extra_css }>{button_text}</span> 
											{
												(() => {
													if(icon_path != '') {
														return (
															<>
																<img { ...blockPropsIcon } src={ icon_path } width={button_icon_width} height={button_icon_height} />
															</>
														);
													}
												})()  
											}
										</span>
									</div>
								</>
							);
						}else{
							return (
								<>
									<div { ...useBlockProps() }>
										<BlockControls>
											<LinkControl
														searchInputPlaceholder="Search here..."
														value={ button_page }
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
										<span rel={ button_url_rel } class={ button_extra_css } >
											<span class={ button_text_extra_css }>
												<RichText 
													value={button_text}
													onChange={editButtonText}
													allowedFormats={ [] }
													keepPlaceholderOnFocus
													placeholder='Enter text here.'
												/>
											</span> 
											{
												(() => {
													if(icon_path != '') {
														return (
															<>
																<img { ...blockPropsIcon } src={ icon_path } width={button_icon_width} height={button_icon_height} />
															</>
														);
													}
												})()  
											}
										</span>
									</div>

								</>
							);
						}
					} else {
						if(button_video_youtube) {
							return (
								<>
									<div { ...useBlockProps() }>
										<BlockControls>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={ button_page }
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
										<span rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-youtube={ button_video_youtube } >
											{
												(() => {
													if(icon_path != '') {
														return (
															<>
																<img { ...blockPropsIcon } src={ icon_path } width={button_icon_width} height={button_icon_height} />
															</>
														);
													}
												})()  
											}
											<span class={ button_text_extra_css }>{button_text}</span>
										</span>
									</div>
								</>
							);
						} else if(button_video_vimeo) {
							return (
								<>
									<div { ...useBlockProps() }>
										<BlockControls>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={ button_page }
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
										<span rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } data-popup-vimeo={ button_video_vimeo } >
											{
												(() => {
													if(icon_path != '') {
														return (
															<>
																<img { ...blockPropsIcon } src={ icon_path } width={button_icon_width} height={button_icon_height} />
															</>
														);
													}
												})()  
											}
											<span class={ button_text_extra_css }>{button_text}</span>
										</span>
									</div>
								</>
							);
						}else{
							return (
								<>
									<div { ...useBlockProps() }>
										<BlockControls>
											<LinkControl
												searchInputPlaceholder="Search here..."
												value={ button_page }
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
										<span rel={ button_url_rel } target={ button_url_target } class={ button_extra_css } >
											{
												(() => {
													if(icon_path != '') {
														return (
															<>
																<img { ...blockPropsIcon } src={ icon_path } width={button_icon_width} height={button_icon_height} />
															</>
														);
													}
												})()  
											}
											<span class={ button_text_extra_css }>{button_text}</span></span>
									</div>
								</>
							);
						}
					}
				})()  

			}

		</>

	);
}

