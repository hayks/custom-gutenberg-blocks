import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperTabs } from '../icons';

registerBlockType( metadata.name, {
	icon: helperTabs,
	edit: edit,
	save: save,
} );
