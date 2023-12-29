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
import btn2Raw  from '../../img/feature/btn2Raw.svg';
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
          <img src={gmxIcon} width="40" alt="NOX Icons" />
          <h3 className="flex-1 font-[22px]">NOX</h3>
          APR:
          <span className="text-[#00FF9F]">
            {/* <APRLabel chainId={ROLLEX_TESTNET} label="gmxAprTotal" key="ROLLEX_TESTNET" /> */}
            -- %
          </span>
        </div>
        <div className="opacity-40">
          $NOX is the utility token of NOX. In addition to granting participation in the governance process of the
          protocol, it also accrues value from the platform revenue.
          <a href="https://docs.neonnexus.io/liquidity-provider" target="_blank" rel="noreferrer" className=" read-more">
            Learn more
          </a>
        </div>

        <div class="App-card-divider"></div>
        
        <div className="Home-token-card-option-action">
          {/* <BuyLink to="/buy_rex" className="default-btn custom-buy-btn pointer-events-none" network={ROLLEX_TESTNET}>
            Buy NOX
          </BuyLink> */}
          

          <BuyLink className="default-btn custom-buy-btn pointer-events-none opacity-40 flex items-center space-x-2" network={ROLLEX_TESTNET}>
            <span> Coming Soon</span> <img src={btn2Raw} alt="" srcset="" className="w-3" />
          </BuyLink>

        </div>
      </li>
      <li>
        <div className="flex font-semibold  mb-10 gap-4 items-center">
          <img src={glpIcon} width="40" alt="NLP Icon" />
          <h3 className="flex-1 font-[22px]">NLP</h3>
          APR:
          <span className="text-[#00FF9F]">
            <APRLabel chainId={ROLLEX_TESTNET} label="glpAprTotal" key="ROLLEX_TESTNET" />
          </span>
        </div>

        <div>
          $NLP is a liquidity provider token. Accrues 70% of protocol revenue in the form of ETH and a portion of esNOX
          token issuance emission.
        </div>
        <a href="https://docs.neonnexus.io/liquidity-provider" target="_blank" rel="noreferrer" className=" read-more">
          Learn more
        </a>
        <div class="App-card-divider"></div>
        <div className="Home-token-card-option-action">
          <BuyLink to="/buy_rlp" className="default-btn custom-buy-btn flex items-center space-x-2" network={ROLLEX_TESTNET}>
            <span>Buy NLP</span> <img src={btn2Raw} alt="" srcset="" className="w-3" />
          </BuyLink>
        </div>
      </li>
    </>
  );
}
