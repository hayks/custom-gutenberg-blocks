import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperIconText } from '../icons';

registerBlockType( 'custom-block/helper-icon-text', {
	icon: helperIconText,
	edit: edit,
	save: save,
} );
