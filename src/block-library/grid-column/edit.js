import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		column_type,
		column_extra_css,
	} = attributes;

	function onChangeColumnType( newValue ) {
		setAttributes( { column_type: newValue } );
	}

	function onChangeColumnExtraCSS( newValue ) {
		setAttributes( { column_extra_css: newValue } );
	}

	const blockProps = useBlockProps( {
		className: ''+column_type+' '+column_extra_css,
	} );

	return (
		<>	

			<InspectorControls>
				<PanelBody>
					<PanelRow>
				        <SelectControl
				            label="column type"
				            value={ column_type }
				            options={ [
				                { label: 'col-12', value: 'col-12' },
				                { label: 'col-11', value: 'col-11' },
				                { label: 'col-10', value: 'col-10' },
				                { label: 'col-9', value: 'col-9' },
				                { label: 'col-8', value: 'col-8' },
				                { label: 'col-7', value: 'col-7' },
				                { label: 'col-6', value: 'col-6' },
				                { label: 'col-5', value: 'col-5' },
				                { label: 'col-4', value: 'col-4' },
				                { label: 'col-3', value: 'col-3' },
				                { label: 'col-2', value: 'col-2' },
				                { label: 'col-1', value: 'col-1' },
								{ label: 'col', value: 'col' },
				                { label: 'col-auto', value: 'col-auto' },
				            ] }
				            onChange={ onChangeColumnType }
				        />

			        </PanelRow>
					<PanelRow>
						<TextControl
							label="Extra CSS Class"
							value={ column_extra_css }
							onChange={ onChangeColumnExtraCSS }
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
