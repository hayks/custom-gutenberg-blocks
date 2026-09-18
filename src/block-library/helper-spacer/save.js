import { buildSpacerClass } from '../editor-utils';

export default function save({ attributes }) {
	return (
		<div class={ buildSpacerClass( attributes ) } ></div>
	);
}
