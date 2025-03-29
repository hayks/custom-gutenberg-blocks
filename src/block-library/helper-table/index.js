import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperTable } from '../icons';

registerBlockType( 'custom-block/helper-table', {
	icon: helperTable,
	edit: edit,
	save: save,
} );
