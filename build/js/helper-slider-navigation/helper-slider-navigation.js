/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-library/helper-slider-navigation/edit.js":
/*!************************************************************!*\
  !*** ./src/block-library/helper-slider-navigation/edit.js ***!
  \************************************************************/
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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./src/block-library/icons.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/helper-slider-navigation/editor.scss");






function edit({
  attributes,
  setAttributes
}) {
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
    slider_icon_container_extra_css_next
  } = attributes;
  function onChangeSliderDotsExtraCSS(newValue) {
    setAttributes({
      slider_navigation_extra_css: newValue
    });
  }
  function onChangeRelationID(newValue) {
    setAttributes({
      slider_relation_id: newValue
    });
  }
  function onChangeNavigationType(newValue) {
    setAttributes({
      slider_navigation_type: newValue
    });
  }
  function onChangeIconNamePrev(newValue) {
    setAttributes({
      slider_icon_name_prev: newValue
    });
  }
  function onChangeIconNameNext(newValue) {
    setAttributes({
      slider_icon_name_next: newValue
    });
  }
  function onChangeIconLibrary(newValue) {
    setAttributes({
      slider_icon_library: newValue
    });
  }
  function onChangeIconSizeWidth(newValue) {
    setAttributes({
      slider_icon_size_width: newValue
    });
  }
  function onChangeIconSizeHeight(newValue) {
    setAttributes({
      slider_icon_size_height: newValue
    });
  }
  function onChangeIconStyle(newValue) {
    setAttributes({
      slider_icon_style: newValue
    });
  }
  function onChangeIconCSS(newValue) {
    setAttributes({
      slider_icon_css: newValue
    });
  }
  function onChangeIconContainerCSSPrev(newValue) {
    setAttributes({
      slider_icon_container_extra_css_prev: newValue
    });
  }
  function onChangeIconContainerCSSNext(newValue) {
    setAttributes({
      slider_icon_container_extra_css_next: newValue
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Settings', 'custom')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Type",
    value: slider_navigation_type,
    options: [{
      label: 'Pagination',
      value: 'pagination'
    }, {
      label: 'Arrows',
      value: 'arrows'
    }, {
      label: 'Dots',
      value: 'dots'
    }],
    onChange: onChangeNavigationType
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Related slider #ID",
    value: slider_relation_id,
    onChange: onChangeRelationID
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "CSS Classes",
    value: slider_navigation_extra_css,
    onChange: onChangeSliderDotsExtraCSS
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon', 'custom'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon name - Previous",
    value: slider_icon_name_prev,
    onChange: onChangeIconNamePrev
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon name - Next",
    value: slider_icon_name_next,
    onChange: onChangeIconNameNext
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Icon library",
    value: slider_icon_library,
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
    onChange: onChangeIconLibrary
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon width",
    value: slider_icon_size_width,
    onChange: onChangeIconSizeWidth
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon height",
    value: slider_icon_size_height,
    onChange: onChangeIconSizeHeight
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon inline style",
    value: slider_icon_style,
    onChange: onChangeIconStyle
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon css class",
    value: slider_icon_css,
    onChange: onChangeIconCSS
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon container extra css - Prev",
    value: slider_icon_container_extra_css_prev,
    onChange: onChangeIconContainerCSSPrev
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Icon container extra css - Next",
    value: slider_icon_container_extra_css_next,
    onChange: onChangeIconContainerCSSNext
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, slider_navigation_type == 'dots' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _icons__WEBPACK_IMPORTED_MODULE_4__.helperSliderNavigationDots), slider_navigation_type == 'arrows' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _icons__WEBPACK_IMPORTED_MODULE_4__.helperSliderNavigationArrows), slider_navigation_type == 'pagination' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, _icons__WEBPACK_IMPORTED_MODULE_4__.helperSliderNavigationPagination)));
}

/***/ }),

/***/ "./src/block-library/helper-slider-navigation/index.js":
/*!*************************************************************!*\
  !*** ./src/block-library/helper-slider-navigation/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/block-library/helper-slider-navigation/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/block-library/helper-slider-navigation/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/block-library/helper-slider-navigation/save.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons */ "./src/block-library/icons.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('custom-block/helper-slider-navigation', {
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__.helperSliderNavigationArrows,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/block-library/helper-slider-navigation/save.js":
/*!************************************************************!*\
  !*** ./src/block-library/helper-slider-navigation/save.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    slider_navigation_extra_css,
    slider_relation_id,
    slider_item_total,
    slider_navigation_type,
    slider_icon_name_prev,
    slider_icon_name_next,
    slider_icon_library,
    slider_icon_size_width,
    slider_icon_size_height,
    slider_icon_style,
    slider_icon_css,
    slider_icon_container_extra_css_prev,
    slider_icon_container_extra_css_next
  } = attributes;
  return (() => {
    if (slider_navigation_type === 'pagination') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        id: slider_relation_id + '-pagination',
        class: 'slider-external-pagination ' + slider_navigation_extra_css
      }));
    } else if (slider_navigation_type === 'dots') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        id: slider_relation_id + '-dots',
        class: 'slider-external-dots ' + slider_navigation_extra_css
      }));
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        id: slider_relation_id + '-arrows',
        class: 'slider-external-arrows ' + slider_navigation_extra_css
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: 'slider-external-arrow-prev slick-prev ' + slider_icon_container_extra_css_prev
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, null, '[svg_icon name="' + slider_icon_name_prev + '" library="' + slider_icon_library + '" width="' + slider_icon_size_width + '" height="' + slider_icon_size_height + '" class="' + slider_icon_css + '" style="' + slider_icon_style + '" /]')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        class: 'slider-external-arrow-next slick-next ' + slider_icon_container_extra_css_next
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.RawHTML, null, '[svg_icon name="' + slider_icon_name_next + '" library="' + slider_icon_library + '" width="' + slider_icon_size_width + '" height="' + slider_icon_size_height + '" class="' + slider_icon_css + '" style="' + slider_icon_style + '" /]'))));
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

/***/ "./src/block-library/helper-slider-navigation/editor.scss":
/*!****************************************************************!*\
  !*** ./src/block-library/helper-slider-navigation/editor.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/block-library/helper-slider-navigation/style.scss":
/*!***************************************************************!*\
  !*** ./src/block-library/helper-slider-navigation/style.scss ***!
  \***************************************************************/
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
/******/ 			"helper-slider-navigation": 0,
/******/ 			"./style-helper-slider-navigation": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-helper-slider-navigation"], () => (__webpack_require__("./src/block-library/helper-slider-navigation/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=helper-slider-navigation.js.map