import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperCard } from '../icons';

registerBlockType( 'custom-block/helper-card', {
	icon: helperCard,
	edit: edit,
	save: save,
} );
