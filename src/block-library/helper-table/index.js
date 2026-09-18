import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import './style.scss';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { helperTable } from '../icons';

registerBlockType( metadata.name, {
	icon: helperTable,
	edit: edit,
	save: save,
	deprecated,
} );
