import useSWR from "swr";
import { arrayURLFetcher } from "lib/legacy";
// import { AVALANCHE, AVALANCHE_FUJI, ARBITRUM, ODX_ZKEVM_TESTNET} from "config/chains";
import { ODX_ZKEVM_TESTNET } from "config/chains";
import { getServerUrl } from "config/backend";
// const ACTIVE_CHAIN_IDS = [AVALANCHE, AVALANCHE_FUJI, ARBITRUM];
const ACTIVE_CHAIN_IDS = [ODX_ZKEVM_TESTNET];
// const ACTIVE_CHAIN_IDS = [AVALANCHE_FUJI];

// [
//   "https://gmx-server-mainnet.uw.r.appspot.com/fees_summary",
//   "https://gmx-server-mainnet.uw.r.appspot.com/fees_summary",
// ],

export function useFeesSummary() {
  const { data: feesSummary } = useSWR(
    ACTIVE_CHAIN_IDS.map((chainId) => getServerUrl(chainId, `/${chainId}/fees_summary`)),
    {
      fetcher: arrayURLFetcher,
    }
  );

  const feesSummaryByChain = {};
  for (let i = 0; i < ACTIVE_CHAIN_IDS.length; i++) {
    if (feesSummary && feesSummary.length === ACTIVE_CHAIN_IDS.length) {
      feesSummaryByChain[ACTIVE_CHAIN_IDS[i]] = feesSummary[i];
    } else {
      feesSummaryByChain[ACTIVE_CHAIN_IDS[i]] = {};
    }
  }

  return { data: feesSummaryByChain };
}
