import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {

	const {
		row_extra_css,
	} = attributes;


	function onChangeRowExtraCSS( newValue ) {
		setAttributes( { row_extra_css: newValue } );
	}

	const blockProps = useBlockProps( {
		className: ''+row_extra_css,
	} );

	const ALLOWED_BLOCKS = ['custom-block/grid-column'];
	return (
		<>	
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="Extra CSS Class"
							value={ row_extra_css }
							onChange={ onChangeRowExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
			</div>
		</>
	);
}

/* orientation='vertical' */