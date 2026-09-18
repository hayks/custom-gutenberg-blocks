import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { helperCard } from '../icons';

registerBlockType( metadata.name, {
	icon: helperCard,
	edit: edit,
	save: save,
	deprecated,
} );
