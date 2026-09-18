import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, FocalPointPicker } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { parseInlineStyle, hasFocalPoint } from '../editor-utils';

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

	function onChangeExtraCSS( newValue ) {
		setAttributes( { background_image_extra_css: newValue } );
	}
	function onChangeStyle( newValue ) {
		setAttributes( { background_image_style: newValue } );
	}
	function onUpdateImage( image ) {
		if ( image?.url && ( image.url.startsWith( '/' ) || /^https?:/i.test( image.url ) ) ) {
			setAttributes( { background_image_upload: image } );
		}
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

	const imgStyle = background_image_style ? parseInlineStyle( background_image_style ) : {};
	const blockProps = useBlockProps( {
		className: 'position-relative ' + background_image_container_css,
	} );

	useEffect( () => {
		if ( ! hasFocalPoint( background_image_position ) ) {
			setAttributes({ background_image_position: { x: 0.5, y: 0.5 } });
		}
	}, [ background_image_position, setAttributes ] );
	function onChangePosition( newValue ) {
		setAttributes( { background_image_position: newValue } );
	}

	

	//console.log(background_image_upload);


	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'layout-blocks' ) } initialOpen={ true }>

					<PanelRow>
						<MediaUpload
							onSelect={ onUpdateImage } 
							allowedTypes={["image"]}
							multiple={false}
							render={({ open }) => (
								<>
									<div className="components-base-control">
										<div className="components-base-control">
											<button onClick={open} className="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
												{background_image_upload?.id ? 'Select new file' : 'Upload'}
											</button>
											<p>
												{background_image_upload?.name ? '(' + background_image_upload.name + ')' : ''}
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
							url={ background_image_upload?.url }
							value={ hasFocalPoint( background_image_position ) ? background_image_position : { x: 0.5, y: 0.5 } }
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

				<PanelBody title={ __( 'Watermark', 'layout-blocks' ) } initialOpen={ false }>

					<PanelRow>
						<MediaUpload
							onSelect={ onUpdateWatermarkImage } 
							allowedTypes={["image"]}
							multiple={false}
							render={({ open }) => (
								<>
									<div className="components-base-control">
										<div className="components-base-control">
											<button onClick={open} className="components-button editor-post-publish-button editor-post-publish-button__button is-primary">
												{watermark_image_upload?.id ? 'Select new file' : 'Upload'}
											</button>
											<p>
												{watermark_image_upload?.name ? '(' + watermark_image_upload.name + ')' : ''}
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

			<div { ...blockProps }>
				{ background_image_upload?.url && (
					<div
						className={ 'helper-background-image ' + background_image_extra_css }
						style={ {
							...imgStyle,
							backgroundImage: 'url(' + background_image_upload.url + ')',
							backgroundPosition: (
								hasFocalPoint( background_image_position )
									? ( background_image_position.x * 100 ) + '% ' + ( background_image_position.y * 100 ) + '%'
									: '50% 50%'
							),
							minHeight: '120px',
						} }
					></div>
				) }
				{ watermark_image_upload?.url && (
					<div
						className={ 'watermark-image position-absolute top-0 start-0 ' + watermark_css }
						style={ {
							...parseInlineStyle( watermark_style ),
							width: watermark_image_upload.width ? watermark_image_upload.width + 'px' : undefined,
							height: watermark_image_upload.height ? watermark_image_upload.height + 'px' : undefined,
							backgroundImage: 'url(' + watermark_image_upload.url + ')',
						} }
					></div>
				) }
			</div>

		</>
	);
}
