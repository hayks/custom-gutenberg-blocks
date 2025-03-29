import { registerBlockType } from '@wordpress/blocks';

import './style.scss';
import edit from './edit';
import save from './save';
import { helperIconTextExpandable } from '../icons';

registerBlockType( 'custom-block/helper-icon-text-expandable', {
	icon: helperIconTextExpandable,
	edit: edit,
	save: save,
} );
