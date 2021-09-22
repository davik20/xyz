webpackHotUpdate("main",{

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
//# sourceMappingURL=main.ad8ee913af1d6a3b2531.hot-update.js.map