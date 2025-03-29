import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperAccordionItem } from '../icons';

registerBlockType( 'custom-block/helper-faq-item', {
	icon: helperAccordionItem,
	edit: edit,
	save: save,
} );
