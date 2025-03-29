import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';

import './editor.scss';

const isReadmoreIdReserved = ( readmore_id, clientId ) => {
    const blocksClientIds = wp.data.select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { readmore_id: _readmore_id } = wp.data.select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return clientId !== _clientId && readmore_id === _readmore_id;
    } );
};

export default function edit({ attributes, setAttributes, clientId }) {
	
	const {
		readmore_id,
		readmore_container_css,
		readmore_content_css,
		readmore_button_label_more,
		readmore_button_label_less,
		readmore_button_css,
		readmore_button_label_css,
	} = attributes;

	function onChangeReadmoreContainerCSS( newValue ) {
		setAttributes( { readmore_container_css: newValue } );
	}

	function onChangeReadmoreContentCSS( newValue ) {
		setAttributes( { readmore_content_css: newValue } );
	}

	function onChangeReadmoreButtonLabelMore( newValue ) {
		setAttributes( { readmore_button_label_more: newValue } );
	}

	function onChangeReadmoreButtonLabelLess( newValue ) {
		setAttributes( { readmore_button_label_less: newValue } );
	}

	function onChangeReadmoreButtonCSS( newValue ) {
		setAttributes( { readmore_button_css: newValue } );
	}

	function onChangeReadmoreButtonLabelCSS( newValue ) {
		setAttributes( { readmore_button_label_css: newValue } );
	}
	
	function makeid(length) {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		let counter = 0;
		while (counter < length) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
			counter += 1;
		}
		return result;
	}

	const setFreshReadmoreId = () => {
		setAttributes({ readmore_id: makeid(8) });
	};

	if(readmore_id.length === 0){
		setFreshReadmoreId();
	}

	if ( isReadmoreIdReserved( readmore_id, clientId ) ) {
		//console.log( `Tab with id '${ tabs_item_id }' already exists. Regenerating...`, tabs_item_id );
		setFreshReadmoreId();
	}

	const blockProps = useBlockProps( {
		className: ''+readmore_container_css,
	} );

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Labels', 'custom' ) } >
					<PanelRow>
						<TextControl
							label={ __( 'Read more' ) }
							value={ readmore_button_label_more }
							onChange={ onChangeReadmoreButtonLabelMore }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Read less' ) }
							value={ readmore_button_label_less }
							onChange={ onChangeReadmoreButtonLabelLess }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Style', 'custom' ) } >
					<PanelRow>
						<TextControl
							label={ __( 'Container' ) }
							value={ readmore_container_css }
							onChange={ onChangeReadmoreContainerCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Content' ) }
							value={ readmore_content_css }
							onChange={ onChangeReadmoreContentCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Button' ) }
							value={ readmore_button_css }
							onChange={ onChangeReadmoreButtonCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label={ __( 'Button label' ) }
							value={ readmore_button_label_css }
							onChange={ onChangeReadmoreButtonLabelCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<div class={'collapse '+readmore_content_css} id={'card_readmore_'+readmore_id}>
					<InnerBlocks />
				</div>
				<div class={readmore_button_css}>
					<div class={'d-flex collapsed read_more_less_btn'+readmore_button_css} data-bs-toggle={'collapse'} data-bs-target={'#card_readmore_'+readmore_id} aria-expanded={'false'} data-label-closed={readmore_button_label_more} data-label-open={readmore_button_label_less} role='button'>
						<span class={readmore_button_label_css}>{readmore_button_label_more}</span>
					</div>
				</div>
			</div>

		</>
	);
}
