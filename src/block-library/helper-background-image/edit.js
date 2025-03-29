import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, FormFileUpload, FocalPointPicker   } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	

	const {
		background_image_upload,
		background_image_position,
		background_image_extra_css,
		background_image_style,
		background_image_container_css,

		watermark_image_upload,
		watermark_css,
		watermark_style,
	} = attributes;

	const url = background_image_upload.url;

	function onChangeExtraCSS( newValue ) {
		setAttributes( { background_image_extra_css: newValue } );
	}
	function onChangeStyle( newValue ) {
		setAttributes( { background_image_style: newValue } );
	}
	function onUpdateImage( image ) {
		setAttributes( { background_image_upload: image } );
		url = image.url;
	}
	function onChangeContainerCSS( newValue ) {
		setAttributes( { background_image_container_css: newValue } );
	}

	function onUpdateWatermarkImage( image ) {
		setAttributes( { watermark_image_upload: image } );
	}
	function onChangeWatermarkCSS( newValue ) {
		setAttributes( { watermark_css: newValue } );
	}
	function onChangeWatermarkStyle( newValue ) {
		setAttributes( { watermark_style: newValue } );
	}

	const imgStyle = {
		background_image_style
	};
	const blockPropsImg = useBlockProps( { style: imgStyle } );

	const useState = window.wp.element.useState;
	const useEffect = window.wp.element.useEffect;

	if(background_image_position.length === 0){
		setAttributes({ background_image_position: {
			x: 0.5,
			y: 0.5,
		} });
	}
	function onChangePosition( newValue ) {
		setAttributes( { background_image_position: newValue } );
	}

	

	//console.log(background_image_upload);


	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'custom' ) } initialOpen={ true }>

					<PanelRow>
						<MediaUpload
							onSelect={ onUpdateImage } 
							allowedTypes={["image"]}
							multiple={false}
							render={({ open }) => (
								<>
									<div class="components-base-control">
										<div class="components-base-control">
											<button onClick={open} class="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
												{background_image_upload.id === null ? 'Upload' : 'Select new file'}
											</button>
											<p>
												{background_image_upload.name === null ? '' : '(' + background_image_upload.name + ')'}
											</p>
										</div>
									</div>
						    	</>
							)}
						/>
					</PanelRow>

					<PanelRow>
						<FocalPointPicker
							__nextHasNoMarginBottom
							label="Focal point"
							url={ url }
							value={ background_image_position }
							onDragStart={ onChangePosition }
							onDrag={ onChangePosition }
							onChange={ onChangePosition }
						/>	
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Extra css"
							value={ background_image_extra_css }
							onChange={ onChangeExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Inline style"
							value={ background_image_style }
							onChange={ onChangeStyle }
							help=""
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Container css"
							value={ background_image_container_css }
							onChange={ onChangeContainerCSS }
						/>
					</PanelRow>
				</PanelBody>

				<PanelBody title={ __( 'Watermark', 'custom' ) } initialOpen={ false }>

					<PanelRow>
						<MediaUpload
							onSelect={ onUpdateWatermarkImage } 
							allowedTypes={["image"]}
							multiple={false}
							render={({ open }) => (
								<>
									<div class="components-base-control">
										<div class="components-base-control">
											<button onClick={open} class="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
												{watermark_image_upload.id === null ? 'Upload' : 'Select new file'}
											</button>
											<p>
												{watermark_image_upload.name === null ? '' : '(' + watermark_image_upload.name + ')'}
											</p>
										</div>
									</div>
						    	</>
							)}
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Extra css"
							value={ watermark_css }
							onChange={ onChangeWatermarkCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Inline style"
							value={ watermark_style }
							onChange={ onChangeWatermarkStyle }
							help=""
						/>
					</PanelRow>
				</PanelBody>
				
			</InspectorControls>

			<div { ...useBlockProps() }><img { ...blockPropsImg } src={ background_image_upload.url } /> </div>

		</>
	);
}
