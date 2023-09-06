import useSWR from "swr";
// import { arrayURLFetcher, getTotalVolumeSum } from "lib/legacy";
import { arrayURLFetcher } from "lib/legacy";
// import { AVALANCHE_FUJI, AVALANCHE } from "config/chains";
import { ODX_ZKEVM_TESTNET } from "config/chains";
import { getServerUrl } from "config/backend";
// import { bigNumberify } from "lib/numbers";
// const ACTIVE_CHAIN_IDS = [AVALANCHE_FUJI, AVALANCHE];
const ACTIVE_CHAIN_IDS = [ODX_ZKEVM_TESTNET];

export function useTotalVolume() {
  const { data: totalVolume } = useSWR<any>(
    ACTIVE_CHAIN_IDS.map((chain) => getServerUrl(chain, "/total_volume")),
    {
      fetcher: arrayURLFetcher,
    }
  );
  if (totalVolume?.length > 0) {
    // console.log('已存在==>',totalVolume);
    /*return ACTIVE_CHAIN_IDS.reduce(
      (acc, chainId, index) => {
        const sum = getTotalVolumeSum(totalVolume[index])!;
        acc[chainId] = sum;
        acc.total = acc.total.add(sum);
        return acc;
      },
      { total: bigNumberify(0)! }
    );*/
    return totalVolume[0];
  }
}
