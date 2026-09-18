import { InnerBlocks } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';
import { hasUploadedMedia, svgIconShortcode, getAssetShortcode } from '../editor-utils';

export default function save({ attributes }) {

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

	const isExpandable = icon_text_type === 'expandable';
	const iconFirst = ! [ 'right-center', 'right-bottom', 'right-top' ].includes( icon_text_poistion );
	const alignItems =
		icon_text_poistion === 'right-center' || icon_text_poistion === 'left-center'
			? 'center'
			: icon_text_poistion === 'right-bottom' || icon_text_poistion === 'left-bottom'
				? 'end'
				: 'start';

	const icon = (
		<div class={ 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css }>
			<RawHTML>{ svgIconShortcode( icon_text_name, icon_text_library, icon_text_size, icon_text_size, icon_text_extra_css, icon_text_style ) }</RawHTML>
			{ hasUploadedMedia( icon_text_background_upload ) && (
				<RawHTML>{ getAssetShortcode( icon_text_background_upload, icon_text_background_width, icon_text_background_height, icon_text_background_extra_css, icon_text_background_style ) }</RawHTML>
			) }
		</div>
	);

	const content = (
		<div class={ 'text-with-icon-content ' + icon_text_text_container_extra_css }>
			<InnerBlocks.Content />
		</div>
	);

	return (
		<div
			class={ 'text-with-icon d-flex align-items-' + alignItems + ( isExpandable ? ' card-expandable collapsed ' : ' ' ) + icon_text_main_container_extra_css }
			data-bs-toggle={ isExpandable ? 'collapse' : undefined }
			href={ isExpandable ? '#card_expandable_' + icon_text_id : undefined }
			role={ isExpandable ? 'button' : undefined }
			aria-expanded={ isExpandable ? 'false' : undefined }
			aria-controls={ isExpandable ? 'card_expandable_' + icon_text_id : undefined }
		>
			{ iconFirst ? icon : content }
			{ iconFirst ? content : icon }
		</div>
	);
}
