import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperIcon } from '../icons';

registerBlockType( metadata.name, {
	icon: helperIcon,
	edit: edit,
	save: save,
} );
