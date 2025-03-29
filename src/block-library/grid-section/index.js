import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { gridSection } from '../icons';

registerBlockType( 'custom-block/grid-section', {
	icon: gridSection,
	edit: edit,
	save: save,
} );
