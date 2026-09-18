import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

import edit from './edit';
import save from './save';
import { helperSlider } from '../icons';

registerBlockType( metadata.name, {
	icon: helperSlider,
	edit: edit,
	save: save,
} );
