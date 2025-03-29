import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';

import './editor.scss';

const isIconTextIdReserved = ( icon_text_id, clientId ) => {
    const blocksClientIds = wp.data.select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { icon_text_id: _icon_text_id } = wp.data.select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return clientId !== _clientId && icon_text_id === _icon_text_id;
    } );
};

export default function edit({ attributes, setAttributes, clientId }) {
	
	const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

	const {
		icon_text_name,
		icon_text_library,
		icon_text_size,
		icon_text_extra_css,
		icon_text_style,
		icon_text_poistion,

		icon_text_main_container_extra_css,
		icon_text_icon_container_extra_css,
		icon_text_text_container_extra_css,
		icon_text_id,
		icon_text_type,

		icon_text_background_upload,
		icon_text_background_width,
		icon_text_background_height,
		icon_text_background_extra_css,
		icon_text_background_style,

	} = attributes;

	function onChangeIconTextID( newValue ) {
		setAttributes( { icon_text_id: newValue } );
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

	const setFreshIconTextId = () => {
		setAttributes({ icon_text_id: makeid(8) });
	};

	if(icon_text_id.length === 0){
		setFreshIconTextId();
	}

	if ( isIconTextIdReserved( icon_text_id, clientId ) ) {
		//console.log( `Tab with id '${ tabs_item_id }' already exists. Regenerating...`, tabs_item_id );
		setFreshIconTextId();
	}

	function onChangeIconTextType( newValue ) {
		setAttributes( { icon_text_type: newValue } );
	}

	function onChangeIconTextName( newValue ) {
		setAttributes( { icon_text_name: newValue } );
	}
	function onChangeIconTextLibrary( newValue ) {
		setAttributes( { icon_text_library: newValue } );
	}
	function onChangeIconTextSize( newValue ) {
		setAttributes( { icon_text_size: newValue } );
	}
	function onChangeIconTextExtraCSS( newValue ) {
		setAttributes( { icon_text_extra_css: newValue } );
	}
	function onChangeIconTextStyle( newValue ) {
		setAttributes( { icon_text_style: newValue } );
	}
	function onChangeIconTextPosition( newValue ) {
		setAttributes( { icon_text_poistion: newValue } );
	}

	function onChangeIconTextMainContainerExtraCSS( newValue ) {
		setAttributes( { icon_text_main_container_extra_css: newValue } );
	}
	function onChangeIconTextIconContainerExtraCSS( newValue ) {
		setAttributes( { icon_text_icon_container_extra_css: newValue } );
	}
	function onChangeIconTextTextContainerExtraCSS(newVal) {
		setAttributes({ icon_text_text_container_extra_css: newVal });
	}

	//TODO - apply the inline svg in the editor
	/*
		const imgStyle = {
			width: icon_text_size+'px',
			height: icon_text_size+'px'
		};
		
		let inline_styles_array = icon_text_style.split(",");
		let i = 0;
		while (i < inline_styles_array.length) {
			let inline_style_array = inline_styles_array[i].split(":");
			if(inline_style_array[0] && inline_style_array[1]){
				let inline_style_name = inline_style_array[0];
				let inline_style_value = inline_style_array[1].replace(';','');
				imgStyle[inline_style_name] = inline_style_value;
			}
			i++;
		}

		const blockPropsImg = useBlockProps( { className: icon_text_extra_css, style: imgStyle } );
	*/


	let imgStyle = {
		width: '100%'
	};
	if(icon_text_size){
		imgStyle.maxWidth = icon_text_size+'px';
	}
	if(icon_text_style!=''){
		let imgStyleParsed = parseInlineStyle(icon_text_style);  
		imgStyle = { ...imgStyle, ...imgStyleParsed };
	}
	const blockPropsImg = useBlockProps( { className: icon_text_extra_css, style: imgStyle } );

	function onChangeBackgroundWidth( newValue ) {
		setAttributes( { icon_text_background_width: newValue } );
	}
	function onChangeBackgroundHeight( newValue ) {
		setAttributes( { icon_text_background_height: newValue } );
	}
	function onChangeBackgroundExtraCSS( newValue ) {
		setAttributes( { icon_text_background_extra_css: newValue } );
	}
	function onChangeBackgroundStyle( newValue ) {
		setAttributes( { icon_text_background_style: newValue } );
	}
	function onUpdateImage( image ) {
		setAttributes( { icon_text_background_upload: image } );
	};

	let imgStyleBackground = {
		width: '100%',
		maxWidth: icon_text_background_width+'px',
	};
	if(icon_text_background_style!=''){
		let imgStyleBackgroundParsed = parseInlineStyle(icon_text_background_style);  
		imgStyleBackground = { ...imgStyleBackground, ...imgStyleBackgroundParsed };
	}
	const blockPropsBackgroundImg = useBlockProps( { style: imgStyleBackground } );

	let icon_path = '';
	if(icon_text_library==='carbon'){
		icon_path = '/wp-content/themes/'+wordpress_theme.template+'/assets/icons/carbon/node_modules/@carbon/icons/svg/32/'+icon_text_name+'.svg';
	}else if(icon_text_library==='custom'){
		icon_path = '/wp-content/themes/'+wordpress_theme.stylesheet+'/assets/icons/custom/'+icon_text_name+'.svg';
	}else if(icon_text_library==='bootstrap'){
		icon_path = '/wp-content/themes/'+wordpress_theme.template+'/assets/icons/carbon/node_modules/@carbon/icons/svg/32/'+icon_text_name+'.svg';
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


	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'custom' ) } initialOpen={ true } >
					<PanelRow>
						<SelectControl
							label="Type"
							value={ icon_text_type }
							options={ [
								{ label: 'Regular', value: 'regular' },
								{ label: 'Expandable', value: 'expandable' },
							] }
							onChange={ onChangeIconTextType }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Section ID"
							value={ icon_text_id }
							onChange={ onChangeIconTextID }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Main container extra css"
							value={ icon_text_main_container_extra_css }
							onChange={ onChangeIconTextMainContainerExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Text container extra css"
							value={ icon_text_text_container_extra_css }
							onChange={ onChangeIconTextTextContainerExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Icon settings', 'custom' ) } initialOpen={ true } >

					<PanelRow>
						<TextControl
							label="Icon name"
							value={ icon_text_name }
							onChange={ onChangeIconTextName }
						/>
					</PanelRow>

					<PanelRow>
						<SelectControl
							label="Icon library"
							value={ icon_text_library }
							options={ [
								{ label: 'Carbon', value: 'carbon' },
								{ label: 'Bootstrap', value: 'bootstrap' },
								{ label: 'Custom', value: 'custom' },
							] }
							onChange={ onChangeIconTextLibrary }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon size"
							value={ icon_text_size }
							onChange={ onChangeIconTextSize }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon extra css"
							value={ icon_text_extra_css }
							onChange={ onChangeIconTextExtraCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon inline style"
							value={ icon_text_style }
							onChange={ onChangeIconTextStyle }
						/>
					</PanelRow>

					<PanelRow>
				        <SelectControl
				            label="Icon poition"
				            value={ icon_text_poistion }
				            options={ [
								{ label: 'Left Top', value: 'left-top' },
								{ label: 'Right Top', value: 'right-top' },
								{ label: 'Left Center', value: 'left-center' },
								{ label: 'Right Center', value: 'right-center' },
								{ label: 'Left Bottom', value: 'left-bottom' },
								{ label: 'Right Bottom', value: 'right-bottom' }
				            ] }
				            onChange={ onChangeIconTextPosition }
				        />
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon container extra css"
							value={ icon_text_icon_container_extra_css }
							onChange={ onChangeIconTextIconContainerExtraCSS }
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
													{icon_text_background_upload.id === null ? 'Upload' : 'Select new file'}
												</button>
												<p>
													{icon_text_background_upload.name === null ? '' : '(' + icon_text_background_upload.name + ')'}
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
							value={ icon_text_background_width }
							onChange={ onChangeBackgroundWidth }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG height"
							value={ icon_text_background_height }
							onChange={ onChangeBackgroundHeight }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG extra css"
							value={ icon_text_background_extra_css }
							onChange={ onChangeBackgroundExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG inline style"
							value={ icon_text_background_style }
							onChange={ onChangeBackgroundStyle }
							help="By default the system will add width:100%; max-width:{width}px;"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps({ className: icon_text_main_container_extra_css })}>

					{ icon_text_background_upload.url && icon_text_background_upload.url.length > 0 && (
						<>
							<img { ...blockPropsBackgroundImg } class={icon_text_background_extra_css} src={ icon_text_background_upload.url } width={icon_text_background_width} height={icon_text_background_height} />
						</>
					) }
					
					<img { ...blockPropsImg } class={icon_text_extra_css} src={ icon_path }  />

					<InnerBlocks />

			</div>

		</>
	);
}
