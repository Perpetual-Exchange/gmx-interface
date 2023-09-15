import { createClient } from "./utils";
import { ARBITRUM, AVALANCHE, ETH_MAINNET, AVALANCHE_FUJI,ROLLEX_TESTNET } from "config/chains";

export const chainlinkClient = createClient(ETH_MAINNET, "chainLink");

export const arbitrumGraphClient = createClient(ARBITRUM, "stats");
export const arbitrumReferralsGraphClient = createClient(ARBITRUM, "referrals");
export const nissohGraphClient = createClient(ARBITRUM, "nissohVault");

export const avalancheGraphClient = createClient(AVALANCHE, "stats");
export const avalancheReferralsGraphClient = createClient(AVALANCHE, "referrals");

export const fujiGraphClient = createClient(AVALANCHE_FUJI, "stats");
export const fujiReferralsGraphClient = createClient(AVALANCHE_FUJI, "referrals");

export const odxTestGraphClient = createClient(ROLLEX_TESTNET, "stats");
export const odxTestReferralsGraphClient = createClient(ROLLEX_TESTNET, "referrals");

export function getGmxGraphClient(chainId: number) {
  if (chainId === ARBITRUM) {
    return arbitrumGraphClient;
  } else if (chainId === AVALANCHE_FUJI) {
    return fujiGraphClient;
  } else if (chainId === AVALANCHE) {
    return avalancheGraphClient;
  } else if (chainId === ROLLEX_TESTNET) {
    return odxTestGraphClient;
  }

  throw new Error(`Unsupported chain ${chainId}`);
}
