import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperSliderItem } from '../icons';

registerBlockType( 'custom-block/helper-slider-item', {
	icon: helperSliderItem,
	edit: edit,
	save: save,
} );
