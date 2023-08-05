import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { isHomeSite } from "lib/legacy";

import { useWeb3React } from "@web3-react/core";

import { HeaderLink } from "../Header/HeaderLink";
import { SEPOLIA } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";

export default function TokenCard({ showRedirectModal, redirectPopupTimestamp }) {
  const isHome = isHomeSite();
  const { chainId } = useChainId();
  const { active } = useWeb3React();

  const changeNetwork = useCallback(
    (network) => {
      if (network === chainId) {
        return;
      }
      if (!active) {
        setTimeout(() => {
          return switchNetwork(network, active);
        }, 500);
      } else {
        return switchNetwork(network, active);
      }
    },
    [chainId, active]
  );

  const BuyLink = ({ className, to, children, network }) => {
    if (isHome && showRedirectModal) {
      return (
        <HeaderLink
          to={to}
          className={className}
          redirectPopupTimestamp={redirectPopupTimestamp}
          showRedirectModal={showRedirectModal}
        >
          {children}
        </HeaderLink>
      );
    }

    return (
      <Link to={to} className={className} onClick={() => changeNetwork(network)}>
        {children}
      </Link>
    );
  };

  return (
    <>
      <li>
        <h3>RLX</h3>
        <div>
          $RLX is the utility token of Rollex. In addition to granting participation in the governance process of the
          protocol, it also accrues value from the platform revenue.{" "}
          <a href="https://gmxio.gitbook.io/gmx/tokenomics" target="_blank" rel="noreferrer" className=" read-more">
            Learn more
          </a>
        </div>
        <div className="Home-token-card-option-action">
          <BuyLink to="/buy_gmx" className="default-btn custom-buy-btn" network={SEPOLIA}>
            Buy RLX
          </BuyLink>
        </div>
      </li>
      <li>
        <h3>RLP</h3>
        <div>
          $RLP is a liquidity provider token. Accrues 70% of protocol revenue in the form of SYS and a portion of esRLX
          token issuance emission.{" "}
        </div>
        <a href="https://gmxio.gitbook.io/gmx/glp" target="_blank" rel="noreferrer" className=" read-more">
          Learn more
        </a>
        <div className="Home-token-card-option-action">
          <BuyLink to="/buy_glp" className="default-btn custom-buy-btn" network={SEPOLIA}>
            Buy RLP
          </BuyLink>
        </div>
      </li>
    </>
  );
}
