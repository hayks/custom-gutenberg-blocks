import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperCardFlip } from '../icons';

registerBlockType( 'custom-block/helper-card-flip', {
	icon: helperCardFlip,
	edit: edit,
	save: save,
} );
