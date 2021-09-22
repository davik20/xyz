webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/swap.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/styles/swap.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hover {\n  transition: all 0.2s;\n}\n\n.hover:hover {\n  transform: scale(1.08);\n}\n\n.hover:active {\n  transform: scale(1);\n}\n\n.spin {\n  animation-name: spinner;\n  animation-duration: 0.3s;\n}\n\n@keyframes spinner {\n  to {\n    transform: rotate(180deg);\n  }\n}\n", "",{"version":3,"sources":["webpack://src/styles/swap.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,wBAAwB;AAC1B;;AAEA;EACE;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".hover {\n  transition: all 0.2s;\n}\n\n.hover:hover {\n  transform: scale(1.08);\n}\n\n.hover:active {\n  transform: scale(1);\n}\n\n.spin {\n  animation-name: spinner;\n  animation-duration: 0.3s;\n}\n\n@keyframes spinner {\n  to {\n    transform: rotate(180deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/pages/Swap.tsx":
/*!****************************!*\
  !*** ./src/pages/Swap.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _context_UseConnection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/UseConnection */ "./src/context/UseConnection.tsx");
/* harmony import */ var _context_UseSwap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UseSwap */ "./src/context/UseSwap.tsx");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Settings */ "./node_modules/@material-ui/icons/Settings.js");
/* harmony import */ var _material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Autorenew */ "./node_modules/@material-ui/icons/Autorenew.js");
/* harmony import */ var _material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "./node_modules/@material-ui/icons/ArrowDropDown.js");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_SwapHorizontalCircleOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SwapHorizontalCircleOutlined */ "./node_modules/@material-ui/icons/SwapHorizontalCircleOutlined.js");
/* harmony import */ var _material_ui_icons_SwapHorizontalCircleOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SwapHorizontalCircleOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_swap_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/swap.css */ "./src/styles/swap.css");
/* harmony import */ var _styles_swap_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_swap_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_getOutputAmount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/getOutputAmount */ "./src/utils/getOutputAmount.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);

var _jsxFileName = "/Users/onyejivictor/Documents/code/multichainswap/src/pages/Swap.tsx",
    _s = __webpack_require__.$Refresh$.signature();













function Swap() {
  _s();

  const {
    web3
  } = Object(_context_UseConnection__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    pair,
    token0Metadata,
    token1Metadata,
    tokens,
    SDK,
    token0Sdk,
    token1Sdk
  } = Object(_context_UseSwap__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [tokenInput0, setTokenInput0] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [tokenInput1, setTokenInput1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const [isRotated, setIsRotated] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleInput = (e, type) => {
    const value = e.target.value;

    if (type === 0) {
      setTokenInput0(value); // getOutput amout and return

      const result = Object(_utils_getOutputAmount__WEBPACK_IMPORTED_MODULE_9__["getOutputAmount"])(web3, token0Sdk, SDK.TokenAmount, pair, SDK.Fraction, undefined, value);
    } else if (type === 1) {
      setTokenInput1(value); // get output amount and return
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SwapContainer, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SwapContent, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SwapBox, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SwapHeader, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("h3", {
            children: "Swap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Tool, {
              className: "hover",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_Autorenew__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Tool, {
              className: "hover",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_Settings__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Connect, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                children: "Connect"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default.a, {
                className: "connect"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SwapBody, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(InputContainer0, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(TokenInput0, {
              value: tokenInput0,
              type: "number",
              onChange: e => handleInput(e, 0),
              placeholder: "0.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(Max, {
              className: "hover",
              children: " Max "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(TokenSelect0, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                src: token0Metadata && token0Metadata.img,
                alt: "token logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                children: token0Metadata && token0Metadata.symbol
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 87,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default.a, {
                className: "icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_SwapHorizontalCircleOutlined__WEBPACK_IMPORTED_MODULE_7___default.a, {
            className: "swap-icon",
            style: {
              transition: " all .3s"
            },
            onClick: e => {
              if (!isRotated) {
                e.target.style.transform = "rotate(180deg)";
                setIsRotated(true);
              }

              if (isRotated) {
                e.target.style.transform = "rotate(-180deg)";
                setIsRotated(false);
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(InputContainer1, {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(TokenInput1, {
              value: tokenInput1,
              type: "number",
              onChange: e => handleInput(e, 1),
              placeholder: "0.00"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(TokenSelect1, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("img", {
                src: token1Metadata && token1Metadata.img,
                alt: "token logo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("p", {
                children: token1Metadata && token1Metadata.symbol
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default.a, {
                className: "icon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(SwapButton, {
            children: "Swap"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(Swap, "ClNKeLdHjE76oY26PIUFqmM1L+Y=", false, function () {
  return [_context_UseConnection__WEBPACK_IMPORTED_MODULE_2__["default"], _context_UseSwap__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Swap;
const SwapContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  height: 100vh;
  width: 100%;
`;
_c2 = SwapContainer;
const SwapContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
_c3 = SwapContent;
const SwapBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 8rem;
  min-height: 20rem;
  width: 30rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  background-color: var(--color-brown-2);
  box-shadow: 5px 5px 10px rgba(5, 1, 1, 0.1);
`;
_c4 = SwapBox;
const SwapHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display: flex;
  align-items: center;
  & > h3 {
    color: rgba(255, 255, 255, 0.8);
  }
  & > div {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;
_c5 = SwapHeader;
const Tool = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-color: grey;
  margin-right: 1rem;
  padding: 0.1rem 0.2rem;
  border-radius: 2px;
  cursor: pointer;
`;
_c6 = Tool;
const Connect = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  padding: 0.2rem 0.4rem;
  background-color: var(--color-pink);
  cursor: pointer;
  display: flex;
  border-radius: 2px;
  align-items: center;
  & > p {
    font-size: 1rem;
  }
  & > .connect {
    color: var(--color-white);
    cursor: pointer;
  }
`;
_c7 = Connect;
const SwapBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > .swap-icon {
    color: rgba(255, 255, 255, 0.3);
    font-size: 2rem;
    cursor: pointer;
  }
`;
_c8 = SwapBody;
const InputContainer0 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  width: 100%;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  margin-bottom: 1rem;
`;
_c9 = InputContainer0;
const TokenInput0 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input`
  width: 50%;
  padding-right: 10%;
  outline: none;
  border: none;
  color: white;
  background-color: transparent;
  font-size: 1rem;
`;
_c10 = TokenInput0;
const Max = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button`
  border: none;
  outline: none;
  padding: 1.2px;
  border-radius: 2px;
  cursor: pointer;
`;
_c11 = Max;
const TokenSelect0 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  background-color: rgba(255, 255, 255, 0.2);
  margin-left: 20%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0 0.5rem 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  width: 7rem;
  > img {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }

  > p {
    margin-left: 0.5rem;
    font-size: 0.8rem;
  }

  > .icon {
    margin-left: auto;
  }
`;
_c12 = TokenSelect0;
const InputContainer1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(InputContainer0)`
  margin-top: 1rem;
`;
_c13 = InputContainer1;
const TokenInput1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(TokenInput0)``;
_c14 = TokenInput1;
const TokenSelect1 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(TokenSelect0)`
  margin-left: auto;
`;
_c15 = TokenSelect1;
const SwapButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  padding: 1rem;
  font-size: 1.2rem;
  justify-content: center;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  border-top: 1px solid rgba(0, 0, 0, 0.01);
`;
_c16 = SwapButton;
/* harmony default export */ __webpack_exports__["default"] = (Swap);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;

__webpack_require__.$Refresh$.register(_c, "Swap");
__webpack_require__.$Refresh$.register(_c2, "SwapContainer");
__webpack_require__.$Refresh$.register(_c3, "SwapContent");
__webpack_require__.$Refresh$.register(_c4, "SwapBox");
__webpack_require__.$Refresh$.register(_c5, "SwapHeader");
__webpack_require__.$Refresh$.register(_c6, "Tool");
__webpack_require__.$Refresh$.register(_c7, "Connect");
__webpack_require__.$Refresh$.register(_c8, "SwapBody");
__webpack_require__.$Refresh$.register(_c9, "InputContainer0");
__webpack_require__.$Refresh$.register(_c10, "TokenInput0");
__webpack_require__.$Refresh$.register(_c11, "Max");
__webpack_require__.$Refresh$.register(_c12, "TokenSelect0");
__webpack_require__.$Refresh$.register(_c13, "InputContainer1");
__webpack_require__.$Refresh$.register(_c14, "TokenInput1");
__webpack_require__.$Refresh$.register(_c15, "TokenSelect1");
__webpack_require__.$Refresh$.register(_c16, "SwapButton");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/styles/swap.css":
/*!*****************************!*\
  !*** ./src/styles/swap.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./swap.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/swap.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./swap.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/swap.css",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./swap.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles/swap.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils/getOutputAmount.js":
/*!**************************************!*\
  !*** ./src/utils/getOutputAmount.js ***!
  \**************************************/
/*! exports provided: getOutputAmount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutputAmount", function() { return getOutputAmount; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _swap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./swap */ "./src/utils/swap.ts");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


 // import { amountToWei } from "./utils";
// export const getOutputAmountAndSetToState = async (
//   token,
//   pair,
//   route,
//   value,
//   setOutputValue,\
//   inputValueLocation
// ) => {
//   try {
//     if (token && pair && value) {
//       if (!isNaN(value)) {
//         let route;
//         let path;
//         let addressInput;
//         let addressOutput;
//         let addressMid;
//         if (inputValueLocation == "0") {
//           if (pair.length == 1) {
//             route = new Route([...pair], token);
//             addressInput = route.path[0].address;
//             addressOutput = route.path[1].address;
//             path = [addressInput, addressOutput];
//           } else {
//             route = new Route([pair[0], pair[1]], token);
//             addressInput = route.path[0].address;
//             addressMid = route.path[1].address;
//             addressOutput = route.path[2].address;
//             path = [addressInput, addressMid, addressOutput];
//           }
//         }
//         if (inputValueLocation == "1") {
//           if (pair.length == 1) {
//             route = new Route([...pair], token);
//             addressInput = route.path[0].address;
//             addressOutput = route.path[1].address;
//             path = [addressInput, addressOutput];
//           } else {
//             route = new Route([pair[1], pair[0]], token);
//             addressInput = route.path[0].address;
//             addressMid = route.path[1].address;
//             addressOutput = route.path[2].address;
//             path = [addressInput, addressMid, addressOutput];
//           }
//         }
//         const decimals = token?.decimals;
//         // execution price
//         let amount = 10 ** decimals * Number(value);
//         const trade = new Trade(
//           route,
//           new TokenAmount(token, amount),
//           TradeType.EXACT_INPUT
//         );
//         const executionPrice = trade.executionPrice.toSignificant(6);
//         let output = executionPrice * value;
//         output = parseFloat(output);
//         // console.log(output)
//         // setOutputValue(output)
//         // construct trade properties
//         return [output, path, trade];
//       }
//     } else {
//       setOutputValue(0);
//       return [];
//     }
//   } catch (error) {
//     return [];
//     console.log(error);
//   }
// };
// export const getOutputAmount = async (token, pair, route, value) => {
//   try {
//     if (token && pair) {
//       if (!isNaN(value)) {
//         const decimals = token?.decimals;
//         let amount = 10 ** decimals * Number(value);
//         let amountBigInt = amount;
//         const tokenAmount = new TokenAmount(token, amountBigInt);
//         const outputAmount = await pair.getOutputAmount(tokenAmount);
//         const fraction = new Fraction(
//           outputAmount[0].numerator,
//           outputAmount[0].denominator
//         );
//         const output = fraction.toSignificant(6);
//         return output;
//       }
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const getOutputAmount = async (web3, tokenSdk, TokenAmount, pair, Fraction, route, value) => {
  const amount = Object(_swap__WEBPACK_IMPORTED_MODULE_1__["amountToWei"])(web3, value, String(tokenSdk.decimals));
  const tokenAmount = new TokenAmount(tokenSdk, amount);
  const [outputAmount, newPair] = pair.getOutputAmount(tokenAmount);
};

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.bbfc42731bca583de1cf.hot-update.js.map