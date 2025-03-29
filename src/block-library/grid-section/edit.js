import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		section_extra_css,
		section_id,
	} = attributes;

	function onChangeSectionExtraCSS( newValue ) {
		setAttributes( { section_extra_css: newValue } );
	}

	function onChangeSectionID( newValue ) {
		setAttributes( { section_id: newValue } );
	}

	const blockProps = useBlockProps( {
		className: ''+section_extra_css,
	} );

	return (
		<>	

			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="CSS Class"
							value={ section_extra_css }
							onChange={ onChangeSectionExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="ID"
							value={ section_id }
							onChange={ onChangeSectionID }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...blockProps }>
				<InnerBlocks />
			</div>

		</>
	);
}
