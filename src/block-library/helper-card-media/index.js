import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperCardMedia } from '../icons';

registerBlockType( metadata.name, {
	icon: helperCardMedia,
	edit: edit,
	save: save,
} );
