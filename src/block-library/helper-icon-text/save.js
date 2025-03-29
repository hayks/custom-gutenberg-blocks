import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';

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

	return (
		(() => {
			if(icon_text_poistion==='right-center') {
				if(icon_text_type==='expandable') {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-center card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-center '+icon_text_main_container_extra_css }>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
							</div>
						</>
					);
				}
			} else if(icon_text_poistion==='left-center') {
				if(icon_text_type==='expandable') {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-center card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-center '+icon_text_main_container_extra_css }>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
							</div>
						</>
					);
				}
			} else if(icon_text_poistion==='right-bottom') {
				if(icon_text_type==='expandable') {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-end card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-end '+icon_text_main_container_extra_css }>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
							</div>
						</>
					);
				}
			} else if(icon_text_poistion==='left-bottom') {
				if(icon_text_type==='expandable') {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-end card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-end '+icon_text_main_container_extra_css }>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
							</div>
						</>
					);
				}
			} else if(icon_text_poistion==='right-top') {
				if(icon_text_type==='expandable') {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-start card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
							</div>
						</>
					);
				} else {
					return (
						<>
							<div class={ 'text-with-icon d-flex align-items-start '+icon_text_main_container_extra_css }>
								<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
									<InnerBlocks.Content />
								</div>
								<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
							</div>
						</>
					);
				}
			} else {
				if(icon_text_type==='expandable') {
					if(icon_text_background_upload==='') {
						return (
							<>
								<div class={ 'text-with-icon d-flex align-items-start card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
									<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
									<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
										<InnerBlocks.Content />
									</div>
								</div>
							</>
						);
					}else{
						return (
							<>
								<div class={ 'text-with-icon d-flex align-items-start card-expandable collapsed '+icon_text_main_container_extra_css } data-bs-toggle={'collapse'} href={'#card_expandable_'+icon_text_id} role={'button'} aria-expanded={'false'} aria-controls={'card_expandable'}>
									<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}><RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML></div>
									<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
										<InnerBlocks.Content />
									</div>
								</div>
							</>
						);

					}
				} else {
					if(icon_text_background_upload==='') {
						return (
							<>
								<div class={ 'text-with-icon d-flex align-items-start '+icon_text_main_container_extra_css }>
									<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}>
										<RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML>
									</div>
									<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
										<InnerBlocks.Content />
									</div>
								</div>
							</>
						);
					}else{
						return (
							<>
								<div class={ 'text-with-icon d-flex '+icon_text_main_container_extra_css }>

									<div class={ 'text-with-icon-icon d-flex align-middle '+icon_text_icon_container_extra_css}>
										<RawHTML>{'[svg_icon name="'+icon_text_name+'" library="'+icon_text_library+'" width="'+icon_text_size+'" height="'+icon_text_size+'" class="'+icon_text_extra_css+'" style="'+icon_text_style+'" /]'}</RawHTML>
										<RawHTML>{'[get_asset name="'+icon_text_background_upload.name+'" type="svg" width="'+icon_text_background_width+'" height="'+icon_text_background_height+'" class="'+icon_text_background_extra_css+'" style="'+icon_text_background_style+'" url="'+icon_text_background_upload.url+'" /]'}</RawHTML>
									</div>

									<div class={ 'text-with-icon-content '+icon_text_text_container_extra_css}>
										<InnerBlocks.Content />
									</div>
								</div>
							</>
						);
					}

				}
			}
		})()  
	);

}