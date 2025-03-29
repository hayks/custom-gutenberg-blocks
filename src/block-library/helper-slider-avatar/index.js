import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperSliderAvatar } from '../icons';

registerBlockType( 'custom-block/helper-slider-avatar', {
	icon: helperSliderAvatar,
	edit: edit,
	save: save,
} );
