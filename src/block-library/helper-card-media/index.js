import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperCardMedia } from '../icons';

registerBlockType( 'custom-block/helper-card-media', {
	icon: helperCardMedia,
	edit: edit,
	save: save,
} );
