import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		readmore_id,
		readmore_container_css,
		readmore_content_css,
		readmore_button_label_more,
		readmore_button_label_less,
		readmore_button_css,
		readmore_button_label_css,
	} = attributes;

	const blockProps = useBlockProps.save();

    return (
		<>
			<div class={ readmore_container_css } >
				<div class={'collapse '+readmore_content_css} id={'card_readmore_'+readmore_id}>
					<InnerBlocks.Content />
				</div>
				<div class={readmore_button_css}>
					<div class={'d-flex collapsed read_more_less_btn'+readmore_button_css} data-bs-toggle={'collapse'} data-bs-target={'#card_readmore_'+readmore_id} aria-expanded={'false'} data-label-closed={readmore_button_label_more} data-label-open={readmore_button_label_less} role='button'>
						<span class={readmore_button_label_css}>{readmore_button_label_more}</span>
					</div>
				</div>
			</div>
		</>
    );
}
