import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperReadMore } from '../icons';

registerBlockType( 'custom-block/helper-readmore', {
	icon: helperReadMore,
	edit: edit,
	save: save,
} );
