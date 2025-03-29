import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperNavigation } from '../icons';

registerBlockType( 'custom-block/helper-navigation', {
	icon: helperNavigation,
	edit: edit,
	save: save,
} );
