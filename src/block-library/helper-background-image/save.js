import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

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

	return (
		(() => {
			if(watermark_image_upload.url) {
				return (
					<>
						<div class={'position-relative '+background_image_container_css}>
							<div class={ 'helper-background-image '+background_image_extra_css } style={ background_image_style+' background-image: url('+background_image_upload.url+'); background-position: '+(background_image_position.x * 100)+'% '+(background_image_position.y * 100)+'%;'}></div>
							<div class={ 'watermark-image position-absolute top-0 start-0 '+watermark_css } style={ watermark_style+' width: '+watermark_image_upload.width+'px; height: '+watermark_image_upload.height+'px; background-image: url('+watermark_image_upload.url+');' }></div>
						</div>
					</>
				);
			} else {
				return (
					<>
						<div class={'position-relative '+background_image_container_css}>
							<div class={ 'helper-background-image '+background_image_extra_css } style={ background_image_style+' background-image: url('+background_image_upload.url+'); background-position: '+(background_image_position.x * 100)+'% '+(background_image_position.y * 100)+'%;'}></div>
						</div>
					</>
				);

			}
		})()  
	);


}
