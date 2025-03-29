import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, TextControl } from '@wordpress/components';
import { helperSliderNavigationArrows, helperSliderNavigationDots, helperSliderNavigationPagination } from '../icons';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		slider_navigation_extra_css,
		slider_relation_id,
		slider_navigation_type,
		slider_icon_name_prev,
		slider_icon_name_next,
		slider_icon_library,
		slider_icon_size_width,
		slider_icon_size_height,
		slider_icon_style,
		slider_icon_css,
		slider_icon_container_extra_css_prev,
		slider_icon_container_extra_css_next,
	} = attributes;

	function onChangeSliderDotsExtraCSS( newValue ) {
		setAttributes( { slider_navigation_extra_css: newValue } );
	}
	function onChangeRelationID( newValue ) {
		setAttributes( { slider_relation_id: newValue } );
	}
	function onChangeNavigationType( newValue ) {
		setAttributes( { slider_navigation_type: newValue } );
	}
	function onChangeIconNamePrev( newValue ) {
		setAttributes( { slider_icon_name_prev: newValue } );
	}
	function onChangeIconNameNext( newValue ) {
		setAttributes( { slider_icon_name_next: newValue } );
	}
	function onChangeIconLibrary( newValue ) {
		setAttributes( { slider_icon_library: newValue } );
	}
	function onChangeIconSizeWidth( newValue ) {
		setAttributes( { slider_icon_size_width: newValue } );
	}
	function onChangeIconSizeHeight( newValue ) {
		setAttributes( { slider_icon_size_height: newValue } );
	}
	function onChangeIconStyle( newValue ) {
		setAttributes( { slider_icon_style: newValue } );
	}
	function onChangeIconCSS( newValue ) {
		setAttributes( { slider_icon_css: newValue } );
	}
	function onChangeIconContainerCSSPrev( newValue ) {
		setAttributes( { slider_icon_container_extra_css_prev: newValue } );
	}
	function onChangeIconContainerCSSNext( newValue ) {
		setAttributes( { slider_icon_container_extra_css_next: newValue } );
	}

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Settings', 'custom' ) } >
					<PanelRow>
						<SelectControl
							label="Type"
							value={ slider_navigation_type }
							options={ [
								{ label: 'Pagination', value: 'pagination' },
								{ label: 'Arrows', value: 'arrows' },
								{ label: 'Dots', value: 'dots' },
							] }
							onChange={ onChangeNavigationType }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Related slider #ID"
							value={ slider_relation_id }
							onChange={ onChangeRelationID }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="CSS Classes"
							value={ slider_navigation_extra_css }
							onChange={ onChangeSliderDotsExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Icon', 'custom' ) } initialOpen={ true } >

					<PanelRow>
						<TextControl
							label="Icon name - Previous"
							value={ slider_icon_name_prev }
							onChange={ onChangeIconNamePrev }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon name - Next"
							value={ slider_icon_name_next }
							onChange={ onChangeIconNameNext }
						/>
					</PanelRow>

					<PanelRow>
						<SelectControl
							label="Icon library"
							value={ slider_icon_library }
							options={ [
								{ label: 'Carbon', value: 'carbon' },
								{ label: 'Bootstrap', value: 'bootstrap' },
								{ label: 'Custom', value: 'custom' },
							] }
							onChange={ onChangeIconLibrary }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon width"
							value={ slider_icon_size_width }
							onChange={ onChangeIconSizeWidth }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon height"
							value={ slider_icon_size_height }
							onChange={ onChangeIconSizeHeight }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon inline style"
							value={ slider_icon_style }
							onChange={ onChangeIconStyle }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon css class"
							value={ slider_icon_css }
							onChange={ onChangeIconCSS }
						/>
					</PanelRow>

					<PanelRow>
						<TextControl
							label="Icon container extra css - Prev"
							value={ slider_icon_container_extra_css_prev }
							onChange={ onChangeIconContainerCSSPrev }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="Icon container extra css - Next"
							value={ slider_icon_container_extra_css_next }
							onChange={ onChangeIconContainerCSSNext }
						/>
					</PanelRow>
				</PanelBody>

			</InspectorControls>

			<div { ...useBlockProps() }>

				{ slider_navigation_type == 'dots' && (
					<>
						{ helperSliderNavigationDots }
					</>
				) }

				{ slider_navigation_type == 'arrows' && (
					<>
						{ helperSliderNavigationArrows }
					</>
				) }

				{ slider_navigation_type == 'pagination' && (
					<>
						{ helperSliderNavigationPagination }
					</>
				) }

			</div>

		</>
	);
}
