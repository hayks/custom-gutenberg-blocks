import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperSliderNavigationArrows } from '../icons';

registerBlockType( 'custom-block/helper-slider-navigation', {
	icon: helperSliderNavigationArrows,
	edit: edit,
	save: save,
} );
