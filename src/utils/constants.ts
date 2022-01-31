const addresses: any = {
  cuminu: {
    "0x1": "0xd6327ce1fb9d6020e8c2c0e124a1ec23dcab7536",
    "0x3": "0xad6d458402f60fd3bd25163575031acdce07538d",
    "0x4": "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
  },
  ether: {
    "0x1": "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    "0x3": "0xc778417e063141139fce010982780140aa0cd5ab",
    "0x4": "0xc778417e063141139fce010982780140aa0cd5ab",
  },
  usdc: {
    "0x1": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "0x3": "0x07865c6E87B9F70255377e024ace6630C1Eaa37F",
    "0x4": "0xeb8f08a975ab53e34d8a0330e0d34de942c95926",
    "0xa86a": "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
    "137": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
  },
  dai: {
    "0x1": "0x6b175474e89094c44da98b954eedeac495271d0f",
    "0x3": "0xad6d458402f60fd3bd25163575031acdce07538d",
    "0x4": "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
  },
  usdt: {
    "0x1": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "0x3": "0x516de3a7a567d81737e3a46ec4ff9cfd1fcb0136",
    "0x4": "0x3b00ef435fa4fcff5c209a37d1f3dcff37c705ad",
    "0xa86a": "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
    "137": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
  },
  avax: {
    "0xa86a": "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
  },
  matic: {},
};

const images: any = {
  ether:
    "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/WETH/logo.png",
  avax:
    "https://app.pangolin.exchange/static/media/avalanche_token_round.3e178e42.png",
  usdt:
    "https://raw.githubusercontent.com/ava-labs/avalanche-bridge-resources/main/tokens/USDT/logo.png",
  usdc:
    "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
};

export const getRouter: any = (chainId: any, dex: any) => {};

const Tokens: any = (chainId: any) => {
  const all: any = {
    "137": [
      // matic
      {
        name: "USD Coin",
        symbol: "USDC.E",
        decimals: "6",
        img: images["usdc"],
        address: addresses["usdc"][chainId],
      },
      {
        name: "USD Tether",
        symbol: "USDT",
        decimals: "6",
        img: images["usdt"],
        address: addresses["usdt"][chainId],
      },
    ],
    "0xa86a": [
      // avalanche
      {
        name: "AVAX",
        symbol: "AVAX",
        decimals: "18",
        img: images["avax"],
        address: addresses["avax"][chainId],
      },

      {
        name: "USD Coin",
        symbol: "USDC.E",
        decimals: "6",
        img: images["usdc"],
        address: addresses["usdc"][chainId],
      },
      {
        name: "USD Tether",
        symbol: "USDT",
        decimals: "6",
        img: images["usdt"],
        address: addresses["usdt"][chainId],
      },
    ],
    "0x1": [
      {
        name: "USD Tether",
        symbol: "USDT",
        decimals: 6,
        img: images["usdt"],
        address: addresses["usdt"][chainId],
      },
      {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        img: images["ether"],
        address: addresses["ether"][chainId],
      },

      {
        name: "Cum Inu",
        symbol: "CUMINU",
        decimals: 18,
        img:
          "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xd6327ce1fb9D6020E8C2c0E124A1eC23DCAb7536/logo.png",
        address: addresses["cuminu"][chainId],
      },

      {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: addresses["usdc"][chainId],

        img:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      },

      {
        name: "Dai Stable coin",
        symbol: "DAI",
        decimals: 18,
        address: addresses[chainId],
        img: "https://gemini.com/images/currencies/icons/default/dai.svg",
      },
    ],
    "0x4": [
      {
        name: "USD Tether",
        symbol: "USDT",
        decimals: 6,
        img: images["usdt"],
        address: addresses["usdt"][chainId],
      },
      {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
        img: images["ether"],
        address: addresses["ether"][chainId],
      },
      {
        name: "Cum Inu",
        symbol: "CUMINU",
        decimals: 18,
        img:
          "https://raw.githubusercontent.com/uniswap/assets/master/blockchains/ethereum/assets/0xd6327ce1fb9D6020E8C2c0E124A1eC23DCAb7536/logo.png",
        address: addresses["cuminu"][chainId],
      },

      {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: addresses["usdc"][chainId],

        img:
          "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
      },

      {
        name: "Dai Stable coin",
        symbol: "DAI",
        decimals: 18,
        address: addresses[chainId],
        img: "https://gemini.com/images/currencies/icons/default/dai.svg",
      },
    ],
  };
  console.log(all[chainId]);
  return all[chainId];
};

export const getTokens = (chainId: any) => {
  console.log("getting new tokens based on chain id");
  if (chainId) {
    console.log(chainId);
    try {
      const tokens = Tokens(chainId);
      if (!tokens) {
        throw "Chain Id not present";
      }
      console.log(tokens);
      return tokens;
    } catch (error) {
      console.log(error);
      return ["davi"];
    }
  } else {
    return [""];
  }
};

export const dexLogos: any = {
  pangolin: "https://pangolin.exchange/logo.svg",
  "trader Joe": "https://www.traderjoexyz.com/static/media/logo.bc60f78d.png",
  elk: "https://app.elk.finance/static/media/icon.87da5a76.svg",
  uniswap:
    "https://cloudflare-ipfs.com/ipfs/QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg/",
};

export const ROUTER_ADDRESS = "0x7a250d5630b4cf539739df2c5dacb4c659f2488d";

export const CA_ADDRESS = "0xA8F54c8A9E086544Ef7D40C5A7111f4E7eF179be";
// export const CA_ADDRESS = "0xb2dD65933B487c2C68DDCe90c369A19f72482361";
