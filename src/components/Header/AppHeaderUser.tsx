import { useWeb3React } from "@web3-react/core";
import AddressDropdown from "../AddressDropdown/AddressDropdown";
import ConnectWalletButton from "../Common/ConnectWalletButton";
import React, { useCallback, useEffect } from "react";
import { HeaderLink } from "./HeaderLink";
import connectWalletImg from "img/ic_wallet_24.svg";

import "./Header.css";
import { isHomeSite, getAccountUrl } from "lib/legacy";
import cx from "classnames";
import { Trans } from "@lingui/macro";
import NetworkDropdown from "../NetworkDropdown/NetworkDropdown";
import { getChainName, ROLLEX_TESTNET } from "config/chains";
// ARBITRUM_TESTNET
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
// import { isDevelopment } from "config/env";
import { getIcon } from "config/icons";

type Props = {
  openSettings: () => void;
  small?: boolean;
  setWalletModalVisible: (visible: boolean) => void;
  disconnectAccountAndCloseSettings: () => void;
  redirectPopupTimestamp: number;
  showRedirectModal: (to: string) => void;
};

const NETWORK_OPTIONS = [
  {
    label: getChainName(ROLLEX_TESTNET),
    value: ROLLEX_TESTNET,
    icon: getIcon(ROLLEX_TESTNET, "network"),
    color: "#ROLLEX_TESTNET",
  }
];

/**
 * {
    label: getChainName(AVALANCHE_FUJI),
    value: AVALANCHE_FUJI,
    icon: getIcon(AVALANCHE_FUJI, "network"),
    color: "#AVALANCHE_FUJI",
  },
 */

// if (isDevelopment()) {
//   NETWORK_OPTIONS.push({
//     label: getChainName(ARBITRUM_TESTNET),
//     value: ARBITRUM_TESTNET,
//     icon: getIcon(ARBITRUM_TESTNET, "network"),
//     color: "#264f79",
//   });
// }

export function AppHeaderUser({
  openSettings,
  small,
  setWalletModalVisible,
  disconnectAccountAndCloseSettings,
  redirectPopupTimestamp,
  showRedirectModal,
}: Props) {
  const { chainId } = useChainId();
  const { active, account } = useWeb3React();
  const showConnectionOptions = !isHomeSite();

  useEffect(() => {
    if (active) {
      setWalletModalVisible(false);
    }
  }, [active, setWalletModalVisible]);

  const onNetworkSelect = useCallback(
    (option) => {
      if (option.value === chainId) {
        return;
      }
      return switchNetwork(option.value, active);
    },
    [chainId, active]
  );

  const selectorLabel = getChainName(chainId);

  if (!active || !account) {
    return (
      <div className="App-header-user">
        <div className={cx("App-header-trade-link", { "homepage-header": isHomeSite() })}>

        {/* <a
          href="https://dapptest.neonnexus.io"
          target="_blank"
          rel="noreferrer"
          className="default-btn strong primary"
        >
          {isHomeSite() ? <Trans>Launch Dapp</Trans> : <Trans>Trade</Trans>}
        </a> */}

          {/* <HeaderLink
            className="default-btn strong primary"
            to="/trade"
            redirectPopupTimestamp={redirectPopupTimestamp}
            showRedirectModal={showRedirectModal}
          >
            {isHomeSite() ? <Trans>Launch Dapp</Trans> : <Trans>Trade</Trans>}
          </HeaderLink> */}

          {
            isHomeSite() ? <a
            href="https://dapptest.neonnexus.io"
            target="_self"
            rel="noreferrer"
            className="default-btn strong primary"
          >
            <Trans>Launch Dapp</Trans>
          </a> : <HeaderLink
              className="default-btn strong primary"
              to="/trade"
              redirectPopupTimestamp={redirectPopupTimestamp}
              showRedirectModal={showRedirectModal}
            >
              <Trans>Trade</Trans>
            </HeaderLink>
             
          }
        </div>

        {
          showConnectionOptions ? (
            <>
              <ConnectWalletButton onClick={() => setWalletModalVisible(true)} imgSrc={connectWalletImg}>
                {small ? <Trans>Connect</Trans> : <Trans>Connect Wallet</Trans>}
              </ConnectWalletButton>
              <NetworkDropdown
                small={small}
                networkOptions={NETWORK_OPTIONS}
                selectorLabel={selectorLabel}
                onNetworkSelect={onNetworkSelect}
                openSettings={openSettings}
              />
            </>
          ) : null
          // <LanguagePopupHome />
        }
      </div>
    );
  }

  const accountUrl = getAccountUrl(chainId, account);

  return (
    <div className="App-header-user">
      <div className="App-header-trade-link">
        <HeaderLink
          className="default-btn strong primary"
          to="/trade"
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          <Trans>Trade</Trans>
        </HeaderLink>
      </div>

      {
        showConnectionOptions ? (
          <>
            <div className="App-header-user-address">
              <AddressDropdown
                account={account}
                accountUrl={accountUrl}
                disconnectAccountAndCloseSettings={disconnectAccountAndCloseSettings}
              />
            </div>
            <NetworkDropdown
              small={small}
              networkOptions={NETWORK_OPTIONS}
              selectorLabel={selectorLabel}
              onNetworkSelect={onNetworkSelect}
              openSettings={openSettings}
            />
          </>
        ) : null
        // <LanguagePopupHome />
      }
    </div>
  );
}
