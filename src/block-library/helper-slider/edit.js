import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, SelectControl, RangeControl, ToggleControl, TextControl } from '@wordpress/components';

import './editor.scss';

const isSliderIdReserved = ( slider_id, clientId ) => {
    const blocksClientIds = wp.data.select( 'core/block-editor' ).getClientIdsWithDescendants();
    return blocksClientIds.some( ( _clientId ) => {
        const { slider_id: _slider_id } = wp.data.select( 'core/block-editor' ).getBlockAttributes( _clientId );
        return clientId !== _clientId && slider_id === _slider_id;
    } );
};

export default function edit({ attributes, setAttributes, clientId }) {
	
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
	function onChangeSliderID( newValue ) {
		setAttributes( { slider_id: newValue } );
	}
	
	const setFreshSliderId = () => {
		setAttributes({ slider_id: makeid(8) });
	};

	if(slider_id.length === 0){
		setFreshSliderId();
	}

	if ( isSliderIdReserved( slider_id, clientId ) ) {
		//console.log( `Tab with id '${ tabs_item_id }' already exists. Regenerating...`, tabs_item_id );
		setFreshSliderId();
	}
	

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
		['custom-block/helper-slider-item']
	];

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Slider', 'custom' ) } >
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
				<PanelBody title={ __( 'Classes', 'custom' ) } >
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
