import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperSlider } from '../icons';

registerBlockType( 'custom-block/helper-slider', {
	icon: helperSlider,
	edit: edit,
	save: save,
} );
