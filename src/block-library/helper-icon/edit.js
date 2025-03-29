import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, SelectControl, TextControl } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';

import './editor.scss';


export default function edit({ attributes, setAttributes }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		icon_name,
		icon_library,
		icon_size,
		icon_extra_css,
		icon_style,
		icon_container_extra_css,
		icon_url_page,
		icon_url,
		icon_url_target,
		icon_url_rel,
		icon_url_extra_css,
		icon_background_upload,
		icon_background_width,
		icon_background_height,
		icon_background_extra_css,
		icon_background_style,
	} = attributes;

	function onChangeIconName( newValue ) {
		setAttributes( { icon_name: newValue } );
	}
	function onChangeIconLibrary( newValue ) {
		setAttributes( { icon_library: newValue } );
	}
	function onChangeIconSize( newValue ) {
		setAttributes( { icon_size: newValue } );
	}
	function onChangeIconExtraCSS( newValue ) {
		setAttributes( { icon_extra_css: newValue } );
	}
	function onChangeIconStyle( newValue ) {
		setAttributes( { icon_style: newValue } );
	}
	function onChangeIconContainerExtraCSS( newValue ) {
		setAttributes( { icon_container_extra_css: newValue } );
	}
	function onChangeIconURL( newValue ) {
		setAttributes( { icon_url: newValue } );
	}

	let imgStyle = {
		width: '100%'
	};
	if(icon_size){
		imgStyle.maxWidth = icon_size+'px';
	}
	if(icon_style!=''){
		let imgStyleParsed = parseInlineStyle(icon_style);  
		imgStyle = { ...imgStyle, ...imgStyleParsed };
	}
	const blockPropsImg = useBlockProps( { className: icon_extra_css, style: imgStyle } );



	function onChangeBackgroundWidth( newValue ) {
		setAttributes( { icon_background_width: newValue } );
	}
	function onChangeBackgroundHeight( newValue ) {
		setAttributes( { icon_background_height: newValue } );
	}
	function onChangeBackgroundExtraCSS( newValue ) {
		setAttributes( { icon_background_extra_css: newValue } );
	}
	function onChangeBackgroundStyle( newValue ) {
		setAttributes( { icon_background_style: newValue } );
	}
	function onUpdateImage( image ) {
		setAttributes( { icon_background_upload: image } );
	};

	let imgStyleBackground = {
		width: '100%',
		maxWidth: icon_background_width+'px',
	};
	if(icon_background_style!=''){
		let imgStyleBackgroundParsed = parseInlineStyle(icon_background_style);  
		imgStyleBackground = { ...imgStyleBackground, ...imgStyleBackgroundParsed };
	}
	const blockPropsBackgroundImg = useBlockProps( { style: imgStyleBackground } );

	let icon_path = '';
	if(icon_library==='carbon'){
		icon_path = '/wp-content/themes/'+wordpress_theme.template+'/assets/icons/carbon/node_modules/@carbon/icons/svg/32/'+icon_name+'.svg';
	}else if(icon_library==='custom'){
		icon_path = '/wp-content/themes/'+wordpress_theme.stylesheet+'/assets/icons/custom/'+icon_name+'.svg';
	}else if(icon_library==='bootstrap'){
		icon_path = '/wp-content/themes/'+wordpress_theme.template+'/assets/icons/carbon/node_modules/@carbon/icons/svg/32/'+icon_name+'.svg';
	}

	function formatStringToCamelCase(str) {
		const splitted = str.split("-");
		if (splitted.length === 1) return splitted[0];
		return (
		  splitted[0] +
		  splitted
			.slice(1)
			.map(word => word[0].toUpperCase() + word.slice(1))
			.join("")
		);
	};

	function parseInlineStyle(str) {
		const style = {};
		str.split(";").forEach(el => {
		  	const [property, value] = el.split(":");
		  	if (!property) return;
			if (!value) return;
	  
		  	const formattedProperty = formatStringToCamelCase(property.trim());
		  	style[formattedProperty] = value.trim();
		});
		return style;
	}
	


	function onChangeIconUrlExtraCSS( newValue ) {
		setAttributes( { icon_url_extra_css: newValue } );
	}

	function updateURLviaAjax(page_id){
		//fetch the selected page URL for the current language and save it in a variable so we can use it you build the button link
		apiFetch( { path: '/custom/v2/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { icon_url: page_url } );
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
				icon_url_page: new_value,
				icon_url: value.url
			} );
		}else{
			setAttributes( { icon_url_page: value } );  
			updateURLviaAjax(value.id);
		}

		//Set link rel if set to open in new tab
		const newLinkTarget = value.opensInNewTab ? '_blank' : undefined;
		let updatedRel = icon_url_rel;
		if ( newLinkTarget && ! icon_url_rel ) {
			updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
		} else if ( ! newLinkTarget && icon_url_rel === NEW_TAB_REL_DEFAULT_VALUE ) {
			updatedRel = undefined;
		}
		setAttributes( {
			icon_url_target: value.opensInNewTab,
			icon_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			icon_url_page: '',
			icon_url: '',
			icon_url_target: false,
			icon_url_rel: ''
		} );  
	}

	//Force update on page load - make sure to set the correct page URL even if the button has been copied from another language
	updateURLviaAjax(icon_url_page.id);

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Icon settings', 'custom' ) } initialOpen={ true } >

					<PanelRow>
						<TextControl
							label="Icon name"
							value={ icon_name }
							onChange={ onChangeIconName }
						/>
					</PanelRow>

					<PanelRow>
				        <SelectControl
				            label="Icon library"
				            value={ icon_library }
				            options={ [
				                { label: 'Carbon', value: 'carbon' },
				                { label: 'Bootstrap', value: 'bootstrap' },
				                { label: 'Custom', value: 'custom' },
				            ] }
				            onChange={ onChangeIconLibrary }
				        />
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon size"
							value={ icon_size }
							onChange={ onChangeIconSize }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon extra css"
							value={ icon_extra_css }
							onChange={ onChangeIconExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon inline style"
							value={ icon_style }
							onChange={ onChangeIconStyle }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Container extra css"
							value={ icon_container_extra_css }
							onChange={ onChangeIconContainerExtraCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Background settings', 'custom' ) } initialOpen={ false } >
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onUpdateImage } 
								allowedTypes={["image"]}
								multiple={false}
								render={({ open }) => (
									<>
										<div class="components-base-control">
											<div class="components-base-control">
												<button onClick={open} class="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
													{icon_background_upload.id === null ? 'Upload' : 'Select new file'}
												</button>
												<p>
													{icon_background_upload.name === null ? '' : '(' + icon_background_upload.name + ')'}
												</p>
											</div>
										</div>
									</>
								)}
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG width"
							value={ icon_background_width }
							onChange={ onChangeBackgroundWidth }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG height"
							value={ icon_background_height }
							onChange={ onChangeBackgroundHeight }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG extra css"
							value={ icon_background_extra_css }
							onChange={ onChangeBackgroundExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG inline style"
							value={ icon_background_style }
							onChange={ onChangeBackgroundStyle }
							help="By default the system will add width:100%; max-width:{width}px;"
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Link settings', 'custom' ) } initialOpen={ false } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'custom' ) }
							value={ icon_url_rel || '' }
							onChange={ ( newRel ) => {
								setAttributes( { icon_url_rel: newRel } );
							} }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Icon URL extra css"
							value={ icon_url_extra_css }
							onChange={ onChangeIconUrlExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps({ className: icon_container_extra_css })}>

				<BlockControls>
					<LinkControl
						searchInputPlaceholder="Search here..."
						value={ icon_url_page }
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

				{ icon_background_upload.url && icon_background_upload.url.length > 0 && (
					<>
						<img { ...blockPropsBackgroundImg } class={icon_background_extra_css} src={ icon_background_upload.url } width={icon_background_width} height={icon_background_height} />
					</>
				) }

				<img { ...blockPropsImg } class={icon_extra_css} src={ icon_path }  />
			</div>

		</>
	);
}
