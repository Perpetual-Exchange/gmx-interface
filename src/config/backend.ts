import { ARBITRUM_TESTNET, MAINNET, AVALANCHE_FUJI, ROLLEX_TESTNET } from "./chains";

// export const GMX_STATS_API_URL = "https://stats.gmx.io/api";
export const GMX_STATS_API_URL = "https://dapptest.odx.finance/api";

const BACKEND_URLS = {
  // default: "https://gmx-server-mainnet.uw.r.appspot.com",
  default: "https://dapptest.odx.finance/api",

  [MAINNET]: "https://gambit-server-staging.uc.r.appspot.com",
  [ARBITRUM_TESTNET]: "https://gambit-server-devnet.uc.r.appspot.com",
  [AVALANCHE_FUJI]: "https://dapptest.odx.finance/api",
  [ROLLEX_TESTNET]: "https://dapptest.odx.finance/api",
};

export function getServerBaseUrl(chainId: number) {
  if (!chainId) {
    throw new Error("chainId is not provided");
  }

  if (document.location.hostname.includes("deploy-preview")) {
    const fromLocalStorage = localStorage.getItem("SERVER_BASE_URL");
    if (fromLocalStorage) {
      return fromLocalStorage;
    }
  }

  return BACKEND_URLS[chainId] || BACKEND_URLS.default;
}

export function getServerUrl(chainId: number, path: string) {
  return `${getServerBaseUrl(chainId)}${path}`;
}