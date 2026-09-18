import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, RangeControl, ToggleControl, TextControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { makeId } from '../editor-utils';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		slider_container_extra_css,
		slider_id,
		slider_items_show,
		slider_items_show_mobile,
		slider_items_scroll,
		slider_items_scroll_mobile,
		slider_infinite,
		slider_dots,
		slider_arrows,
		slider_autoplay,
	} = attributes;

	function onChangeSliderExtraCSS( newValue ) {
		setAttributes( { slider_container_extra_css: newValue } );
	}
	function onChangeSliderID( newValue ) {
		setAttributes( { slider_id: newValue } );
	}

	useEffect( () => {
		if ( ! slider_id ) {
			setAttributes( { slider_id: makeId() } );
		}
	}, [ slider_id, setAttributes ] );

	function onChangeSliderItemsShow( newValue ) {
		setAttributes( { slider_items_show: newValue } );
	}
	function onChangeSliderItemsShowMobile( newValue ) {
		setAttributes( { slider_items_show_mobile: newValue } );
	}
	function onChangeSliderItemsScroll( newValue ) {
		setAttributes( { slider_items_scroll: newValue } );
	}
	function onChangeSliderItemsScrollMobile( newValue ) {
		setAttributes( { slider_items_scroll_mobile: newValue } );
	}

	const onChangeSliderInfinite = ( value ) => {
		const sliderInfiniteValue = value ? "true" : "false";
		setAttributes( {
			slider_infinite: sliderInfiniteValue,
		} );
	};
	const onChangeSliderDots = ( value ) => {
		const sliderDotsValue = value ? "true" : "false";
		setAttributes( {
			slider_dots: sliderDotsValue,
		} );
	};
	const onChangeSliderArrows = ( value ) => {
		const sliderArrowsValue = value ? "true" : "false";
		setAttributes( {
			slider_arrows: sliderArrowsValue,
		} );
	};
	const onChangeSliderAutoplay = ( value ) => {
		const sliderAutoplayValue = value ? "true" : "false";
		setAttributes( {
			slider_autoplay: sliderAutoplayValue,
		} );
	};

	const SLIDER_TEMPLATE_ALLOWED_BLOCKS = [
		'lattice/helper-slider-item'
	];

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Slider', 'layout-blocks' ) } >
					<PanelRow>
						<TextControl
							label="Slider ID"
							value={ slider_id }
							onChange={ onChangeSliderID }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Shown items"
							value={ slider_items_show }
							onChange={ onChangeSliderItemsShow }
							withInputField={ true }
							min={ 1 }
							max={ 12 }
							initialPosition={ 1 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Shown items - Mobile"
							value={ slider_items_show_mobile }
							onChange={ onChangeSliderItemsShowMobile }
							withInputField={ true }
							min={ 1 }
							max={ 12 }
							initialPosition={ 1 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Items per scroll"
							value={ slider_items_scroll }
							onChange={ onChangeSliderItemsScroll }
							withInputField={ true }
							min={ 1 }
							max={ 12 }
							initialPosition={ 1 }
						/>
					</PanelRow>
					<PanelRow>
						<RangeControl
							label="Items per scroll - Mobile"
							value={ slider_items_scroll_mobile }
							onChange={ onChangeSliderItemsScrollMobile }
							withInputField={ true }
							min={ 1 }
							max={ 12 }
							initialPosition={ 1 }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Infinate scroll"
							onChange={ onChangeSliderInfinite }
							checked={ slider_infinite === "true" }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Show dots"
							onChange={ onChangeSliderDots }
							checked={ slider_dots === "true" }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Show arrows"
							onChange={ onChangeSliderArrows }
							checked={ slider_arrows === "true" }
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Autoplay"
							onChange={ onChangeSliderAutoplay }
							checked={ slider_autoplay === "true" }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title={ __( 'Classes', 'layout-blocks' ) } >
					<PanelRow>
						<TextControl
							label="CSS Class"
							value={ slider_container_extra_css }
							onChange={ onChangeSliderExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				<InnerBlocks
					allowedBlocks={SLIDER_TEMPLATE_ALLOWED_BLOCKS}
				/>
			</div>

		</>
	);
}
