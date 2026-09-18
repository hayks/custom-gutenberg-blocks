import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, BlockControls, __experimentalLinkControl as LinkControl, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, ToggleControl, SelectControl, TextControl, Placeholder } from '@wordpress/components';
import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';
import { getIconPreviewPath, parseInlineStyle } from '../editor-utils';
import IconPicker from '../icon-picker';

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
		imgStyle = { ...imgStyle, ...parseInlineStyle(icon_style) };
	}
	const imgProps = { className: icon_extra_css, style: imgStyle };



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
		imgStyleBackground = { ...imgStyleBackground, ...parseInlineStyle(icon_background_style) };
	}
	const backgroundImgProps = { style: imgStyleBackground };
	const icon_path = getIconPreviewPath( icon_name, icon_library );
	const blockProps = useBlockProps({ className: icon_container_extra_css });

	function onChangeIconUrlExtraCSS( newValue ) {
		setAttributes( { icon_url_extra_css: newValue } );
	}

	function updateURLviaAjax(page_id){
		//fetch the selected page URL for the current language and save it in a variable so we can use it you build the button link
		apiFetch( { path: '/lattice/v1/dynamic_url?page_id='+page_id } ).then( ( page_url ) => {
			//console.log( page_url );
			if(page_url){
				setAttributes( { icon_url: page_url } );
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
			icon_url_target: newLinkTarget,
			icon_url_rel: updatedRel,
		} );


    };
	function handleLinkRemove(value) {
		setAttributes( { 
			icon_url_page: {},
			icon_url: '',
			icon_url_target: undefined,
			icon_url_rel: ''
		} );  
	}

	// On page load, sync the URL for the current language.
	useEffect( () => {
		if ( icon_url_page?.id ) {
			updateURLviaAjax( icon_url_page.id );
		}
	}, [ icon_url_page?.id ] ); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Icon settings', 'layout-blocks' ) } initialOpen={ true } >

					<IconPicker
						label={ __( 'Icon', 'layout-blocks' ) }
						library={ icon_library }
						value={ icon_name }
						onChange={ onChangeIconName }
					/>

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

				<PanelBody title={ __( 'Background settings', 'layout-blocks' ) } initialOpen={ false } >
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onUpdateImage } 
								allowedTypes={["image"]}
								multiple={false}
								render={({ open }) => (
									<>
										<div className="components-base-control">
											<div className="components-base-control">
												<button onClick={open} className="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
													{icon_background_upload?.id ? 'Select new file' : 'Upload'}
												</button>
												<p>
													{icon_background_upload?.name ? '(' + icon_background_upload.name + ')' : ''}
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

				<PanelBody title={ __( 'Link settings', 'layout-blocks' ) } initialOpen={ false } >
					<PanelRow>
						<TextControl
							label={ __( 'Link rel', 'layout-blocks' ) }
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

			<div { ...blockProps }>

				<BlockControls>
					<LinkControl
						searchInputPlaceholder="Search here..."
						value={ icon_url_page }
						onChange={ handleLinkChange }
						onRemove={ handleLinkRemove }
						withCreateSuggestion={false}
					>
					</LinkControl>
				</BlockControls>

				{ ( () => {
					if ( ! icon_path && ! icon_background_upload?.url ) {
						return (
							<Placeholder
								label={ __( 'Icon', 'layout-blocks' ) }
								instructions={ __( 'Choose an icon from the block settings sidebar.', 'layout-blocks' ) }
							/>
						);
					}
					const preview = (
						<>
							{ icon_background_upload?.url && (
								<img { ...backgroundImgProps } className={icon_background_extra_css} src={ icon_background_upload.url } width={icon_background_width} height={icon_background_height} alt="" />
							) }
							{ icon_path && <img { ...imgProps } src={ icon_path } alt="" /> }
						</>
					);
					return icon_url
						? <a href={ icon_url } rel={ icon_url_rel } target={ icon_url_target } className={ icon_url_extra_css }>{ preview }</a>
						: preview;
				} )() }
			</div>

		</>
	);
}
