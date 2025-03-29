import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {

	const {
		container_type,
		container_extra_css,
	} = attributes;

	const ALLOWED_BLOCKS = ['custom-block/grid-row'];
	/*
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
				/>
	*/

	function onChangeContainerType( newValue ) {
		setAttributes( { container_type: newValue } );
	}

	function onChangeContainerExtraCSS( newValue ) {
		setAttributes( { container_extra_css: newValue } );
	}

	const blockProps = useBlockProps( {
		className: ''+container_type+' '+container_extra_css,
	} );

	return (
		<>	

			<InspectorControls>
				<PanelBody>
					<PanelRow>
				        <SelectControl
				            label="Type"
				            value={ container_type }
				            options={ [
				                { label: 'Container', value: 'container' },
				                { label: 'Container fluid', value: 'container-fluid' },
				            ] }
				            onChange={ onChangeContainerType }
				        />
					</PanelRow>
					<PanelRow>
						<TextControl
							label="CSS Class"
							value={ container_extra_css }
							onChange={ onChangeContainerExtraCSS }
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
