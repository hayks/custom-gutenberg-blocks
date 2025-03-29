import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		row_extra_css,
	} = attributes;


    return (
    	<div class={ 'row '+row_extra_css } >
        	<InnerBlocks.Content />
        </div>
    );
}