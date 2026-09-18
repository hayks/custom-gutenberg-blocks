import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { getIconPreviewPath, makeId, parseInlineStyle, cssSize } from '../editor-utils';
import IconPicker from '../icon-picker';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
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

	useEffect( () => {
		if ( ! icon_text_id ) {
			setAttributes( { icon_text_id: makeId() } );
		}
	}, [ icon_text_id, setAttributes ] );

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
		width: '100%',
		maxWidth: cssSize( icon_text_size ),
	};
	if(icon_text_style!=''){
		let imgStyleParsed = parseInlineStyle(icon_text_style);  
		imgStyle = { ...imgStyle, ...imgStyleParsed };
	}
	const blockPropsImg = { className: icon_text_extra_css, style: imgStyle };

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
		maxWidth: cssSize( icon_text_background_width ),
	};
	if(icon_text_background_style!=''){
		let imgStyleBackgroundParsed = parseInlineStyle(icon_text_background_style);  
		imgStyleBackground = { ...imgStyleBackground, ...imgStyleBackgroundParsed };
	}
	const blockPropsBackgroundImg = { style: imgStyleBackground };
	const icon_path = getIconPreviewPath( icon_text_name, icon_text_library );
	const isExpandable = icon_text_type === 'expandable';
	const iconFirst = ! [ 'right-center', 'right-bottom', 'right-top' ].includes( icon_text_poistion );
	const alignItems =
		icon_text_poistion === 'right-center' || icon_text_poistion === 'left-center'
			? 'center'
			: icon_text_poistion === 'right-bottom' || icon_text_poistion === 'left-bottom'
				? 'end'
				: 'start';
	const blockProps = useBlockProps({
		className: 'text-with-icon d-flex align-items-' + alignItems + ( isExpandable ? ' card-expandable collapsed ' : ' ' ) + icon_text_main_container_extra_css,
	});
	const iconPreview = (
		<div className={ 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css }>
			{ icon_path && <img { ...blockPropsImg } className={ icon_text_extra_css } src={ icon_path } alt="" /> }
			{ icon_text_background_upload?.url && (
				<img { ...blockPropsBackgroundImg } className={ icon_text_background_extra_css } src={ icon_text_background_upload.url } width={ icon_text_background_width } height={ icon_text_background_height } alt="" />
			) }
		</div>
	);
	const contentPreview = (
		<div className={ 'text-with-icon-content ' + icon_text_text_container_extra_css }>
			<InnerBlocks
				template={ icon_text_type === 'expandable'
					? [ [ 'core/paragraph' ], [ 'lattice/helper-icon-text-expandable' ] ]
					: [ [ 'core/paragraph' ] ]
				}
			/>
		</div>
	);

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'layout-blocks' ) } initialOpen={ true } >
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
				<PanelBody title={ __( 'Icon settings', 'layout-blocks' ) } initialOpen={ true } >

					<IconPicker
						label={ __( 'Icon', 'layout-blocks' ) }
						library={ icon_text_library }
						value={ icon_text_name }
						onChange={ onChangeIconTextName }
					/>

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
													{icon_text_background_upload?.id ? 'Select new file' : 'Upload'}
												</button>
												<p>
													{icon_text_background_upload?.name ? '(' + icon_text_background_upload.name + ')' : ''}
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

			<div { ...blockProps }>
				{ iconFirst ? iconPreview : contentPreview }
				{ iconFirst ? contentPreview : iconPreview }
			</div>

		</>
	);
}
