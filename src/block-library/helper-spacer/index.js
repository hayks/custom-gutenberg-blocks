import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperSpacer } from '../icons';

registerBlockType( 'custom-block/helper-spacer', {
	icon: helperSpacer,
	edit: edit,
	save: save,
} );
