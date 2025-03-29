import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { gridColumn } from '../icons';

registerBlockType( 'custom-block/grid-column', {
	icon: gridColumn,
	edit: edit,
	save: save,
} );
