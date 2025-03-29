import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperSVG } from '../icons';

registerBlockType( 'custom-block/helper-inline-svg', {
	icon: helperSVG,
	edit: edit,
	save: save,
} );
