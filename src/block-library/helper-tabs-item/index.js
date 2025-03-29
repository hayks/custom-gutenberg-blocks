import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperTabsItem } from '../icons';

registerBlockType( 'custom-block/helper-tabs-item', {
	icon: helperTabsItem,
	edit: edit,
	save: save,
} );
