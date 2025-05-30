import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { gridRow } from '../icons';

registerBlockType( 'custom-block/grid-row', {
	icon: gridRow,
	edit: edit,
	save: save,
} );
