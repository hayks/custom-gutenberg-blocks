import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, InspectorControls, BlockControls, MediaReplaceFlow, MediaPlaceholder } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl, ToggleControl } from '@wordpress/components';
import { MediaUpload } from '@wordpress/editor';
import { isBlobURL } from '@wordpress/blob';
const isTemporaryMedia = (id, url) => !id && isBlobURL(url);

import './editor.scss';

export default function edit({ attributes, setAttributes, clientId, context }) {

	let blockIndex = wp.data.select( 'core/editor' ).getBlockIndex( clientId );
	
	const {
		slider_item_items_show,
		slider_item_index,
		slider_item_type,
		slider_item_video_thumbnail,
		slider_item_video_mp4,
		slider_item_video_url,
		slider_item_video_extra_css,
		slider_item_video_play_extra_css,
		slider_item_video_overlay,
		slider_item_video_overlay_extra_css,
		slider_item_author_image,
		slider_item_author_image_medium,
		slider_item_author_image_large,
		slider_item_author_image_id,
		slider_item_author_name,
		slider_item_author_position,
		slider_item_item_extra_css,
		slider_item_item_content_extra_css,
		slider_item_item_author_extra_css,
		slider_item_item_author_content_extra_css,
		slider_item_item_author_photo_extra_css,
	} = attributes;

	const {
		"custom-block/helper-slider-items-show": slider_items_show
	} = context;

	// copy value from parent context into child attribute
	setAttributes({
		slider_item_items_show: slider_items_show,
		slider_item_index: parseInt(blockIndex),
	});

	const sliderItemTypes = [
		{ label: 'Content - HTML', 			value: 'content-html' },
		{ label: 'Content - Author below', 	value: 'content-author-below' },
		{ label: 'Content - Author left', 	value: 'content-author-left' },
		{ label: 'Image + Content', 		value: 'image_content' },
		{ label: 'Video - YouTube',			value: 'video-youtube' },
		{ label: 'Video - Mp4', 			value: 'video-mp4' },
	];

	function onChangeSliderItemType( newValue ) {
		setAttributes( { slider_item_type: newValue } );
	}

	function onChangeSliderItemVideoThumbnail( newValue ) {
		setAttributes( { slider_item_video_thumbnail: newValue } );
	}
	function onChangeSliderItemVideoMp4( newValue ) {
		setAttributes( { slider_item_video_mp4: newValue } );
	}

	function onChangeSliderItemVideoURL( newValue ) {
		setAttributes( { slider_item_video_url: newValue } );
	}
	function onChangeSliderItemVideoExtraCSS( newValue ) {
		setAttributes( { slider_item_video_extra_css: newValue } );
	}
	function onChangeSliderItemVideoPlayExtraCSS( newValue ) {
		setAttributes( { slider_item_video_play_extra_css: newValue } );
	}

	const onToggleOverlay = ( value ) => {
		const newLinkTarget = value ? true : false;
		setAttributes( {
			slider_item_video_overlay: newLinkTarget,
		} );
	};
	function onChangeSliderItemVideoOverlayExtraCSS( newValue ) {
		setAttributes( { slider_item_video_overlay_extra_css: newValue } );
	}

	function onChangeSliderItemAuthorImage( newValue ) {
		setAttributes( { slider_item_author_image: newValue } );
	}
	function onChangeSliderItemAuthorName( newValue ) {
		setAttributes( { slider_item_author_name: newValue } );
	}
	function onChangeSliderItemAuthorPosition( newValue ) {
		setAttributes( { slider_item_author_position: newValue } );
	}

	function onChangeSliderItemExtraCSS( newValue ) {
		setAttributes( { slider_item_item_extra_css: newValue } );
	}
	function onChangeSliderItemContentExtraCSS( newValue ) {
		setAttributes( { slider_item_item_content_extra_css: newValue } );
	}
	function onChangeSliderItemAuthorExtraCSS( newValue ) {
		setAttributes( { slider_item_item_author_extra_css: newValue } );
	}
	function onChangeSliderItemAuthorContentExtraCSS( newValue ) {
		setAttributes( { slider_item_item_author_content_extra_css: newValue } );
	}
	function onChangeSliderItemAuthorPhotoExtraCSS( newValue ) {
		setAttributes( { slider_item_item_author_photo_extra_css: newValue } );
	}

	//Image select
	//https://awhitepixel.com/blog/wordpress-gutenberg-add-image-select-custom-block/

	const isUploadingMedia = isTemporaryMedia(slider_item_author_image_id, slider_item_author_image);
	const setImageAttributes = (media) => {

		if (!media || !media.url) {
			setAttributes({
				slider_item_author_image: null,
				slider_item_author_image_medium: null,
				slider_item_author_image_large: null,
				slider_item_author_image_id: null,
			});
			return;
		}

		if( media.sizes.thumbnail ){
			setAttributes({
				slider_item_author_image: media.sizes.thumbnail.url
			});
		}else{
			setAttributes({
				slider_item_author_image: media.sizes.full.url
			});
		}

		if( media.sizes.medium ){
			setAttributes({
				slider_item_author_image_medium: media.sizes.medium.url
			});
		}else{
			setAttributes({
				slider_item_author_image_medium: media.sizes.full.url
			});
		}


		if( media.sizes.large ){
			setAttributes({
				slider_item_author_image_large: media.sizes.large.url
			});
		}else{
			setAttributes({
				slider_item_author_image_large: media.sizes.full.url
			});
		}



		//console.log(media);
		setAttributes({
			slider_item_author_image_id: media.id,
		});
	};

	const ALLOWED_BLOCKS_VIDEO = ['custom-block/helper-icon'];

	return (
		<>	

			<InspectorControls>

				<PanelBody title={ __( 'Settings', 'custom' ) } >
					<PanelRow>
						<SelectControl
							label="Slider type"
							value={ slider_item_type }
							options={ sliderItemTypes }
							onChange={ onChangeSliderItemType }
						/>
					</PanelRow>
				</PanelBody>

				{ slider_item_type && (slider_item_type === 'video-youtube' || slider_item_type === 'video-mp4') && (
					<PanelBody title={ __( 'Video settings', 'custom' ) } >
						<PanelRow>
							<MediaUpload
								onSelect={ onChangeSliderItemVideoThumbnail } 
								multiple={false}
								render={({ open }) => (
									<>
										<div class="components-base-control inspectorcontrols-pe-3">
											<label class="video-file-label components-base-control__label dcaabf-ac-dec--fdd-1v57ksj ej5x27r2" for="inspector-text-control-20">{ __( 'Video thumbnail', 'custom' ) }</label>
											<button onClick={open} class="video-file-button components-button editor-post-publish-button editor-post-publish-button__button is-primary">
												{slider_item_video_thumbnail.id === null ? 'Upload thumbnail' : 'Select new thumbnail'}
											</button>
											<p class="video-file-attachment">
												{slider_item_video_thumbnail.name === null ? '' : '(' + slider_item_video_thumbnail.name + ')'}
											</p>
										</div>
							    	</>
								)}
							/>
						</PanelRow>
						{ slider_item_type === 'video-mp4' && (
							<PanelRow>
								<MediaUpload
									onSelect={ onChangeSliderItemVideoMp4 } 
									multiple={false}
									render={({ open }) => (
										<>
											<div class="components-base-control inspectorcontrols-pe-3">
												<label class="video-file-label components-base-control__label dcaabf-ac-dec--fdd-1v57ksj ej5x27r2" for="inspector-text-control-20">{ __( 'Mp4 video', 'custom' ) }</label>
												<button onClick={open} class="video-file-button components-button editor-post-publish-button editor-post-publish-button__button is-primary">
													{slider_item_video_mp4.id === null ? 'Upload video' : 'Select new video'}
												</button>
												<p class="video-file-attachment">
													{slider_item_video_mp4.name === null ? '' : '(' + slider_item_video_mp4.name + ')'}
												</p>
											</div>
								    	</>
									)}
								/>
							</PanelRow>
						)}
						{ slider_item_type === 'video-youtube' && (
							<PanelRow>
								<TextControl
									label="YouTube URL"
									value={ slider_item_video_url }
									onChange={ onChangeSliderItemVideoURL }
								/>
							</PanelRow>
						)}
						<PanelRow>
							<TextControl
								label="Video extra css"
								value={ slider_item_video_extra_css }
								onChange={ onChangeSliderItemVideoExtraCSS }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Video play button extra css"
								value={ slider_item_video_play_extra_css }
								onChange={ onChangeSliderItemVideoPlayExtraCSS }
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label={ __(
									'Show overlay',
									'custom'
								) }
								onChange={ onToggleOverlay }
								checked={ slider_item_video_overlay === true }
							/>
						</PanelRow>
						{ slider_item_video_overlay && (
							<PanelRow>
								<TextControl
									label="Overlay extra css"
									value={ slider_item_video_overlay_extra_css }
									onChange={ onChangeSliderItemVideoOverlayExtraCSS }
								/>
							</PanelRow>
						)}
					</PanelBody>
				)}

				<PanelBody title={ __( 'Classes', 'custom' ) } >
					<PanelRow>
						<TextControl
							label="Slider extra css"
							value={ slider_item_item_extra_css }
							onChange={ onChangeSliderItemExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Slider content extra css"
							value={ slider_item_item_content_extra_css }
							onChange={ onChangeSliderItemContentExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Slider author extra css"
							value={ slider_item_item_author_extra_css }
							onChange={ onChangeSliderItemAuthorExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Slider author names extra css"
							value={ slider_item_item_author_content_extra_css }
							onChange={ onChangeSliderItemAuthorContentExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Slider author position extra css"
							value={ slider_item_item_author_photo_extra_css }
							onChange={ onChangeSliderItemAuthorPhotoExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
				
			</InspectorControls>

			<BlockControls>
			    <MediaReplaceFlow
			        mediaId={slider_item_author_image_id}
			        mediaUrl={slider_item_author_image}
			        allowedTypes={['image']}
			        accept="image/*"
			        onSelect={setImageAttributes}
			        name={!slider_item_author_image ? __('Add Image') : __('Replace Image')}
			    />
			</BlockControls>

			<div { ...useBlockProps() }>
				{
					(() => {
						if( (slider_item_type==='video-youtube' || slider_item_type==='video-mp4') ) {
							return (
								<>

									<div><img src={ slider_item_video_thumbnail.url } width="300" height="auto" /> </div>

									<InnerBlocks
										allowedBlocks={ ALLOWED_BLOCKS_VIDEO }
									/>

									<div class={ 'wp-block-custom-block-helper-slider-item-author' }>
										
										{slider_item_author_image && <img src={slider_item_author_image} />}
										{isUploadingMedia && <Spinner />}
										{!slider_item_author_image && 
											<MediaPlaceholder
											    accept="image/*"
											    allowedTypes={['image']}
											    onSelect={setImageAttributes}
											    multiple={false}
											    handleUpload={true}
											/>
										}

										<RichText 
											value={slider_item_author_name}
											onChange={onChangeSliderItemAuthorName}
											allowedFormats={ [] }
											keepPlaceholderOnFocus
											placeholder='Author name'
										/>

										<RichText 
											value={slider_item_author_position}
											onChange={onChangeSliderItemAuthorPosition}
											allowedFormats={ [] }
											keepPlaceholderOnFocus
											placeholder='Author position'
										/>

									</div>
								</>
							)
						} else if(slider_item_type==='image_content') {
							return (
								<>
									<div class={ 'wp-block-custom-block-helper-slider-item-author' }>
										
										{slider_item_author_image && <img src={slider_item_author_image} />}
										{isUploadingMedia && <Spinner />}
										{!slider_item_author_image && 
											<MediaPlaceholder
											    accept="image/*"
											    allowedTypes={['image']}
											    onSelect={setImageAttributes}
											    multiple={false}
											    handleUpload={true}
											/>
										}

									</div>

									<InnerBlocks />
								</>
							)
						} else if(slider_item_type==='content-author-left') {
							return (
								<>
									<InnerBlocks />

									<div class={ 'wp-block-custom-block-helper-slider-item-author' }>
										
										{slider_item_author_image && <img src={slider_item_author_image} />}
										{isUploadingMedia && <Spinner />}
										{!slider_item_author_image && 
											<MediaPlaceholder
											    accept="image/*"
											    allowedTypes={['image']}
											    onSelect={setImageAttributes}
											    multiple={false}
											    handleUpload={true}
											/>
										}

										<RichText 
											value={slider_item_author_name}
											onChange={onChangeSliderItemAuthorName}
											allowedFormats={ [] }
											keepPlaceholderOnFocus
											placeholder='Author name'
										/>

										<RichText 
											value={slider_item_author_position}
											onChange={onChangeSliderItemAuthorPosition}
											allowedFormats={ [] }
											keepPlaceholderOnFocus
											placeholder='Author position'
										/>

									</div>
								</>
							)
						} else if(slider_item_type==='content-author-below') {
							//content-author-below
							return (
								<>
									<InnerBlocks />

									<div class={ 'wp-block-custom-block-helper-slider-item-author' }>
										
										{slider_item_author_image && <img src={slider_item_author_image} />}
										{isUploadingMedia && <Spinner />}
										{!slider_item_author_image && 
											<MediaPlaceholder
											    accept="image/*"
											    allowedTypes={['image']}
											    onSelect={setImageAttributes}
											    multiple={false}
											    handleUpload={true}
											/>
										}

										<RichText 
											value={slider_item_author_name}
											onChange={onChangeSliderItemAuthorName}
											allowedFormats={ [] }
											keepPlaceholderOnFocus
											placeholder='Author name'
										/>

										<RichText 
											value={slider_item_author_position}
											onChange={onChangeSliderItemAuthorPosition}
											allowedFormats={ [] }
											keepPlaceholderOnFocus
											placeholder='Author position'
										/>

									</div>
								</>
							)
						} else {
							//content-html
							return (
								<>
									<InnerBlocks />
								</>
							)
						}
					})()  
				} 
				
			</div>
			

		</>
	);
}
