import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		card_flip_extra_css,
		card_flip_body_extra_css,
		card_flip_url,
		card_flip_url_target,
		card_flip_url_rel,
	} = attributes;

	const blockProps = useBlockProps.save();

    return (
		<div class={ 'flip-card-back '+card_flip_extra_css }>
			<div class={ 'position-relative h-100 '+card_flip_body_extra_css }>
				<InnerBlocks.Content />
			</div>
			{card_flip_url.length > 0 &&
				<a href={ card_flip_url } rel={ card_flip_url_rel } target={ card_flip_url_target } class={ 'position-absolute top-0 start-0 d-block w-100 h-100' } ></a>
			}
		</div>
    );
}
