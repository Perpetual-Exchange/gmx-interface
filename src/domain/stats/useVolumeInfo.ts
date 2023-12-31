import { GMX_STATS_API_URL } from "config/backend";
import { ROLLEX_TESTNET } from "config/chains";
import { bigNumberify } from "lib/numbers";
import useSWR from "swr";

export function useVolumeInfo() {
  const url = `${GMX_STATS_API_URL}/volume/24h`;

  const { data } = useSWR(
    url,
    async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      return {
        // [ARBITRUM]: bigNumberify(json[ARBITRUM]),
        // [AVALANCHE]: bigNumberify(json[AVALANCHE]),
        // [AVALANCHE_FUJI]: bigNumberify(json[AVALANCHE_FUJI]),
        [ROLLEX_TESTNET]: bigNumberify(json[ROLLEX_TESTNET]),
        total: bigNumberify(json.total),
      };
    },
    {
      refreshInterval: 60000,
    }
  );

  return data;
}
