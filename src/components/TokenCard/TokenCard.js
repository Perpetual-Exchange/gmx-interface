import React, { useCallback } from "react";
import { Link } from "react-router-dom";

import { isHomeSite } from "lib/legacy";

import { useWeb3React } from "@web3-react/core";
import APRLabel from "../APRLabel/APRLabel";
import { HeaderLink } from "../Header/HeaderLink";
import { ROLLEX_TESTNET } from "config/chains";
import { switchNetwork } from "lib/wallets";
import { useChainId } from "lib/chains";
import { getIcon } from "config/icons";
const glpIcon = getIcon("common", "glp");
const gmxIcon = getIcon("common", "gmx");

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
        <div className="flex font-semibold mb-10 gap-4 items-center  opacity-40">
          <img src={gmxIcon} width="40" alt="REX Icons" />
          <h3 className="flex-1 font-[22px]">REX</h3>
          APR:
          <span className="text-[#E0EE8D]">
            {/* <APRLabel chainId={ROLLEX_TESTNET} label="gmxAprTotal" key="ROLLEX_TESTNET" /> */}
            -- %
          </span>
        </div>
        <div className="opacity-40">
          $REX is the utility token of REX. In addition to granting participation in the governance process of the
          protocol, it also accrues value from the platform revenue.
          <a href="https://docs.romex.finance/liquidity-provider" target="_blank" rel="noreferrer" className=" read-more">
            Learn more
          </a>
        </div>
        <div className="Home-token-card-option-action">
          {/* <BuyLink to="/buy_rex" className="default-btn custom-buy-btn pointer-events-none" network={ROLLEX_TESTNET}>
            Buy REX
          </BuyLink> */}

          <BuyLink className="default-btn custom-buy-btn pointer-events-none opacity-40" network={ROLLEX_TESTNET}>
            Coming Soon
          </BuyLink>

        </div>
      </li>
      <li>
        <div className="flex font-semibold  mb-10 gap-4 items-center">
          <img src={glpIcon} width="40" alt="RLP Icon" />
          <h3 className="flex-1 font-[22px]">RLP</h3>
          APR:
          <span className="text-[#E0EE8D]">
            <APRLabel chainId={ROLLEX_TESTNET} label="glpAprTotal" key="ROLLEX_TESTNET" />
          </span>
        </div>

        <div>
          $RLP is a liquidity provider token. Accrues 70% of protocol revenue in the form of ETH and a portion of esREX
          token issuance emission.
        </div>
        <a href="https://docs.romex.finance/liquidity-provider" target="_blank" rel="noreferrer" className=" read-more">
          Learn more
        </a>
        <div className="Home-token-card-option-action">
          <BuyLink to="/buy_rlp" className="default-btn custom-buy-btn" network={ROLLEX_TESTNET}>
            Buy RLP
          </BuyLink>
        </div>
      </li>
    </>
  );
}
