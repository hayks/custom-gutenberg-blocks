import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperAccordion } from '../icons';

registerBlockType( 'custom-block/helper-faq', {
	icon: helperAccordion,
	edit: edit,
	save: save,
} );
