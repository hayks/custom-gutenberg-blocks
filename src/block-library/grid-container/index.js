import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { gridContainer } from '../icons';

registerBlockType( 'custom-block/grid-container', {
	icon: gridContainer,
	edit: edit,
	save: save,
} );
