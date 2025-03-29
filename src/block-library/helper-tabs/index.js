import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperTabs } from '../icons';

registerBlockType( 'custom-block/helper-tabs', {
	icon: helperTabs,
	edit: edit,
	save: save,
} );
