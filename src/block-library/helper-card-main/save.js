import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {

	const {
		card_main_extra_css,
		card_main_body_extra_css,
		card_main_type,
	} = attributes;

	const blockProps = useBlockProps.save();

	return (
		(() => {
			if(card_main_type==='flip') {
				return (
					<div class={ 'flip-card-front '+card_main_extra_css }>
						<div class={ 'osition-relative h-100 '+card_main_body_extra_css }>
							<InnerBlocks.Content />
						</div>
					</div>
				);
			} else if (card_main_type==='media') {
				return (
					<div class={ 'col-sm-12 '+card_main_extra_css }>
						<div class={ 'card-body '+card_main_body_extra_css }>
							<InnerBlocks.Content />
						</div>
					</div>
				)
			} else {
				return (
					<>
						<div class={ 'card-body '+card_main_extra_css }>
							<div class={ card_main_body_extra_css }>
								<InnerBlocks.Content />
							</div>
						</div>
					</>
				);
			}
		})()  
	);

}