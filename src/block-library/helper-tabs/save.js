import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RawHTML } from '@wordpress/element';

export default function save({ attributes }) {

	const {
		tabs_navigation,
	} = attributes;

    return (
		<>
			<RawHTML>{ tabs_navigation }</RawHTML>
			<div class={"tab-content"}>
				<InnerBlocks.Content />
			</div>
		</>
    );
}
