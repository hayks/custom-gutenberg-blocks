import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";


export default function save({ attributes }) {

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
	if(spacer_class.length == 0 && spacer_type_sm.length > 0){
		spacer_class = 'pb-'+spacer_type_sm;
	}
	if(spacer_class.length == 0 && spacer_type_md.length > 0){
		spacer_class = 'pb-'+spacer_type_md;
	}
	if(spacer_class.length == 0 && spacer_type_lg.length > 0){
		spacer_class = 'pb-'+spacer_type_lg;
	}
	if(spacer_class.length == 0 && spacer_type_xl.length > 0){
		spacer_class = 'pb-'+spacer_type_xl;
	}
	if(spacer_class.length == 0 && spacer_type_xxl.length > 0){
		spacer_class = 'pb-'+spacer_type_xxl;
	}
	if(spacer_class.length == 0){
		spacer_class = 'pb-'+spacer_type;
	}

	if(spacer_class.length > 0 && spacer_type_sm.length > 0){
		spacer_class = spacer_class+' pb-sm-'+spacer_type_sm;
	}
	if(spacer_class.length > 0 && spacer_type_md.length > 0){
		spacer_class = spacer_class+' pb-md-'+spacer_type_md;
	}
	if(spacer_class.length > 0 && spacer_type_lg.length > 0){
		spacer_class = spacer_class+' pb-lg-'+spacer_type_lg;
	}
	if(spacer_class.length > 0 && spacer_type_xl.length > 0){
		spacer_class = spacer_class+' pb-xl-'+spacer_type_xl;
	}
	if(spacer_class.length > 0 && spacer_type_xxl.length > 0){
		spacer_class = spacer_class+' pb-xxl-'+spacer_type_xxl;
	}

	spacer_class = spacer_class+' '+spacer_extra_css;

    return (
    	<div class={ spacer_class } ></div>
    );
}
