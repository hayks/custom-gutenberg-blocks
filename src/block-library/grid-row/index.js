import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { gridRow } from '../icons';

registerBlockType( metadata.name, {
	icon: gridRow,
	edit: edit,
	save: save,
} );
