import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperButton } from '../icons';

registerBlockType( metadata.name, {
	icon: helperButton,
	edit: edit,
	save: save,
} );
