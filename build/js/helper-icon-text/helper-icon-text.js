/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-library/helper-icon-text/edit.js":
/*!****************************************************!*\
  !*** ./src/block-library/helper-icon-text/edit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/helper-icon-text/editor.scss");





const isIconTextIdReserved = (icon_text_id, clientId) => {
  const blocksClientIds = wp.data.select('core/block-editor').getClientIdsWithDescendants();
  return blocksClientIds.some(_clientId => {
    const {
      icon_text_id: _icon_text_id
    } = wp.data.select('core/block-editor').getBlockAttributes(_clientId);
    return clientId !== _clientId && icon_text_id === _icon_text_id;
  });
};
function edit({
  attributes,
  setAttributes,
  clientId
}) {
  const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';
  const {
    icon_text_name,
    icon_text_library,
    icon_text_size,
    icon_text_extra_css,
    icon_text_style,
    icon_text_poistion,
    icon_text_main_container_extra_css,
    icon_text_icon_container_extra_css,
    icon_text_text_container_extra_css,
    icon_text_id,
    icon_text_type,
    icon_text_background_upload,
    icon_text_background_width,
    icon_text_background_height,
    icon_text_background_extra_css,
    icon_text_background_style
  } = attributes;
  function onChangeIconTextID(newValue) {
    setAttributes({
      icon_text_id: newValue
    });
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
  const setFreshIconTextId = () => {
    setAttributes({
      icon_text_id: makeid(8)
    });
  };
  if (icon_text_id.length === 0) {
    setFreshIconTextId();
  }
  if (isIconTextIdReserved(icon_text_id, clientId)) {
    //console.log( `Tab with id '${ tabs_item_id }' already exists. Regenerating...`, tabs_item_id );
    setFreshIconTextId();
  }
  function onChangeIconTextType(newValue) {
    setAttributes({
      icon_text_type: newValue
    });
  }
  function onChangeIconTextName(newValue) {
    setAttributes({
      icon_text_name: newValue
    });
  }
  function onChangeIconTextLibrary(newValue) {
    setAttributes({
      icon_text_library: newValue
    });
  }
  function onChangeIconTextSize(newValue) {
    setAttributes({
      icon_text_size: newValue
    });
  }
  function onChangeIconTextExtraCSS(newValue) {
    setAttributes({
      icon_text_extra_css: newValue
    });
  }
  function onChangeIconTextStyle(newValue) {
    setAttributes({
      icon_text_style: newValue
    });
  }
  function onChangeIconTextPosition(newValue) {
    setAttributes({
      icon_text_poistion: newValue
    });
  }
  function onChangeIconTextMainContainerExtraCSS(newValue) {
    setAttributes({
      icon_text_main_container_extra_css: newValue
    });
  }
  function onChangeIconTextIconContainerExtraCSS(newValue) {
    setAttributes({
      icon_text_icon_container_extra_css: newValue
    });
  }
  function onChangeIconTextTextContainerExtraCSS(newVal) {
    setAttributes({
      icon_text_text_container_extra_css: newVal
    });
  }

  //TODO - apply the inline svg in the editor
  /*
  	const imgStyle = {
  		width: icon_text_size+'px',
  		height: icon_text_size+'px'
  	};
  	
  	let inline_styles_array = icon_text_style.split(",");
  	let i = 0;
  	while (i < inline_styles_array.length) {
  		let inline_style_array = inline_styles_array[i].split(":");
  		if(inline_style_array[0] && inline_style_array[1]){
  			let inline_style_name = inline_style_array[0];
  			let inline_style_value = inline_style_array[1].replace(';','');
  			imgStyle[inline_style_name] = inline_style_value;
  		}
  		i++;
  	}
  
  	const blockPropsImg = useBlockProps( { className: icon_text_extra_css, style: imgStyle } );
  */

  let imgStyle = {
    width: '100%'
  };
  if (icon_text_size) {
    imgStyle.maxWidth = icon_text_size + 'px';
  }
  if (icon_text_style != '') {
    let imgStyleParsed = parseInlineStyle(icon_text_style);
    imgStyle = {
      ...imgStyle,
      ...imgStyleParsed
    };
  }
  const blockPropsImg = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: icon_text_extra_css,
    style: imgStyle
  });
  function onChangeBackgroundWidth(newValue) {
    setAttributes({
      icon_text_background_width: newValue
    });
  }
  function onChangeBackgroundHeight(newValue) {
    setAttributes({
      icon_text_background_height: newValue
    });
  }
  function onChangeBackgroundExtraCSS(newValue) {
    setAttributes({
      icon_text_background_extra_css: newValue
    });
  }
  function onChangeBackgroundStyle(newValue) {
    setAttributes({
      icon_text_background_style: newValue
    });
  }
  function onUpdateImage(image) {
    setAttributes({
      icon_text_background_upload: image
    });
  }
  ;
  let imgStyleBackground = {
    width: '100%',
    maxWidth: icon_text_background_width + 'px'
  };
  if (icon_text_background_style != '') {
    let imgStyleBackgroundParsed = parseInlineStyle(icon_text_background_style);
    imgStyleBackground = {
      ...imgStyleBackground,
      ...imgStyleBackgroundParsed
    };
  }
  const blockPropsBackgroundImg = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    style: imgStyleBackground
  });
  let icon_path = '';
  if (icon_text_library === 'carbon') {
    icon_path = '/wp-content/themes/' + wordpress_theme.template + '/assets/icons/carbon/node_modules/@carbon/icons/svg/32/' + icon_text_name + '.svg';
  } else if (icon_text_library === 'custom') {
    icon_path = '/wp-content/themes/' + wordpress_theme.stylesheet + '/assets/icons/custom/' + icon_text_name + '.svg';
  } else if (icon_text_library === 'bootstrap') {
    icon_path = '/wp-content/themes/' + wordpress_theme.template + '/assets/icons/carbon/node_modules/@carbon/icons/svg/32/' + icon_text_name + '.svg';
  }
  function formatStringToCamelCase(str) {
    const splitted = str.split("-");
    if (splitted.length === 1) return splitted[0];
    return splitted[0] + splitted.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join("");
  }
  ;
  function parseInlineStyle(str) {
    const style = {};
    str.split(";").forEach(el => {
      const [property, value] = el.split(":");
      if (!property) return;
      if (!value) return;
      const formattedProperty = formatStringToCamelCase(property.trim());
      style[formattedProperty] = value.trim();
    });
    return style;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'custom'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Type",
    value: icon_text_type,
    options: [{
      label: 'Regular',
      value: 'regular'
    }, {
      label: 'Expandable',
      value: 'expandable'
    }],
    onChange: onChangeIconTextType
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Section ID",
    value: icon_text_id,
    onChange: onChangeIconTextID
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Main container extra css",
    value: icon_text_main_container_extra_css,
    onChange: onChangeIconTextMainContainerExtraCSS
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Text container extra css",
    value: icon_text_text_container_extra_css,
    onChange: onChangeIconTextTextContainerExtraCSS
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon settings', 'custom'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon name",
    value: icon_text_name,
    onChange: onChangeIconTextName
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Icon library",
    value: icon_text_library,
    options: [{
      label: 'Carbon',
      value: 'carbon'
    }, {
      label: 'Bootstrap',
      value: 'bootstrap'
    }, {
      label: 'Custom',
      value: 'custom'
    }],
    onChange: onChangeIconTextLibrary
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon size",
    value: icon_text_size,
    onChange: onChangeIconTextSize
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon extra css",
    value: icon_text_extra_css,
    onChange: onChangeIconTextExtraCSS
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon inline style",
    value: icon_text_style,
    onChange: onChangeIconTextStyle
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Icon poition",
    value: icon_text_poistion,
    options: [{
      label: 'Left Top',
      value: 'left-top'
    }, {
      label: 'Right Top',
      value: 'right-top'
    }, {
      label: 'Left Center',
      value: 'left-center'
    }, {
      label: 'Right Center',
      value: 'right-center'
    }, {
      label: 'Left Bottom',
      value: 'left-bottom'
    }, {
      label: 'Right Bottom',
      value: 'right-bottom'
    }],
    onChange: onChangeIconTextPosition
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon container extra css",
    value: icon_text_icon_container_extra_css,
    onChange: onChangeIconTextIconContainerExtraCSS
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background settings', 'custom'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onUpdateImage,
    allowedTypes: ["image"],
    multiple: false,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "components-base-control"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "components-base-control"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      onClick: open,
      class: "components-button editor-post-publish-button editor-post-publish-button__button is-primary"
    }, icon_text_background_upload.id === null ? 'Upload' : 'Select new file'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, icon_text_background_upload.name === null ? '' : '(' + icon_text_background_upload.name + ')'))))
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "SVG width",
    value: icon_text_background_width,
    onChange: onChangeBackgroundWidth
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "SVG height",
    value: icon_text_background_height,
    onChange: onChangeBackgroundHeight
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "SVG extra css",
    value: icon_text_background_extra_css,
    onChange: onChangeBackgroundExtraCSS
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "SVG inline style",
    value: icon_text_background_style,
    onChange: onChangeBackgroundStyle,
    help: "By default the system will add width:100%; max-width:{width}px;"
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: icon_text_main_container_extra_css
    })
  }, icon_text_background_upload.url && icon_text_background_upload.url.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ...blockPropsBackgroundImg,
    class: icon_text_background_extra_css,
    src: icon_text_background_upload.url,
    width: icon_text_background_width,
    height: icon_text_background_height
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    ...blockPropsImg,
    class: icon_text_extra_css,
    src: icon_path
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null)));
}

/***/ }),

/***/ "./src/block-library/helper-icon-text/index.js":
/*!*****************************************************!*\
  !*** ./src/block-library/helper-icon-text/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/helper-icon-text/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-library/helper-icon-text/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block-library/helper-icon-text/save.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./src/block-library/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('custom-block/helper-icon-text', {
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__.helperIconText,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/block-library/helper-icon-text/save.js":
/*!****************************************************!*\
  !*** ./src/block-library/helper-icon-text/save.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  const {
    icon_text_name,
    icon_text_library,
    icon_text_size,
    icon_text_extra_css,
    icon_text_style,
    icon_text_poistion,
    icon_text_main_container_extra_css,
    icon_text_icon_container_extra_css,
    icon_text_text_container_extra_css,
    icon_text_id,
    icon_text_type,
    icon_text_background_upload,
    icon_text_background_width,
    icon_text_background_height,
    icon_text_background_extra_css,
    icon_text_background_style
  } = attributes;
  return (() => {
    if (icon_text_poistion === 'right-center') {
      if (icon_text_type === 'expandable') {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-center card-expandable collapsed ' + icon_text_main_container_extra_css,
          "data-bs-toggle": 'collapse',
          href: '#card_expandable_' + icon_text_id,
          role: 'button',
          "aria-expanded": 'false',
          "aria-controls": 'card_expandable'
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'))));
      } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-center ' + icon_text_main_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'))));
      }
    } else if (icon_text_poistion === 'left-center') {
      if (icon_text_type === 'expandable') {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-center card-expandable collapsed ' + icon_text_main_container_extra_css,
          "data-bs-toggle": 'collapse',
          href: '#card_expandable_' + icon_text_id,
          role: 'button',
          "aria-expanded": 'false',
          "aria-controls": 'card_expandable'
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
      } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-center ' + icon_text_main_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
      }
    } else if (icon_text_poistion === 'right-bottom') {
      if (icon_text_type === 'expandable') {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-end card-expandable collapsed ' + icon_text_main_container_extra_css,
          "data-bs-toggle": 'collapse',
          href: '#card_expandable_' + icon_text_id,
          role: 'button',
          "aria-expanded": 'false',
          "aria-controls": 'card_expandable'
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'))));
      } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-end ' + icon_text_main_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'))));
      }
    } else if (icon_text_poistion === 'left-bottom') {
      if (icon_text_type === 'expandable') {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-end card-expandable collapsed ' + icon_text_main_container_extra_css,
          "data-bs-toggle": 'collapse',
          href: '#card_expandable_' + icon_text_id,
          role: 'button',
          "aria-expanded": 'false',
          "aria-controls": 'card_expandable'
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
      } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-end ' + icon_text_main_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
      }
    } else if (icon_text_poistion === 'right-top') {
      if (icon_text_type === 'expandable') {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-start card-expandable collapsed ' + icon_text_main_container_extra_css,
          "data-bs-toggle": 'collapse',
          href: '#card_expandable_' + icon_text_id,
          role: 'button',
          "aria-expanded": 'false',
          "aria-controls": 'card_expandable'
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'))));
      } else {
        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon d-flex align-items-start ' + icon_text_main_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-content ' + icon_text_text_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
          class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'))));
      }
    } else {
      if (icon_text_type === 'expandable') {
        if (icon_text_background_upload === '') {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon d-flex align-items-start card-expandable collapsed ' + icon_text_main_container_extra_css,
            "data-bs-toggle": 'collapse',
            href: '#card_expandable_' + icon_text_id,
            role: 'button',
            "aria-expanded": 'false',
            "aria-controls": 'card_expandable'
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-content ' + icon_text_text_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
        } else {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon d-flex align-items-start card-expandable collapsed ' + icon_text_main_container_extra_css,
            "data-bs-toggle": 'collapse',
            href: '#card_expandable_' + icon_text_id,
            role: 'button',
            "aria-expanded": 'false',
            "aria-controls": 'card_expandable'
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-content ' + icon_text_text_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
        }
      } else {
        if (icon_text_background_upload === '') {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon d-flex align-items-start ' + icon_text_main_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-content ' + icon_text_text_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
        } else {
          return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon d-flex ' + icon_text_main_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-icon d-flex align-middle ' + icon_text_icon_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[svg_icon name="' + icon_text_name + '" library="' + icon_text_library + '" width="' + icon_text_size + '" height="' + icon_text_size + '" class="' + icon_text_extra_css + '" style="' + icon_text_style + '" /]'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.RawHTML, null, '[get_asset name="' + icon_text_background_upload.name + '" type="svg" width="' + icon_text_background_width + '" height="' + icon_text_background_height + '" class="' + icon_text_background_extra_css + '" style="' + icon_text_background_style + '" url="' + icon_text_background_upload.url + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
            class: 'text-with-icon-content ' + icon_text_text_container_extra_css
          }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null))));
        }
      }
    }
  })();
}

/***/ }),

/***/ "./src/block-library/icons.js":
/*!************************************!*\
  !*** ./src/block-library/icons.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gridColumn: () => (/* binding */ gridColumn),
/* harmony export */   gridContainer: () => (/* binding */ gridContainer),
/* harmony export */   gridRow: () => (/* binding */ gridRow),
/* harmony export */   gridSection: () => (/* binding */ gridSection),
/* harmony export */   helperAccordion: () => (/* binding */ helperAccordion),
/* harmony export */   helperAccordionItem: () => (/* binding */ helperAccordionItem),
/* harmony export */   helperBackgroundImage: () => (/* binding */ helperBackgroundImage),
/* harmony export */   helperButton: () => (/* binding */ helperButton),
/* harmony export */   helperCard: () => (/* binding */ helperCard),
/* harmony export */   helperCardFlip: () => (/* binding */ helperCardFlip),
/* harmony export */   helperCardMain: () => (/* binding */ helperCardMain),
/* harmony export */   helperCardMedia: () => (/* binding */ helperCardMedia),
/* harmony export */   helperFAQ: () => (/* binding */ helperFAQ),
/* harmony export */   helperFAQItem: () => (/* binding */ helperFAQItem),
/* harmony export */   helperIcon: () => (/* binding */ helperIcon),
/* harmony export */   helperIconText: () => (/* binding */ helperIconText),
/* harmony export */   helperIconTextExpandable: () => (/* binding */ helperIconTextExpandable),
/* harmony export */   helperNavigation: () => (/* binding */ helperNavigation),
/* harmony export */   helperReadMore: () => (/* binding */ helperReadMore),
/* harmony export */   helperSVG: () => (/* binding */ helperSVG),
/* harmony export */   helperSlider: () => (/* binding */ helperSlider),
/* harmony export */   helperSliderAvatar: () => (/* binding */ helperSliderAvatar),
/* harmony export */   helperSliderItem: () => (/* binding */ helperSliderItem),
/* harmony export */   helperSliderNavigationArrows: () => (/* binding */ helperSliderNavigationArrows),
/* harmony export */   helperSliderNavigationDots: () => (/* binding */ helperSliderNavigationDots),
/* harmony export */   helperSliderNavigationPagination: () => (/* binding */ helperSliderNavigationPagination),
/* harmony export */   helperSpacer: () => (/* binding */ helperSpacer),
/* harmony export */   helperTable: () => (/* binding */ helperTable),
/* harmony export */   helperTabs: () => (/* binding */ helperTabs),
/* harmony export */   helperTabsItem: () => (/* binding */ helperTabsItem)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);

/**
 * Icons backport from @wordpress/icons package to not have a dependency to @wordpress/primitives.
 * Source: https://github.com/WordPress/gutenberg/tree/trunk/packages/icons/src/library
 *
 * Vertical alignment icons backport from Gutenberg.
 * Source: https://github.com/WordPress/gutenberg/blob/trunk/packages/block-editor/src/components/block-vertical-alignment-control/icons.js
 */

const gridSection = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 2h-5v2h5v24h-5v2h5a2.006 2.006 0 0 0 2-2V4a2.006 2.006 0 0 0-2-2ZM14 17H8a.945.945 0 0 0-1 1v6a.945.945 0 0 0 1 1h6a.945.945 0 0 0 1-1v-6a.945.945 0 0 0-1-1Zm-1 6H9v-4h4Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M25 24v-6a.945.945 0 0 0-1-1h-6a.945.945 0 0 0-1 1v6a.945.945 0 0 0 1 1h6a1.002 1.002 0 0 0 1-1Zm-2-1h-4v-4h4ZM14 7H8a.945.945 0 0 0-1 1v6a.945.945 0 0 0 1 1h6a.945.945 0 0 0 1-1V8a.945.945 0 0 0-1-1Zm-1 6H9V9h4ZM18 15h6a.945.945 0 0 0 1-1V8a.945.945 0 0 0-1-1h-6a.945.945 0 0 0-1 1v6a1.002 1.002 0 0 0 1 1Zm1-6h4v4h-4Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 4h5V2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h5v-2H4Z"
}));
const gridContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM6 26V6h20v20Z"
}));
const gridRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 24h24v2H4z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26 18H6v-4h20v4m2 0v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 6h24v2H4z"
}));
const gridColumn = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M24 4h2v24h-2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 6v20h-4V6h4m0-2h-4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6 4h2v24H6z"
}));
const helperButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M9 15h14v2H9z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 22H4a2.002 2.002 0 0 1-2-2v-8a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v8a2.002 2.002 0 0 1-2 2ZM4 12v8h24v-8Z"
}));
const helperCard = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "bi bi-card-heading",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z"
}));
const helperCardMain = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "bi bi-credit-card-2-front",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
}));
const helperCardFlip = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "bi bi-credit-card-2-front-fill",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"
}));
const helperCardMedia = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor",
  class: "bi bi-postcard",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "fill-rule": "evenodd",
  d: "M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"
}));
const helperIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23 23h-.132l.964-1.445A1 1 0 0 0 24 21v-9c0-9.885-7.92-10-8-10a1 1 0 0 0-1 1v2h-1a.996.996 0 0 0-.581.186l-7 5a1 1 0 0 0-.368 1.13l1 3a.998.998 0 0 0 1.09.674l4.87-.696-3.86 6.176a1 1 0 0 0 .017 1.085L10.132 23H10a3.003 3.003 0 0 0-3 3v4h19v-4a3.003 3.003 0 0 0-3-3Zm-7.152-9.47a1 1 0 0 0-.99-1.52l-6.174.882-.502-1.508L14.32 7h1.679a1 1 0 0 0 1-.999L17 4.129c1.501.335 4.217 1.541 4.86 5.871H19v2h3v2h-3v2h3v2h-3v2h3v.697L20.465 23h-7.93l-1.345-2.018ZM24 28H9v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1Z"
}));
const helperIconText = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 6h11.4v2H18z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 12h8.7v2H18z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 18h11.4v2H18z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M18 24h8.7v2H18z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  id: "_Transparent_Rectangle_",
  fill: "none",
  d: "M0 0h32v32H0z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m13.7 21 .6-1c.1-.1.1-.3.1-.4v-6.4C14.4 6.1 8.8 6 8.7 6c-.4 0-.7.3-.7.7v1.4h-.7c-.1 0-.3 0-.4.1l-5 3.6c-.3.2-.4.5-.3.8l.7 2.1c.1.3.4.5.8.5l3.5-.5-2.8 4.4c-.1.2-.1.5 0 .8l.7 1h-.1c-1.2 0-2.1 1-2.1 2.1v3h13.6v-2.9c-.1-1.1-1-2.1-2.2-2.1zm-5.1-6.7c.2-.3.1-.8-.2-1-.1-.1-.3-.1-.5-.1l-4.4.6-.4-1.1 4.4-3.1h1.2c.4 0 .7-.3.7-.7V7.6c1.1.2 3 1.1 3.5 4.2h-2v1.4H13v1.4h-2.1V16H13v1.4h-2.1v1.4H13v.5L11.9 21H6.2l-1-1.4 3.4-5.3zm5.8 10.3H3.7v-1.4c0-.4.3-.7.7-.7h9.3c.4 0 .7.3.7.7v1.4z"
}));
const helperIconTextExpandable = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 18h11v6.172l-2.586-2.586L11 23l5 5 5-5-1.414-1.414L17 24.172V18h11v-2H4v2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 6H6V6h20Z"
}));
const helperSVG = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h4v-4h-2v-2h4Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m18 9-2 13-2-13h-2l2.52 14h2.96L20 9h-2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M8 23H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  "data-name": "<Transparent Rectangle>",
  fill: "none",
  d: "M32 32H0V0h32z"
}));
const helperSpacer = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m11 10 1.41 1.41L15 8.83v14.34l-2.59-2.58L11 22l5 5 5-5-1.41-1.41L17 23.17V8.83l2.59 2.58L21 10l-5-5-5 5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 30H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v24a2.002 2.002 0 0 1-2 2ZM4 4v24h24V4Z"
}));
const helperNavigation = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 6h24v2H4z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 24h24v2H4z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 12h24v2H4z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 18h24v2H4z"
}));
const helperTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 2v4H5V5Zm-10 6h10v7H17Zm-2 7H5v-7h10ZM5 20h10v7H5Zm12 7v-7h10v7Z"
}));
const helperFAQ = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 26a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "23.5",
  r: "1.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 8h-1.5a4.49 4.49 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 2.5-2.5H17a2.5 2.5 0 0 1 0 5h-2v4.5h2V17a4.5 4.5 0 0 0 0-9Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "none",
  d: "M0 0h32v32H0z"
}));
const helperFAQItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "20.5",
  r: "1.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M17 17h-2v-4h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2v.5h-2V11c0-2.2 1.8-4 4-4h2c2.2 0 4 1.8 4 4s-1.8 4-4 4v2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m16 30-8.4-9.9c0-.1-.3-.5-.3-.5C5.8 17.7 5 15.4 5 13 5 6.9 9.9 2 16 2s11 4.9 11 11c0 2.4-.8 4.7-2.2 6.6l-.3.4L16 30zM8.8 18.4s.2.3.3.4l6.9 8.1 6.9-8.1c0-.1.3-.4.3-.4C24.4 16.8 25 15 25 13c0-5-4-9-9-9s-9 4-9 9c0 2 .6 3.8 1.8 5.4z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "none",
  d: "M0 0h32v32H0z"
}));
const helperAccordion = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 10h14a2.002 2.002 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2H12a2.002 2.002 0 0 0-2 2v1H6V2H4v23a2.002 2.002 0 0 0 2 2h4v1a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2v-4a2.002 2.002 0 0 0-2-2H12a2.002 2.002 0 0 0-2 2v1H6v-8h4v1a2.002 2.002 0 0 0 2 2h14a2.002 2.002 0 0 0 2-2v-4a2.002 2.002 0 0 0-2-2H12a2.002 2.002 0 0 0-2 2v1H6V7h4v1a2.002 2.002 0 0 0 2 2Zm0-6h14l.001 4H12Zm0 20h14l.001 4H12Zm0-10h14l.001 4H12Z"
}));
const helperAccordionItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 18h11v6.172l-2.586-2.586L11 23l5 5 5-5-1.414-1.414L17 24.172V18h11v-2H4v2zM26 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 6H6V6h20Z"
}));
const helperSlider = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.9 10c-.6-.6-1.5-1-2.4-1s-1.8.4-2.4 1l-1.4-1.4c1-1 2.4-1.6 3.8-1.6s2.9.6 3.8 1.6L23.9 10z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "24",
  cy: "5",
  r: "1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "19",
  cy: "5",
  r: "1"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 0h13c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-3.5l-1.7 3-1.8-1 2.3-4H28V2H15v10h5v2h-5c-1.1 0-2-.9-2-2V2c0-1.1.9-2 2-2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20 19v6c0 .6-.4 1-1 1h-5v2h5c1.7 0 3-1.3 3-3v-6h-2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.4 20.4c-.8 1-2.1 1.6-3.4 1.6s-2.6-.6-3.4-1.6L7 21.6C8.2 23 10 24 12 24s3.8-.9 5-2.4l-1.6-1.2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "15.5",
  cy: "17.5",
  r: "1.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "8.5",
  cy: "17.5",
  r: "1.5"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.1 26H5c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h5v-2H5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h4l2.3 4 1.7-1-2.9-5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "none",
  d: "M0 0h32v32H0z"
}));
const helperSliderItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 26h-3v-2h3V8h-3V6h3a2.002 2.002 0 0 1 2 2v16a2.003 2.003 0 0 1-2 2Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "23",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "9",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 26H4a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h3v2H4v16h3Z"
}));
const helperSliderNavigationArrows = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M148.283 146.343 38.627 256l109.656 109.657a16 16 0 1 1-22.628 22.627L4.686 267.313a16 16 0 0 1 0-22.626l120.969-120.971a16 16 0 0 1 22.628 22.627zm359.031 98.344L386.345 123.716a16 16 0 0 0-22.628 22.627L473.373 256 363.717 365.657a16 16 0 1 0 22.628 22.627l120.969-120.971a16 16 0 0 0 0-22.626z"
}));
const helperSliderNavigationDots = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "8",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "24",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "none",
  d: "M0 0h32v32H0z"
}));
const helperSliderNavigationPagination = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 9H22v2h6v4H24v2h4v4H22v2h6a2.0027 2.0027 0 002-2V11A2.0023 2.0023 0 0028 9zM20 23H12V17a2.002 2.002 0 012-2h4V11H12V9h6a2.0023 2.0023 0 012 2v4a2.0023 2.0023 0 01-2 2H14v4h6zM2.5 22.5L2.5 21.5 5.5 21.5 5.5 10.5 2.5 10.5 2.5 9.5 6.5 9.5 6.5 21.5 9.5 21.5 9.5 22.5 2.5 22.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M6,10V22H6V10M7,9H2v2H5V21H2v2h8V21H7V9Z"
}));
const helperSliderAvatar = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 8a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2Zm-6 24.377V25a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3v1.377a11.899 11.899 0 0 1-12 0Zm13.992-1.451A5.002 5.002 0 0 0 19 20h-6a5.002 5.002 0 0 0-4.992 4.926 12 12 0 1 1 15.985 0Z"
}));
const helperTabs = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 26h-3v-2h3V8h-3V6h3a2.002 2.002 0 0 1 2 2v16a2.003 2.003 0 0 1-2 2Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "23",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "9",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 26H4a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h3v2H4v16h3Z"
}));
const helperTabsItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M28 26h-3v-2h3V8h-3V6h3a2.002 2.002 0 0 1 2 2v16a2.003 2.003 0 0 1-2 2Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "23",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "16",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "9",
  cy: "16",
  r: "2"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7 26H4a2.002 2.002 0 0 1-2-2V8a2.002 2.002 0 0 1 2-2h3v2H4v16h3Z"
}));
const helperBackgroundImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 20v2h4.6L2 28.6 3.4 30l6.6-6.6V28h2v-8zM19 14c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26 4H6c-1.1 0-2 .9-2 2v10h2V6h20v15.2l-3.6-3.6c-.8-.8-2-.8-2.8 0L18 19.2 11.8 13l-1.4 1.4L14 18l2.6 2.6c.8.8 2 .8 2.8 0L21 19l5 5v2H16v2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
}));
const helperReadMore = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M4 18h11v6.172l-2.586-2.586L11 23l5 5 5-5-1.414-1.414L17 24.172V18h11v-2H4v2z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M26 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 6H6V6h20Z"
}));

/***/ }),

/***/ "./src/block-library/helper-icon-text/editor.scss":
/*!********************************************************!*\
  !*** ./src/block-library/helper-icon-text/editor.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/helper-icon-text/style.scss":
/*!*******************************************************!*\
  !*** ./src/block-library/helper-icon-text/style.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"helper-icon-text": 0,
/******/ 			"./style-helper-icon-text": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcustom_gutenberg_blocks"] = globalThis["webpackChunkcustom_gutenberg_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-helper-icon-text"], () => (__webpack_require__("./src/block-library/helper-icon-text/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=helper-icon-text.js.map