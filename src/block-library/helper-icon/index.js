import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperIcon } from '../icons';

registerBlockType( 'custom-block/helper-icon', {
	icon: helperIcon,
	edit: edit,
	save: save,
} );
