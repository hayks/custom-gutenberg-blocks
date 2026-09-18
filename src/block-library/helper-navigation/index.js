import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import './style.scss';
import edit from './edit';
import save from './save';
import deprecated from './deprecated';
import { helperNavigation } from '../icons';

registerBlockType( metadata.name, {
	icon: helperNavigation,
	edit: edit,
	save: save,
	deprecated,
} );
