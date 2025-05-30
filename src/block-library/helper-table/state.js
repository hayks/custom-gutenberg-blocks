const INHERITED_COLUMN_ATTRIBUTES = [ 'align' ];

/**
 * Creates a table state.
 *
 * @param {Object} options
 * @param {number} options.rowCount    Row count for the table to create.
 * @param {number} options.columnCount Column count for the table to create.
 *
 * @return {Object} New table state.
 */
export function createTable( { rowCount, columnCount } ) {
	return {
		body: Array.from( { length: rowCount } ).map( () => ( {
			cells: Array.from( { length: columnCount } ).map( () => ( {
				content: '',
				tag: 'td',
			} ) ),
		} ) ),
	};
}

/**
 * Returns the first row in the table.
 *
 * @param {Object} state Current table state.
 *
 * @return {Object | undefined} The first table row.
 */
export function getFirstRow( state ) {
	if ( ! isEmptyTableSection( state.head ) ) {
		return state.head[ 0 ];
	}
	if ( ! isEmptyTableSection( state.body ) ) {
		return state.body[ 0 ];
	}
	if ( ! isEmptyTableSection( state.foot ) ) {
		return state.foot[ 0 ];
	}
}

/**
 * Gets an attribute for a cell.
 *
 * @param {Object} state         Current table state.
 * @param {Object} cellLocation  The location of the cell
 * @param {string} attributeName The name of the attribute to get the value of.
 *
 * @return {*} The attribute value.
 */
export function getCellAttribute( state, cellLocation, attributeName ) {
	const { sectionName, rowIndex, columnIndex } = cellLocation;
	return state[ sectionName ]?.[ rowIndex ]?.cells?.[ columnIndex ]?.[
		attributeName
	];
}

/**
 * Returns updated cell attributes after applying the `updateCell` function to the selection.
 *
 * @param {Object}   state      The block attributes.
 * @param {Object}   selection  The selection of cells to update.
 * @param {Function} updateCell A function to update the selected cell attributes.
 *
 * @return {Object} New table state including the updated cells.
 */
export function updateSelectedCell( state, selection, updateCell ) {
	if ( ! selection ) {
		return state;
	}

	console.log(state);

	const tableSections = Object.fromEntries(
		Object.entries( state ).filter( ( [ key ] ) =>
			[ 'head', 'body', 'foot' ].includes( key )
		)
	);
	const { sectionName: selectionSectionName, rowIndex: selectionRowIndex } =
		selection;

	return Object.fromEntries(
		Object.entries( tableSections ).map( ( [ sectionName, section ] ) => {
			if (
				selectionSectionName &&
				selectionSectionName !== sectionName
			) {
				return [ sectionName, section ];
			}

			return [
				sectionName,
				section.map( ( row, rowIndex ) => {
					if ( selectionRowIndex && selectionRowIndex !== rowIndex ) {
						return row;
					}

					return {
						cells: row.cells.map(
							( cellAttributes, columnIndex ) => {
								const cellLocation = {
									sectionName,
									columnIndex,
									rowIndex,
								};

								if (
									! isCellSelected( cellLocation, selection )
								) {
									return cellAttributes;
								}
								
								return updateCell( cellAttributes );
							}
						),
					};
				} ),
			];
		} )
	);
}

/**
 * Returns whether the cell at `cellLocation` is included in the selection `selection`.
 *
 * @param {Object} cellLocation An object containing cell location properties.
 * @param {Object} selection    An object containing selection properties.
 *
 * @return {boolean} True if the cell is selected, false otherwise.
 */
export function isCellSelected( cellLocation, selection ) {
	if ( ! cellLocation || ! selection ) {
		return false;
	}

	switch ( selection.type ) {
		case 'column':
			return (
				selection.type === 'column' &&
				cellLocation.columnIndex === selection.columnIndex
			);
		case 'cell':
			return (
				selection.type === 'cell' &&
				cellLocation.sectionName === selection.sectionName &&
				cellLocation.columnIndex === selection.columnIndex &&
				cellLocation.rowIndex === selection.rowIndex
			);
	}
}

/**
 * Inserts a row in the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {string} options.sectionName Section in which to insert the row.
 * @param {number} options.rowIndex    Row index at which to insert the row.
 * @param {number} options.columnCount Column count for the table to create.
 *
 * @return {Object} New table state.
 */
export function insertRow( state, { sectionName, rowIndex, columnCount } ) {
	const firstRow = getFirstRow( state );
	const cellCount =
		columnCount === undefined ? firstRow?.cells?.length : columnCount;

	// Bail early if the function cannot determine how many cells to add.
	if ( ! cellCount ) {
		return state;
	}

	return {
		[ sectionName ]: [
			...state[ sectionName ].slice( 0, rowIndex ),
			{
				cells: Array.from( { length: cellCount } ).map(
					( _, index ) => {
						const firstCellInColumn =
							firstRow?.cells?.[ index ] ?? {};

						const inheritedAttributes = Object.fromEntries(
							Object.entries( firstCellInColumn ).filter(
								( [ key ] ) =>
									INHERITED_COLUMN_ATTRIBUTES.includes( key )
							)
						);

						return {
							...inheritedAttributes,
							content: '',
							tag: sectionName === 'head' ? 'th' : 'td',
						};
					}
				),
			},
			...state[ sectionName ].slice( rowIndex ),
		],
	};
}

/**
 * Deletes a row from the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {string} options.sectionName Section in which to delete the row.
 * @param {number} options.rowIndex    Row index to delete.
 *
 * @return {Object} New table state.
 */
export function deleteRow( state, { sectionName, rowIndex } ) {
	return {
		[ sectionName ]: state[ sectionName ].filter(
			( row, index ) => index !== rowIndex
		),
	};
}

/**
 * Inserts a column in the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {number} options.columnIndex Column index at which to insert the column.
 *
 * @return {Object} New table state.
 */
export function insertColumn( state, { columnIndex } ) {
	const tableSections = Object.fromEntries(
		Object.entries( state ).filter( ( [ key ] ) =>
			[ 'head', 'body', 'foot' ].includes( key )
		)
	);

	return Object.fromEntries(
		Object.entries( tableSections ).map( ( [ sectionName, section ] ) => {
			// Bail early if the table section is empty.
			if ( isEmptyTableSection( section ) ) {
				return [ sectionName, section ];
			}

			return [
				sectionName,
				section.map( ( row ) => {
					// Bail early if the row is empty or it's an attempt to insert past
					// the last possible index of the array.
					if ( isEmptyRow( row ) || row.cells.length < columnIndex ) {
						return row;
					}

					return {
						cells: [
							...row.cells.slice( 0, columnIndex ),
							{
								content: '',
								tag: sectionName === 'head' ? 'th' : 'td',
							},
							...row.cells.slice( columnIndex ),
						],
					};
				} ),
			];
		} )
	);
}

/**
 * Deletes a column from the table state.
 *
 * @param {Object} state               Current table state.
 * @param {Object} options
 * @param {number} options.columnIndex Column index to delete.
 *
 * @return {Object} New table state.
 */
export function deleteColumn( state, { columnIndex } ) {
	const tableSections = Object.fromEntries(
		Object.entries( state ).filter( ( [ key ] ) =>
			[ 'head', 'body', 'foot' ].includes( key )
		)
	);

	return Object.fromEntries(
		Object.entries( tableSections ).map( ( [ sectionName, section ] ) => {
			// Bail early if the table section is empty.
			if ( isEmptyTableSection( section ) ) {
				return [ sectionName, section ];
			}

			return [
				sectionName,
				section
					.map( ( row ) => ( {
						cells:
							row.cells.length >= columnIndex
								? row.cells.filter(
										( cell, index ) => index !== columnIndex
								  )
								: row.cells,
					} ) )
					.filter( ( row ) => row.cells.length ),
			];
		} )
	);
}

/**
 * Toggles the existence of a section.
 *
 * @param {Object} state       Current table state.
 * @param {string} sectionName Name of the section to toggle.
 *
 * @return {Object} New table state.
 */
export function toggleSection( state, sectionName ) {
	// Section exists, replace it with an empty row to remove it.
	if ( ! isEmptyTableSection( state[ sectionName ] ) ) {
		return { [ sectionName ]: [] };
	}

	// Get the length of the first row of the body to use when creating the header.
	const columnCount = state.body?.[ 0 ]?.cells?.length ?? 1;

	// Section doesn't exist, insert an empty row to create the section.
	return insertRow( state, { sectionName, rowIndex: 0, columnCount } );
}

/**
 * Determines whether a table section is empty.
 *
 * @param {Object} section Table section state.
 *
 * @return {boolean} True if the table section is empty, false otherwise.
 */
export function isEmptyTableSection( section ) {
	return ! section || ! section.length || section.every( isEmptyRow );
}

/**
 * Determines whether a table row is empty.
 *
 * @param {Object} row Table row state.
 *
 * @return {boolean} True if the table section is empty, false otherwise.
 */
export function isEmptyRow( row ) {
	return ! ( row.cells && row.cells.length );
}
