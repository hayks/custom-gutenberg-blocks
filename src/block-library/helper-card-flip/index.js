import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperCardFlip } from '../icons';

registerBlockType( metadata.name, {
	icon: helperCardFlip,
	edit: edit,
	save: save,
} );
