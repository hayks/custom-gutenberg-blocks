import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperSVG } from '../icons';

registerBlockType( metadata.name, {
	icon: helperSVG,
	edit: edit,
	save: save,
} );
