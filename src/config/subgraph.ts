import { ARBITRUM, AVALANCHE, ETH_MAINNET, AVALANCHE_FUJI,ROLLEX_TESTNET } from "./chains";
import { isDevelopment } from "./env";
import { getSubgraphUrlKey } from "./localStorage";

const SUBGRAPH_URLS = {
  [ARBITRUM]: {
    stats: "https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-arbitrum-stats/api",
    referrals: "https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-arbitrum-referrals/api",
    nissohVault: "https://api.thegraph.com/subgraphs/name/nissoh/gmx-vault",
  },

  [AVALANCHE]: {
    stats: "https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-avalanche-stats/api",
    referrals: "https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-avalanche-referrals/api",
  },
  // TODO need config
  [AVALANCHE_FUJI]: {
    stats: "https://api.thegraph.com/subgraphs/name/6xiaowu9/odx-fuji-stats", // "https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-arbitrum-stats/api",
    referrals: "https://api.thegraph.com/subgraphs/name/6xiaowu9/odx-fuji-referrals", //"https://subgraph.satsuma-prod.com/3b2ced13c8d9/gmx/gmx-arbitrum-referrals/api",
  },

  [ETH_MAINNET]: {
    chainLink: "https://api.thegraph.com/subgraphs/name/deividask/chainlink",
  },

  // 待定
  [ROLLEX_TESTNET]: {
    stats: "https://subgraph.odx.finance/subgraphs/name/odx/odx-zkevm-stats",
    referrals: "https://subgraph.odx.finance/subgraphs/name/odx/odx-zkevm-referrals",
  },
};

export function getSubgraphUrl(chainId: number, subgraph: string) {
  if (isDevelopment()) {
    const localStorageKey = getSubgraphUrlKey(chainId, subgraph);
    const url = localStorage.getItem(localStorageKey);
    if (url) {
      // eslint-disable-next-line no-console
      console.warn("%s subgraph on chain %s url is overriden: %s", subgraph, chainId, url);
      return url;
    }
  }

  return SUBGRAPH_URLS?.[chainId]?.[subgraph];
}
