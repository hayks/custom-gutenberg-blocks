import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperBackgroundImage } from '../icons';

registerBlockType( 'custom-block/helper-background-image', {
	icon: helperBackgroundImage,
	edit: edit,
	save: save,
} );
