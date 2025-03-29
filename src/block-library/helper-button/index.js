import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperButton } from '../icons';

registerBlockType( 'custom-block/helper-button', {
	icon: helperButton,
	edit: edit,
	save: save,
} );
