import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { gridColumn } from '../icons';

registerBlockType( metadata.name, {
	icon: gridColumn,
	edit: edit,
	save: save,
} );
