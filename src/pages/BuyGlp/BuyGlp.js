import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import GlpSwap from "components/Glp/GlpSwap";
import Footer from "components/Footer/Footer";
import "./BuyGlp.css";
import b1 from "../../img/app-dashboard/b1.png";
import { Trans } from "@lingui/macro";
import { getNativeToken } from "config/tokens";
import { useChainId } from "lib/chains";
import ExternalLink from "components/ExternalLink/ExternalLink";

export default function BuyGlp(props) {
  const { chainId } = useChainId();
  const history = useHistory();
  const [isBuying, setIsBuying] = useState(true);
  const nativeTokenSymbol = getNativeToken(chainId).symbol;

  useEffect(() => {
    const hash = history.location.hash.replace("#", "");
    const buying = hash === "redeem" ? false : true;
    setIsBuying(buying);
  }, [history.location.hash]);

  return (
    <div className="default-container page-layout BuyGlp-page">
      <div className="section-title-block">
        <img src={b1} className="right-b-icon" alt="" />
        <div className="section-title-content">
          <div className="Page-title">
            <Trans>Buy / Sell RLP</Trans>
          </div>
          <div className="Page-description">
            <Trans>
              Purchase <ExternalLink href="https://docs.romex.finance/rewards#as-a-olp-staker">RLP tokens</ExternalLink>{" "}
              to earn {nativeTokenSymbol} fees from swaps and leverages trading.
            </Trans>
            <br />
            <Trans>
              View <Link to="/earn">staking</Link> page.
            </Trans>
          </div>
        </div>
      </div>
      <GlpSwap {...props} isBuying={isBuying} setIsBuying={setIsBuying} />
      <Footer />
    </div>
  );
}
