import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { helperSliderAvatar } from '../icons';

import './editor.scss';

export default function edit({ attributes, setAttributes }) {
	
	const {
		slider_avatar_container_extra_css,
		slider_avatar_extra_css,
	} = attributes;

	function onChangeSliderAvatarContainerExtraCSS( newValue ) {
		setAttributes( { slider_avatar_container_extra_css: newValue } );
	}
	function onChangeSliderAvatarExtraCSS( newValue ) {
		setAttributes( { slider_avatar_extra_css: newValue } );
	}

	return (
		<>	

			<InspectorControls>
				<PanelBody title={ __( 'Classes', 'custom' ) } >
					<PanelRow>
						<TextControl
							label="CSS Classes - Container"
							value={ slider_avatar_container_extra_css }
							onChange={ onChangeSliderAvatarContainerExtraCSS }
						/>
					</PanelRow>
					<PanelRow>
						<TextControl
							label="CSS Classes - image"
							value={ slider_avatar_extra_css }
							onChange={ onChangeSliderAvatarExtraCSS }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				{ helperSliderAvatar }
			</div>

		</>
	);
}
