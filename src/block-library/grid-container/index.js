import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { gridContainer } from '../icons';

registerBlockType( metadata.name, {
	icon: gridContainer,
	edit: edit,
	save: save,
} );
