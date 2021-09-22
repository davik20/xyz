import { compact } from "lodash";
import { amountToWei } from "./swap";
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

export const getOutputAmount = async (
  web3,
  tokenSdk,
  TokenAmount,
  pair,
  Fraction,
  Rounding,
  Route,
  Trade,
  TradeType,
  value
) => {
  if (pair.length > 0 && value && value > 0) {
    if (pair.length === 1) {
      try {
        console.log("trying");

        const route = new Route(pair, tokenSdk);

        const addressInput = route.path[0].address;
        const addressOutput = route.path[1].address;
        const path = [addressInput, addressOutput];
        console.log(path);
        // execution price

        const amount = amountToWei(web3, value, String(tokenSdk.decimals));
        const tokenAmount = new TokenAmount(tokenSdk, amount);
        const trade = new Trade(route, tokenAmount, TradeType.EXACT_INPUT);
        const executionPrice = trade.executionPrice.toSignificant(6);
        let output = executionPrice * value;
        console.log(output, path, trade);
        return [output, path, trade];

        // const outputValue = new Fraction(
        //   outputAmount.numerator,
        //   outputAmount.denominator
        // );

        // const output = outputValue.toFixed(
        //   4,
        //   { groupSeparator: "" },
        //   Rounding.ROUND_HALF_UP
        // );
        // return [output, path, trade];
      } catch (error) {
        console.log("output amount error", error);
      }
    }
  }
};

export const getOutputAmount2 = async (
  web3,
  tokenSdk,
  TokenAmount,
  pair,
  type,
  Fraction,
  Rounding,
  Route,
  Trade,
  TradeType,
  value
) => {
  if (value && value > 0 && pair.length > 1) {
    try {
      const route =
        type === 0
          ? new Route([pair[0], pair[1]], tokenSdk)
          : new Route([pair[1], pair[0]], tokenSdk);

      const addressInput = route.path[0].address;
      const addressMid = route.path[1].address;
      const addressOutput = route.path[2].address;
      const path = [addressInput, addressMid, addressOutput];
      console.log(path);
      const decimals = tokenSdk?.decimals;

      // execution price
      let amount = amountToWei(web3, value, String(tokenSdk.decimals));

      const trade = new Trade(
        route,
        new TokenAmount(tokenSdk, amount),
        TradeType.EXACT_INPUT
      );
      const executionPrice = trade.executionPrice.toSignificant(6);
      let output = executionPrice * value;
      return [output, path, trade];
    } catch (error) {
      console.log(error, "alternate path");
    }
  }
};
