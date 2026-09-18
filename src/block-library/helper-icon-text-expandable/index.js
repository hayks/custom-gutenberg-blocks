import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperIconTextExpandable } from '../icons';

registerBlockType( metadata.name, {
	icon: helperIconTextExpandable,
	edit: edit,
	save: save,
} );
