const v1 = {
	attributes: {
		slider_avatar_container_extra_css: {
			type: 'string',
			default: 'slider-author slider-author-with-photo',
		},
		slider_avatar_extra_css: {
			type: 'string',
			default: 'slider-author-photo slider-author-photo-external',
		},
	},
	save( { attributes } ) {
		const {
			slider_avatar_container_extra_css,
			slider_avatar_extra_css,
		} = attributes;

		return (
			<div class={ slider_avatar_container_extra_css }>
				<div class={ slider_avatar_extra_css } style={ 'background-image: url()' }></div>
			</div>
		);
	},
};

export default [ v1 ];
