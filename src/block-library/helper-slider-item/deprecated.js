import { InnerBlocks } from '@wordpress/block-editor';
import { backgroundImageStyle } from '../editor-utils';

const v1 = {
	attributes: {
		slider_item_items_show: { type: 'integer' },
		slider_item_index: { type: 'integer' },
		slider_item_type: { type: 'string', default: 'content-html' },
		slider_item_video_thumbnail: { type: 'object', default: {} },
		slider_item_video_mp4: { type: 'object', default: {} },
		slider_item_video_url: { type: 'string' },
		slider_item_video_extra_css: { type: 'string', default: '' },
		slider_item_video_play_extra_css: { type: 'string', default: 'position-absolute top-50 start-50 translate-middle btn btn-primary rounded-circle p-6 text-dark' },
		slider_item_video_overlay: { type: 'boolean', default: true },
		slider_item_video_overlay_extra_css: { type: 'string', default: '' },
		slider_item_author_image: { type: 'string' },
		slider_item_author_image_medium: { type: 'string' },
		slider_item_author_image_large: { type: 'string' },
		slider_item_author_image_id: { type: 'number' },
		slider_item_author_name: { type: 'string', default: '' },
		slider_item_author_position: { type: 'string', default: '' },
		slider_item_item_extra_css: { type: 'string', default: '' },
		slider_item_item_content_extra_css: { type: 'string', default: 'col-md-12 mb-5' },
		slider_item_item_author_extra_css: { type: 'string', default: 'col-md-12 col-lg-10 offset-lg-1 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2' },
		slider_item_item_author_content_extra_css: { type: 'string', default: '' },
		slider_item_item_author_photo_extra_css: { type: 'string', default: '' },
	},
	save( { attributes } ) {
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
			slider_item_author_image_large,
			slider_item_author_name,
			slider_item_author_position,
			slider_item_item_extra_css,
			slider_item_item_content_extra_css,
			slider_item_item_author_extra_css,
			slider_item_item_author_content_extra_css,
			slider_item_item_author_photo_extra_css,
		} = attributes;

		const itemsShow = Number( slider_item_items_show );
		const safeItemsShow = Number.isFinite( itemsShow ) && itemsShow > 0 ? itemsShow : 1;
		let hide_style = '';
		if ( Number( slider_item_index ) >= safeItemsShow ) {
			hide_style = 'display:none;';
		}

		let video_overlay_class = '';
		if ( slider_item_video_overlay === true || slider_item_video_overlay === 'true' ) {
			video_overlay_class = 'image-overlay';
		}

		if ( slider_item_type === 'image_content' ) {
			hide_style = '';
		}

		const thumbnailUrl = slider_item_video_thumbnail?.url || '';
		const mp4Url = slider_item_video_mp4?.url || slider_item_video_mp4?.link || '';

		if ( slider_item_type === 'video-youtube' ) {
			return (
				<>
					<div style={ hide_style } class={ 'row slider-item ' + slider_item_item_extra_css }>
						<div class={ 'slider-video position-relative ' + slider_item_video_extra_css + ' ' + video_overlay_class + ' ' } style={ backgroundImageStyle( thumbnailUrl ) } data-video={ slider_item_video_url }>
							<div class={ '' + slider_item_video_play_extra_css + '' }>
								<InnerBlocks.Content />
							</div>
							<div class={ 'overlay-mask ' + slider_item_video_overlay_extra_css + ' ' }></div>
						</div>
						<div class={ slider_item_item_author_extra_css }>
							<div class={ 'slider-author slider-author-with-photo ' + slider_item_item_author_content_extra_css }>
								<div class={ 'slider-author-photo ' + slider_item_item_author_photo_extra_css } style={ backgroundImageStyle( slider_item_author_image ) } ></div>
								<p class={ 'fs-5 mb-0' }>{ slider_item_author_name }</p>
								<p>{ slider_item_author_position }</p>
							</div>
						</div>
					</div>
				</>
			);
		}

		if ( slider_item_type === 'video-mp4' ) {
			return (
				<>
					<div style={ hide_style } class={ 'row slider-item ' + slider_item_item_extra_css }>
						<div class={ 'slider-video position-relative ' + slider_item_video_extra_css + ' ' + video_overlay_class + ' ' } style={ backgroundImageStyle( thumbnailUrl ) } data-video={ mp4Url }>
							<div class={ '' + slider_item_video_play_extra_css + '' }>
								<InnerBlocks.Content />
							</div>
							<div class={ 'overlay-mask ' + slider_item_video_overlay_extra_css + ' ' }></div>
						</div>
						<div class={ slider_item_item_author_extra_css }>
							<div class={ 'slider-author slider-author-with-photo ' + slider_item_item_author_content_extra_css }>
								<div class={ 'slider-author-photo ' + slider_item_item_author_photo_extra_css } style={ backgroundImageStyle( slider_item_author_image ) } ></div>
								<p class={ 'fs-5 mb-0' }>{ slider_item_author_name }</p>
								<p>{ slider_item_author_position }</p>
							</div>
						</div>
					</div>
				</>
			);
		}

		if ( slider_item_type === 'image_content' ) {
			return (
				<>
					<div class={ 'slider-item' }>
						<div class={ 'row slider-item-image_content ' + slider_item_item_extra_css }>
							<div class={ slider_item_item_content_extra_css }>
								<div class={ 'slider-author-photo ' + slider_item_item_author_photo_extra_css } style={ backgroundImageStyle( slider_item_author_image_large ) } ></div>
							</div>
							<div class={ 'slider-item-content ' + slider_item_item_author_content_extra_css }>
								<InnerBlocks.Content />
							</div>
						</div>
					</div>
				</>
			);
		}

		if ( slider_item_type === 'content-author-left' ) {
			return (
				<>
					<div style={ hide_style } class={ 'slider-item' } data-author-img={ slider_item_author_image }>
						<div class={ 'row slider-item-image_content ' + slider_item_item_extra_css }>
							<div class={ 'slider-item-content ' + slider_item_item_author_content_extra_css }>
								<InnerBlocks.Content />
								<p class="h5 mb-0 mt-3">{ slider_item_author_name } | { slider_item_author_position }</p>
							</div>
						</div>
					</div>
				</>
			);
		}

		if ( slider_item_type === 'content-author-below' ) {
			return (
				<>
					<div style={ hide_style } class={ 'row slider-item ' + slider_item_item_extra_css }>
						<div class={ 'slider-item-content ' + slider_item_item_content_extra_css }>
							<InnerBlocks.Content />
						</div>
						<div class={ slider_item_item_author_extra_css }>
							<div class={ 'slider-author slider-author-with-photo ' + slider_item_item_author_content_extra_css }>
								<div class={ 'slider-author-photo ' + slider_item_item_author_photo_extra_css } style={ backgroundImageStyle( slider_item_author_image ) } ></div>
								<p class={ 'fs-5 mb-0' }>{ slider_item_author_name }</p>
								<p>{ slider_item_author_position }</p>
							</div>
						</div>
					</div>
				</>
			);
		}

		return (
			<>
				<div style={ hide_style } class={ 'slider-item ' + slider_item_item_extra_css }>
					<div class={ slider_item_item_content_extra_css }>
						<InnerBlocks.Content />
					</div>
				</div>
			</>
		);
	},
};

export default [ v1 ];
