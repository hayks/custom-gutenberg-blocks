import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

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

	let inline_style = '';
	if(slider_item_index >= slider_item_items_show){
		inline_style = 'display:none;';
	}

	let video_overlay_class = '';
	if(slider_item_video_overlay === true){
		inline_style = 'image-overlay';
	}

	if(slider_item_type==='image_content') {
		inline_style = '';
	}



	return (
		(() => {
			if(slider_item_type==='video-youtube') {
				return (
					<>

						<div style={ inline_style } class={ 'row slider-item '+slider_item_item_extra_css }>

							<div 
								class={'slider-video position-relative '+slider_item_video_extra_css+' '+inline_style+' '} 
								style={ 'background-image: url('+slider_item_video_thumbnail.url+')' } 
								data-video={slider_item_video_url}
							>
								<div class={''+slider_item_video_play_extra_css+''}>
									<InnerBlocks.Content />
								</div>
								<div class={'overlay-mask '+slider_item_video_overlay_extra_css+' '}></div>
							</div>

							<div class={ slider_item_item_author_extra_css }>
								<div class={ 'slider-author slider-author-with-photo '+ slider_item_item_author_content_extra_css }>
									<div class={ 'slider-author-photo '+slider_item_item_author_photo_extra_css } style={ 'background-image: url('+slider_item_author_image+')' } ></div>
									<p class={ 'fs-5 mb-0' }>{ slider_item_author_name }</p>
									<p>{ slider_item_author_position }</p>
								</div>
							</div>
						</div>

					</>
				);
			} else if(slider_item_type==='video-mp4') {
				return (
					<>

						<div style={ inline_style } class={ 'row slider-item '+slider_item_item_extra_css }>

							<div 
								class={'slider-video position-relative '+slider_item_video_extra_css+' '+inline_style+' '} 
								style={ 'background-image: url('+slider_item_video_thumbnail.url+')' } 
								data-video={slider_item_video_mp4.link}
							>
								<div class={''+slider_item_video_play_extra_css+''}>
									<InnerBlocks.Content />
								</div>
								<div class={'overlay-mask '+slider_item_video_overlay_extra_css+' '}></div>
							</div>

							<div class={ slider_item_item_author_extra_css }>
								<div class={ 'slider-author slider-author-with-photo '+ slider_item_item_author_content_extra_css }>
									<div class={ 'slider-author-photo '+slider_item_item_author_photo_extra_css } style={ 'background-image: url('+slider_item_author_image+')' } ></div>
									<p class={ 'fs-5 mb-0' }>{ slider_item_author_name }</p>
									<p>{ slider_item_author_position }</p>
								</div>
							</div>
						</div>

					</>
				);
			} else if(slider_item_type==='image_content') {
				return (
					<>
						<div class={ 'slider-item' }>
							<div class={ 'row slider-item-image_content '+slider_item_item_extra_css }>
								<div class={ slider_item_item_content_extra_css }>
									<div class={ 'slider-author-photo '+slider_item_item_author_photo_extra_css } style={ 'background-image: url('+slider_item_author_image_large+')' } ></div>						
								</div>
								<div class={ 'slider-item-content '+slider_item_item_author_content_extra_css }>
									<InnerBlocks.Content />
								</div>
							</div>
						</div>
					</>
				);
			} else if(slider_item_type==='content-author-left') {
				return (
					<>
						<div class={ 'slider-item' } data-author-img={ slider_item_author_image }>
							<div class={ 'row slider-item-image_content '+slider_item_item_extra_css }>
								<div class={ 'slider-item-content '+slider_item_item_author_content_extra_css }>
									<InnerBlocks.Content />
									<p class="h5 mb-0 mt-3">{ slider_item_author_name } | { slider_item_author_position }</p>
								</div>
							</div>
						</div>
					</>
				);
			} else if(slider_item_type==='content-author-below') {
				//content-author-below
				return (
					<>
						<div style={ inline_style } class={ 'row slider-item '+slider_item_item_extra_css }>
							<div class={ 'slider-item-content '+slider_item_item_content_extra_css }>
								<InnerBlocks.Content />
							</div>
							<div class={ slider_item_item_author_extra_css }>
								<div class={ 'slider-author slider-author-with-photo '+ slider_item_item_author_content_extra_css }>
									<div class={ 'slider-author-photo '+slider_item_item_author_photo_extra_css } style={ 'background-image: url('+slider_item_author_image+')' } ></div>
									<p class={ 'fs-5 mb-0' }>{ slider_item_author_name }</p>
									<p>{ slider_item_author_position }</p>
								</div>
							</div>
						</div>
					</>
				);
			} else {
				//content-html
				return (
					<>
						<div style={ inline_style } class={ 'slider-item '+slider_item_item_extra_css }>
							<div class={ slider_item_item_content_extra_css }>
								<InnerBlocks.Content />
							</div>
						</div>
					</>
				);
			}
		})()  
	);

}
