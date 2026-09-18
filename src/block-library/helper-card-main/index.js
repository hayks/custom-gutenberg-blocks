import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { helperCardMain } from '../icons';

registerBlockType( metadata.name, {
	icon: helperCardMain,
	edit: edit,
	save: save,
	deprecated,
} );
