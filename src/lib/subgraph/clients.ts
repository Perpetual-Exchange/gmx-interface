import { createClient } from "./utils";
import { ARBITRUM, ARBITRUM_TESTNET, AVALANCHE, ETH_MAINNET, SEPOLIA } from "config/chains";

export const chainlinkClient = createClient(ETH_MAINNET, "chainLink");

export const arbitrumGraphClient = createClient(ARBITRUM, "stats");
export const arbitrumReferralsGraphClient = createClient(ARBITRUM, "referrals");
export const nissohGraphClient = createClient(ARBITRUM, "nissohVault");

export const avalancheGraphClient = createClient(AVALANCHE, "stats");
export const avalancheReferralsGraphClient = createClient(AVALANCHE, "referrals");

export const sepoliaGraphClient = createClient(SEPOLIA, "stats");
export const sepoliaReferralsGraphClient = createClient(SEPOLIA, "referrals");

export function getGmxGraphClient(chainId: number) {
  if (chainId === ARBITRUM) {
    return arbitrumGraphClient;
  } else if (chainId === SEPOLIA) {
    return sepoliaGraphClient;
  } else if (chainId === ARBITRUM_TESTNET) {
    return null;
  }

  throw new Error(`Unsupported chain ${chainId}`);
}
