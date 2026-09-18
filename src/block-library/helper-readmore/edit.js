import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { makeId } from '../editor-utils';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
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

	useEffect( () => {
		if ( ! readmore_id ) {
			setAttributes( { readmore_id: makeId() } );
		}
	}, [ readmore_id, setAttributes ] );

	const blockProps = useBlockProps( {
		className: ''+readmore_container_css,
	} );

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Labels', 'layout-blocks' ) } >
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
				<PanelBody title={ __( 'Style', 'layout-blocks' ) } >
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
				<div className={'collapse '+readmore_content_css} id={'card_readmore_'+readmore_id}>
					<InnerBlocks />
				</div>
				<div className={readmore_button_css}>
					<div className={'d-flex collapsed read_more_less_btn'} data-bs-toggle={'collapse'} data-bs-target={'#card_readmore_'+readmore_id} aria-expanded={'false'} data-label-closed={readmore_button_label_more} data-label-open={readmore_button_label_less} role='button'>
						<span className={readmore_button_label_css}>{readmore_button_label_more}</span>
					</div>
				</div>
			</div>

		</>
	);
}
