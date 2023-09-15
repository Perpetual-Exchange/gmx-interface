import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";
import { getFallbackProvider, getProvider } from "../rpc";

export const contractFetcher =
  <T>(library: Web3Provider | undefined, contractInfo: any, additionalArgs?: any[]) =>
  (...args: any): Promise<T> => {
    // console.log("args====>",args);
     // eslint-disable-next-line
    const [id, chainId, arg0, arg1, ...params] = args;
    // const [ chainId, arg0, arg1, ...params] = args;
    const provider = getProvider(library, chainId);

    const method = ethers.utils.isAddress(arg0) ? arg1 : arg0;

    const contractCall = getContractCall({
      provider,
      contractInfo,
      arg0,
      arg1,
      method,
      params,
      additionalArgs,
    });

    let shouldCallFallback = true;

    const handleFallback = async (resolve, reject, error) => {
      if (!shouldCallFallback) {
        return;
      }
      // prevent fallback from being called twice
      shouldCallFallback = false;

      const fallbackProvider = getFallbackProvider(chainId);
      if (!fallbackProvider) {
        reject(error);
        return;
      }

      // eslint-disable-next-line no-console
      console.info("using fallbackProvider for", method);
      const fallbackContractCall = getContractCall({
        provider: fallbackProvider,
        contractInfo,
        arg0,
        arg1,
        method,
        params,
        additionalArgs,
      });

      fallbackContractCall
        .then((result) => resolve(result))
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.error("fallback fetcher error===>", {
            provider: fallbackProvider,
            contractInfo,
            arg0,
            arg1,
            method,
            params,
            additionalArgs,
          });
          reject(e);
        });
    };

    return new Promise(async (resolve, reject) => {
      contractCall
        .then((result) => {
          shouldCallFallback = false;
          // eslint-disable-next-line no-console
          console.log("contractCall return", {
            contractInfo,
            arg0,
            arg1,
            method,
            params,
            additionalArgs,
            result
          });
          resolve(result);
        })
        .catch((e) => {
          // console.error("fetcher error", contractInfo.contractName, method, e);
          // eslint-disable-next-line no-console
          console.error("fallback fetcher error2===>", {
            contractInfo,
            arg0,
            arg1,
            method,
            params,
            additionalArgs,
            e
          });
          handleFallback(resolve, reject, e);
        });

      setTimeout(() => {
        handleFallback(resolve, reject, "contractCall timeout");
      }, 2000);
    });
  };

function getContractCall({ provider, contractInfo, arg0, arg1, method, params, additionalArgs }) {
  // console.warn(111111111111111, "contractFetcher", contractInfo.contractName, method, params, additionalArgs);
  // console.log('getContractCall===>',`${arg0}-${method}`,{...params.concat(additionalArgs)});
  if (ethers.utils.isAddress(arg0)) {
    const address = arg0;
    const contract = new ethers.Contract(address, contractInfo.abi, provider);

    if (additionalArgs) {
      return contract[method](...params.concat(additionalArgs));
    }
    return contract[method](...params);
  }

  if (!provider) {
    return;
  }

  return provider[method](arg1, ...params);
}
