import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperCardMain } from '../icons';

registerBlockType( 'custom-block/helper-card-main', {
	icon: helperCardMain,
	edit: edit,
	save: save,
} );
