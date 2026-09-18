import { hasUploadedMedia, hasFocalPoint, composeInlineStyle, cssSize } from '../editor-utils';

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

	const imageUrl = hasUploadedMedia( background_image_upload ) ? background_image_upload.url : '';
	const posX = hasFocalPoint( background_image_position ) ? ( background_image_position.x * 100 ) : 50;
	const posY = hasFocalPoint( background_image_position ) ? ( background_image_position.y * 100 ) : 50;
	const imageStyle = composeInlineStyle(
		background_image_style,
		imageUrl ? `background-image: url(${ imageUrl })` : '',
		imageUrl ? `background-position: ${ posX }% ${ posY }%` : ''
	);

	const watermarkUrl = watermark_image_upload?.url;
	const watermarkStyle = watermarkUrl
		? composeInlineStyle(
			watermark_style,
			cssSize( watermark_image_upload.width ) ? `width: ${ cssSize( watermark_image_upload.width ) }` : '',
			cssSize( watermark_image_upload.height ) ? `height: ${ cssSize( watermark_image_upload.height ) }` : '',
			`background-image: url(${ watermarkUrl })`
		)
		: undefined;

	return (
		<div class={ 'position-relative ' + background_image_container_css }>
			<div class={ 'helper-background-image ' + background_image_extra_css } style={ imageStyle }></div>
			{ watermarkUrl && (
				<div class={ 'watermark-image position-absolute top-0 start-0 ' + watermark_css } style={ watermarkStyle }></div>
			) }
		</div>
	);
}
