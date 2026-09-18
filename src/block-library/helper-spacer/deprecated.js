const v1 = {
	attributes: {
		spacer_type: { type: 'string', default: '1' },
		spacer_type_sm: { type: 'string', default: '' },
		spacer_type_md: { type: 'string', default: '' },
		spacer_type_lg: { type: 'string', default: '' },
		spacer_type_xl: { type: 'string', default: '' },
		spacer_type_xxl: { type: 'string', default: '' },
		spacer_extra_css: { type: 'string', default: '' },
	},
	save( { attributes } ) {
		const {
			spacer_type,
			spacer_type_sm,
			spacer_type_md,
			spacer_type_lg,
			spacer_type_xl,
			spacer_type_xxl,
			spacer_extra_css,
		} = attributes;

		let spacer_class = '';
		if ( spacer_class.length == 0 && spacer_type_sm.length > 0 ) {
			spacer_class = 'pb-' + spacer_type_sm;
		}
		if ( spacer_class.length == 0 && spacer_type_md.length > 0 ) {
			spacer_class = 'pb-' + spacer_type_md;
		}
		if ( spacer_class.length == 0 && spacer_type_lg.length > 0 ) {
			spacer_class = 'pb-' + spacer_type_lg;
		}
		if ( spacer_class.length == 0 && spacer_type_xl.length > 0 ) {
			spacer_class = 'pb-' + spacer_type_xl;
		}
		if ( spacer_class.length == 0 && spacer_type_xxl.length > 0 ) {
			spacer_class = 'pb-' + spacer_type_xxl;
		}
		if ( spacer_class.length == 0 ) {
			spacer_class = 'pb-' + spacer_type;
		}

		if ( spacer_class.length > 0 && spacer_type_sm.length > 0 ) {
			spacer_class = spacer_class + ' pb-sm-' + spacer_type_sm;
		}
		if ( spacer_class.length > 0 && spacer_type_md.length > 0 ) {
			spacer_class = spacer_class + ' pb-md-' + spacer_type_md;
		}
		if ( spacer_class.length > 0 && spacer_type_lg.length > 0 ) {
			spacer_class = spacer_class + ' pb-lg-' + spacer_type_lg;
		}
		if ( spacer_class.length > 0 && spacer_type_xl.length > 0 ) {
			spacer_class = spacer_class + ' pb-xl-' + spacer_type_xl;
		}
		if ( spacer_class.length > 0 && spacer_type_xxl.length > 0 ) {
			spacer_class = spacer_class + ' pb-xxl-' + spacer_type_xxl;
		}

		spacer_class = spacer_class + ' ' + spacer_extra_css;

		return (
			<div class={ spacer_class } ></div>
		);
	},
};

export default [ v1 ];
