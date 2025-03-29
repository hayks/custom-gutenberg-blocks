/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
	__experimentalGetBorderClassesAndStyles as getBorderClassesAndStyles,
	__experimentalGetColorClassesAndStyles as getColorClassesAndStyles,
	__experimentalGetElementClassName,
} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { hasFixedLayout, head, body, foot, caption, table_extra_css, table_header_extra_css, table_caption_extra_css, table_container_extra_css } = attributes;
	const isEmpty = ! head.length && ! body.length && ! foot.length;

	if ( isEmpty ) {
		return null;
	}

	/*
	const colorProps = getColorClassesAndStyles( attributes );
	const borderProps = getBorderClassesAndStyles( attributes );

	const classes = classnames( colorProps.className, borderProps.className, {
		'has-fixed-layout': hasFixedLayout,
	} );

	//this is replaced by table_extra_css



	*/

	const classes = classnames( {
		'table-fixed-layout': hasFixedLayout,
		[`${table_extra_css}`]: table_extra_css,
	} );

	const hasCaption = ! RichText.isEmpty( caption );

	const Section = ( { type, rows } ) => {
		if ( ! rows.length ) {
			return null;
		}
		
		const Tag = `t${ type }`;

		return (
			<Tag>
				{ rows.map( ( { cells }, rowIndex ) => (
					<tr key={ rowIndex }>
						{ cells.map(
							(
								{
									content,
									tag,
									scope,
									align,
									colspan,
									rowspan,
									cellClass,
								},
								cellIndex
							) => {

								/*
									const cellClasses = classnames( {
										[ `has-text-align-${ align }` ]: align,
									} );
									return (
										<RichText.Content
											className={
												cellClasses
													? cellClasses
													: undefined
											}
											data-align={ align }
											tagName={ tag }
											value={ content }
											key={ cellIndex }
											scope={
												tag === 'th' ? scope : undefined
											}
											colSpan={ colspan }
											rowSpan={ rowspan }
										/>
									);
								*/
								const cellClasses = classnames( {
									[ `has-text-align-${ align }` ]: align,
									[`${table_header_extra_css}`]: tag === 'th',
									[`${cellClass}`]: cellClass,
								} );
								return (
									<RichText.Content
										className={
											cellClasses
												? cellClasses
												: undefined
										}
										data-align={ align }
										data-cellClass={ cellClass }
										tagName={ tag }
										value={ content }
										key={ cellIndex }
										scope={
											tag === 'th' ? scope : undefined
										}
										colSpan={ colspan }
										rowSpan={ rowspan }
									/>
								);
							}
						) }
					</tr>
				) ) }
			</Tag>
		);
	};

	return (
		<div class={ table_container_extra_css }>
			<table
				className={ classes }
			>
				<Section type="head" rows={ head } />
				<Section type="body" rows={ body } />
				<Section type="foot" rows={ foot } />
			</table>
			{ hasCaption && (
				<RichText.Content
					tagName="figcaption"
					value={ caption }
					class={ table_caption_extra_css  }
				/>
			) }
		</div>
	);
}
