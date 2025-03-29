import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";


export default function save({ attributes }) {

	const {
		column_type,
		column_extra_css,
	} = attributes;

    return (
    	<div class={ column_type+' '+column_extra_css } >
        	<InnerBlocks.Content />
        </div>
    );
}
