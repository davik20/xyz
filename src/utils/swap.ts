export const mapHexToNumber: any = {
  "0x1": 1, // ethereum mainnet
  "0x3": 3,
  "0x4": 4,
  "0xa86a": 43114, // Pangolin mainnet
  "": 43113, // Pangolin testnet
};

export const fetchTokenData = async (
  Fetcher: any,
  chainId: any,
  address: string,
  provider: any,
  symbol: string,
  name: string
) => {
  try {
    console.log(chainId, address, symbol);

    const token = await Fetcher.fetchTokenData(
      mapHexToNumber[chainId],
      address,
      provider,
      symbol,
      name
    );
    return token;
  } catch (error) {
    console.log(error);
  }
};

const etherMap: any = {
  18: "Ether",
  15: "milliether",
  12: "microether",
  9: "Gwei",
  6: "mwei",
  3: "kwei",
  1: "wei",
};

export const amountToWei = (web3: any, amount: String, decimals: String) => {
  return web3.utils.toWei(String(amount), etherMap[String(decimals)]);
};
