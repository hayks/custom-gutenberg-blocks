/**
 * Copy Carbon 32px SVGs into the plugin so the editor picker and
 * [svg_icon] shortcode work without a theme icon folder.
 */
const fs = require( 'fs' );
const path = require( 'path' );

const src = path.join( __dirname, '../node_modules/@carbon/icons/svg/32' );
const dest = path.join( __dirname, '../assets/icons/carbon' );

if ( ! fs.existsSync( src ) ) {
	console.error( 'Missing @carbon/icons. Run npm install.' );
	process.exit( 1 );
}

fs.mkdirSync( dest, { recursive: true } );

const names = [];
for ( const file of fs.readdirSync( src ) ) {
	if ( ! file.endsWith( '.svg' ) ) {
		continue;
	}
	const name = file.slice( 0, -4 );
	if ( ! /^[a-zA-Z0-9_-]+$/.test( name ) ) {
		continue;
	}
	fs.copyFileSync( path.join( src, file ), path.join( dest, file ) );
	names.push( name );
}

names.sort();
fs.writeFileSync( path.join( dest, 'index.json' ), JSON.stringify( names ) );
console.log( `Copied ${ names.length } Carbon icons to assets/icons/carbon` );
