import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl, FormFileUpload  } from '@wordpress/components';
import { MediaUpload } from '@wordpress/editor';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		inline_svg_upload,
		inline_svg_width,
		inline_svg_height,
		inline_svg_extra_css,
		inline_svg_style,
	} = attributes;

	function onChangeSVGWidth( newValue ) {
		setAttributes( { inline_svg_width: newValue } );
	}
	function onChangeSVGHeight( newValue ) {
		setAttributes( { inline_svg_height: newValue } );
	}
	function onChangeSVGExtraCSS( newValue ) {
		setAttributes( { inline_svg_extra_css: newValue } );
	}
	function onChangeSVGStyle( newValue ) {
		setAttributes( { inline_svg_style: newValue } );
	}

	function onUpdateImage( image ) {
		setAttributes( { inline_svg_upload: image } );
	};

	const imgStyle = {
		width: inline_svg_width+'px',
		height: inline_svg_height+'px',
		inline_svg_style
	};
	const blockPropsImg = useBlockProps( { style: imgStyle } );

	//console.log(inline_svg_upload);


	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'SVG settings', 'custom' ) }>

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
												{inline_svg_upload.id === null ? 'Upload' : 'Select new file'}
											</button>
											<p>
												{inline_svg_upload.name === null ? '' : '(' + inline_svg_upload.name + ')'}
											</p>
										</div>
									</div>
						    	</>
							)}
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="SVG width"
							value={ inline_svg_width }
							onChange={ onChangeSVGWidth }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG height"
							value={ inline_svg_height }
							onChange={ onChangeSVGHeight }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG extra css"
							value={ inline_svg_extra_css }
							onChange={ onChangeSVGExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="SVG inline style"
							value={ inline_svg_style }
							onChange={ onChangeSVGStyle }
							help="By default the system will add width:100%; max-width:{width}px;"
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }><img { ...blockPropsImg } src={ inline_svg_upload.url } width={inline_svg_width} height={inline_svg_height} /> </div>

		</>
	);
}
