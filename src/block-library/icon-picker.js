import { __ } from '@wordpress/i18n';
import { Button, Modal, SearchControl, Spinner, TextControl } from '@wordpress/components';
import { useEffect, useMemo, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { getIconPreviewPath } from './editor-utils';

import './icon-picker.scss';

const listCache = {};

const POPULAR = [
	'add',
	'arrow--right',
	'arrow--left',
	'chevron--down',
	'chevron--left',
	'chevron--right',
	'chevron--up',
	'checkmark',
	'close',
	'search',
	'user',
	'email',
	'phone',
	'menu',
	'home',
	'information',
	'warning',
	'download',
	'launch',
	'edit',
	'trash-can',
	'settings',
	'star',
	'location',
	'calendar',
	'time',
	'play',
	'pause',
];

/**
 * Searchable Carbon icon picker for the block inspector.
 *
 * @param {Object}   props
 * @param {string}   props.label
 * @param {string}   props.library
 * @param {string}   props.value
 * @param {Function} props.onChange
 */
export default function IconPicker( { label, library = 'carbon', value, onChange } ) {
	const [ isOpen, setOpen ] = useState( false );
	const [ search, setSearch ] = useState( '' );
	const [ icons, setIcons ] = useState( listCache[ library ] || [] );
	const [ isLoading, setLoading ] = useState( false );

	useEffect( () => {
		if ( library === 'custom' ) {
			return;
		}
		if ( listCache[ library ] ) {
			setIcons( listCache[ library ] );
			return;
		}
		setLoading( true );
		apiFetch( { path: `/lattice/v1/icons?library=${ encodeURIComponent( library ) }` } )
			.then( ( list ) => {
				const items = Array.isArray( list ) ? list : [];
				listCache[ library ] = items;
				setIcons( items );
			} )
			.catch( () => {
				setIcons( [] );
			} )
			.finally( () => {
				setLoading( false );
			} );
	}, [ library ] );

	const filtered = useMemo( () => {
		const query = search.trim().toLowerCase();
		if ( ! query ) {
			const popular = POPULAR
				.map( ( name ) => icons.find( ( icon ) => icon.name === name ) )
				.filter( Boolean );
			return popular.length ? popular : icons.slice( 0, 48 );
		}
		return icons.filter( ( icon ) => icon.name.toLowerCase().includes( query ) ).slice( 0, 120 );
	}, [ icons, search ] );

	const preview = value ? getIconPreviewPath( value, library ) : '';

	if ( library === 'custom' ) {
		return (
			<TextControl
				label={ label }
				value={ value }
				onChange={ onChange }
				help={ __( 'File name from the theme custom icons folder, without .svg', 'layout-blocks' ) }
			/>
		);
	}

	return (
		<div className="cgb-icon-picker">
			<div className="cgb-icon-picker__label">{ label }</div>
			<div className="cgb-icon-picker__current">
				{ preview ? (
					<img src={ preview } alt="" width="32" height="32" />
				) : (
					<span className="cgb-icon-picker__empty">{ __( 'No icon selected', 'layout-blocks' ) }</span>
				) }
				<Button variant="secondary" onClick={ () => setOpen( true ) }>
					{ value ? __( 'Replace icon', 'layout-blocks' ) : __( 'Choose icon', 'layout-blocks' ) }
				</Button>
				{ value ? (
					<Button variant="tertiary" isDestructive onClick={ () => onChange( '' ) }>
						{ __( 'Clear', 'layout-blocks' ) }
					</Button>
				) : null }
			</div>
			{ value ? (
				<div className="cgb-icon-picker__name">{ value }</div>
			) : null }

			{ isOpen && (
				<Modal
					title={ label || __( 'Choose icon', 'layout-blocks' ) }
					onRequestClose={ () => setOpen( false ) }
					className="cgb-icon-picker__modal"
				>
					<SearchControl
						value={ search }
						onChange={ setSearch }
						placeholder={ __( 'Search icons…', 'layout-blocks' ) }
					/>
					{ isLoading ? (
						<Spinner />
					) : (
						<>
							<p className="cgb-icon-picker__hint">
								{ search
									? __( 'Showing matching Carbon icons.', 'layout-blocks' )
									: __( 'Popular icons. Type a name to search the full library.', 'layout-blocks' ) }
							</p>
							<div className="cgb-icon-picker__grid">
								{ filtered.map( ( icon ) => (
									<button
										key={ icon.name }
										type="button"
										className={ 'cgb-icon-picker__item' + ( icon.name === value ? ' is-selected' : '' ) }
										onClick={ () => {
											onChange( icon.name );
											setOpen( false );
											setSearch( '' );
										} }
										title={ icon.name }
									>
										<img src={ icon.url } alt="" width="32" height="32" />
										<span>{ icon.name }</span>
									</button>
								) ) }
							</div>
							{ ! filtered.length ? (
								<p>{ __( 'No icons match that search.', 'layout-blocks' ) }</p>
							) : null }
						</>
					) }
				</Modal>
			) }
		</div>
	);
}
