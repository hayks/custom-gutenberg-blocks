/**
 * Small editor helpers shared by a few blocks.
 */
export function makeId( length = 8 ) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result = '';
	for ( let i = 0; i < length; i++ ) {
		result += characters.charAt( Math.floor( Math.random() * characters.length ) );
	}
	return result;
}

export function escapeAttr( value ) {
	return String( value ?? '' )
		.replace( /&/g, '&amp;' )
		.replace( /"/g, '&quot;' )
		.replace( /'/g, '&#39;' )
		.replace( /</g, '&lt;' )
		.replace( />/g, '&gt;' );
}

export function getIconPreviewPath( name, library ) {
	const settings = window.latticeEditorSettings || {};
	const safeName = /^[a-zA-Z0-9_-]+$/.test( name || '' ) ? name : '';
	if ( ! safeName ) {
		return '';
	}
	const lib = library || 'carbon';
	if ( settings.pluginUrl && ( lib === 'carbon' || lib === 'bootstrap' ) ) {
		return `${ settings.pluginUrl }assets/icons/${ lib }/${ safeName }.svg`;
	}
	if ( lib === 'custom' ) {
		return settings.stylesheet
			? `/wp-content/themes/${ settings.stylesheet }/assets/icons/custom/${ safeName }.svg`
			: '';
	}
	if ( settings.template ) {
		return `/wp-content/themes/${ settings.template }/assets/icons/carbon/node_modules/@carbon/icons/svg/32/${ safeName }.svg`;
	}
	return '';
}

export function hasUploadedMedia( value ) {
	return !!( value && typeof value === 'object' && ( value.url || value.id ) );
}

export function hasFocalPoint( value ) {
	return !!(
		value &&
		typeof value === 'object' &&
		typeof value.x === 'number' &&
		Number.isFinite( value.x ) &&
		typeof value.y === 'number' &&
		Number.isFinite( value.y )
	);
}

export function cssSize( value ) {
	if ( value === undefined || value === null || value === '' ) {
		return undefined;
	}
	const str = String( value );
	if ( str === 'auto' || /[a-z%]$/i.test( str ) ) {
		return str;
	}
	return `${ str }px`;
}

export function joinClassNames( ...parts ) {
	return parts
		.flatMap( ( part ) => String( part || '' ).split( /\s+/ ) )
		.filter( Boolean )
		.join( ' ' );
}

export function buildSpacerClass( attributes ) {
	const classes = [];
	if ( attributes.spacer_type ) {
		classes.push( `pb-${ attributes.spacer_type }` );
	}
	if ( attributes.spacer_type_sm ) {
		classes.push( `pb-sm-${ attributes.spacer_type_sm }` );
	}
	if ( attributes.spacer_type_md ) {
		classes.push( `pb-md-${ attributes.spacer_type_md }` );
	}
	if ( attributes.spacer_type_lg ) {
		classes.push( `pb-lg-${ attributes.spacer_type_lg }` );
	}
	if ( attributes.spacer_type_xl ) {
		classes.push( `pb-xl-${ attributes.spacer_type_xl }` );
	}
	if ( attributes.spacer_type_xxl ) {
		classes.push( `pb-xxl-${ attributes.spacer_type_xxl }` );
	}
	if ( attributes.spacer_extra_css ) {
		classes.push( attributes.spacer_extra_css );
	}
	return joinClassNames( ...classes );
}

export function composeInlineStyle( ...parts ) {
	const style = parts
		.map( ( part ) => String( part || '' ).trim().replace( /;+$/, '' ) )
		.filter( Boolean )
		.join( '; ' );
	return style ? `${ style };` : undefined;
}

const attr = ( value ) => ( value === undefined || value === null ? '' : value );

/**
 * Theme shortcodes are emitted into saved markup. Both helpers return an empty
 * string when there is nothing to resolve, so an unconfigured icon leaves no
 * stray `[svg_icon name=""]` behind on the front end.
 */
export function svgIconShortcode( name, library, width, height, className, style ) {
	if ( ! name ) {
		return '';
	}
	return `[svg_icon name="${ attr( name ) }" library="${ attr( library ) }" width="${ attr( width ) }" height="${ attr( height ) }" class="${ attr( className ) }" style="${ attr( style ) }" /]`;
}

export function getAssetShortcode( media, width, height, className, style ) {
	if ( ! hasUploadedMedia( media ) ) {
		return '';
	}
	const name = media.name || media.filename || media.title || '';
	return `[get_asset name="${ attr( name ) }" type="svg" width="${ attr( width ) }" height="${ attr( height ) }" class="${ attr( className ) }" style="${ attr( style ) }" url="${ attr( media.url ) }" /]`;
}

/**
 * Returns undefined rather than `url()` / `url(undefined)` when there is no
 * image, so the style attribute is dropped instead of emitting invalid CSS.
 */
export function backgroundImageStyle( url ) {
	return url ? `background-image: url(${ url })` : undefined;
}

export function parseInlineStyle( str ) {
	const style = {};
	if ( ! str ) {
		return style;
	}
	str.split( ';' ).forEach( ( el ) => {
		const [ property, value ] = el.split( ':' );
		if ( ! property || ! value ) {
			return;
		}
		const formatted = property.trim().replace( /-([a-z])/g, ( _, char ) => char.toUpperCase() );
		style[ formatted ] = value.trim();
	} );
	return style;
}

export function buildTabsNavigationHtml( parentAttributes, innerBlocks ) {
	if ( ! innerBlocks?.length ) {
		return '';
	}
	let html = `<div class="${ escapeAttr( parentAttributes.tabs_navigation_container_css ) }"><div class="${ escapeAttr( parentAttributes.tabs_navigation_row_css ) }"><div class="${ escapeAttr( parentAttributes.tabs_navigation_col_css ) }"><ul class="nav nav-tab ${ escapeAttr( parentAttributes.tabs_navigation_list_css ) }">`;
	innerBlocks.forEach( ( block, index ) => {
		const attrs = block.attributes || {};
		const activeClass = index === 0 ? ' active' : '';
		html += `<li class="nav-item ${ escapeAttr( parentAttributes.tabs_navigation_item_css ) }">`;
		html += `<button type="button" class="nav-link${ activeClass } ${ escapeAttr( attrs.tabs_navigation_css ) }" data-bs-toggle="pill" data-bs-target="#tab-${ escapeAttr( attrs.tabs_item_id ) }" role="tab">`;
		if ( attrs.tabs_navigation_svg_upload?.url ) {
			html += `<img src="${ escapeAttr( attrs.tabs_navigation_svg_upload.url ) }" class="${ escapeAttr( attrs.tabs_navigation_svg_extra_css ) }" style="${ escapeAttr( attrs.tabs_navigation_svg_style ) }" width="${ escapeAttr( attrs.tabs_navigation_svg_width ) }" height="${ escapeAttr( attrs.tabs_navigation_svg_height ) }" alt="${ escapeAttr( attrs.tabs_navigation ) }" />`;
		}
		html += `<span>${ escapeAttr( attrs.tabs_navigation ) }</span></button></li>`;
	} );
	html += '</ul></div></div></div>';
	return html;
}
