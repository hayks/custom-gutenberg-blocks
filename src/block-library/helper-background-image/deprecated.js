import { hasUploadedMedia, hasFocalPoint } from '../editor-utils';

const v1 = {
	attributes: {
		background_image_upload: { type: 'object', default: {} },
		background_image_position: { type: 'object', default: {} },
		background_image_extra_css: { type: 'string', default: '' },
		background_image_style: { type: 'string', default: '' },
		background_image_container_css: { type: 'string', default: 'overflow-hidden' },
		watermark_image_upload: { type: 'object', default: {} },
		watermark_css: { type: 'string', default: '' },
		watermark_style: { type: 'string', default: '' },
	},
	save( { attributes } ) {
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

		const imageUrl = hasUploadedMedia( background_image_upload ) ? background_image_upload.url : '';
		const posX = hasFocalPoint( background_image_position ) ? ( background_image_position.x * 100 ) : 50;
		const posY = hasFocalPoint( background_image_position ) ? ( background_image_position.y * 100 ) : 50;
		const imageStyle = imageUrl
			? background_image_style + ' background-image: url(' + imageUrl + '); background-position: ' + posX + '% ' + posY + '%;'
			: background_image_style + ' background-position: ' + posX + '% ' + posY + '%;';

		if ( watermark_image_upload?.url ) {
			return (
				<>
					<div class={ 'position-relative ' + background_image_container_css }>
						<div class={ 'helper-background-image ' + background_image_extra_css } style={ imageStyle }></div>
						<div class={ 'watermark-image position-absolute top-0 start-0 ' + watermark_css } style={ watermark_style + ' width: ' + watermark_image_upload.width + 'px; height: ' + watermark_image_upload.height + 'px; background-image: url(' + watermark_image_upload.url + ');' }></div>
					</div>
				</>
			);
		}

		return (
			<>
				<div class={ 'position-relative ' + background_image_container_css }>
					<div class={ 'helper-background-image ' + background_image_extra_css } style={ imageStyle }></div>
				</div>
			</>
		);
	},
};

export default [ v1 ];
