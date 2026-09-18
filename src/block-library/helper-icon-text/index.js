import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperIconText } from '../icons';

registerBlockType( metadata.name, {
	icon: helperIconText,
	edit: edit,
	save: save,
} );
