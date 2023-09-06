import React from "react";
import HomeFooter from "components/HomeFooter/HomeFooter";
import "./Home.css";

import featureIcon1 from "img/feature/f-1.png";
import featureIcon2 from "img/feature/f-2.png";
import featureIcon3 from "img/feature/f-3.png";
import featureIcon4 from "img/feature/f-4.png";
import featureIcon5 from "img/feature/f-5.png";
import featureIcon6 from "img/feature/f-6.png";

import homeTrade1 from "img/home-trade/t1.png";
import homeTrade2 from "img/home-trade/t2.png";
import homeTrade3 from "img/home-trade/t3.png";
import homeTrade4 from "img/home-trade/t4.png";

import homeODX1 from "img/odx/o1.svg";
import homeODX2 from "img/odx/o2.svg";
import homeODX3 from "img/odx/o3.svg";
import homeODX4 from "img/odx/o4.svg";

import homeC1 from "img/home-comunion/c1.png";
import homeC2 from "img/home-comunion/c2.png";

import homeP1 from "img/home-permission/p1.png";
import homeP2 from "img/home-permission/p2.png";

import homeOpside from "img/home-power/logo.svg";
import homeArr from "img/home-power/arrow.svg";

import linePic from "img/vector1.png";

import homeRoadMapO from "img/home-roadmap/o.svg";
import homeRoadMapD from "img/home-roadmap/d.svg";
import homeRoadMapX from "img/home-roadmap/x.svg";
import homeRoadMapStartLight from "img/home-roadmap/start-light.png";
import homeRoadMapEndLight from "img/home-roadmap/end-light.png";
import homeRoadMapStartDark from "img/home-roadmap/start-dark.png";
import homeRoadMapEndDark from "img/home-roadmap/end-dark.png";

import TokenCard from "components/TokenCard/TokenCard";
import { Trans } from "@lingui/macro";
import { HeaderLink } from "components/Header/HeaderLink";

export default function Home({ showRedirectModal, redirectPopupTimestamp }) {
  // const [openedFAQIndex, setOpenedFAQIndex] = useState(null)
  // const faqContent = [{
  //   id: 1,
  //   question: "What is GMX?",
  //   answer: "GMX is a decentralized spot and perpetual exchange that supports low swap fees and zero price impact trades.<br><br>Trading is supported by a unique multi-asset pool that earns liquidity providers fees from market making, swap fees, leverage trading (spreads, funding fees & liquidations), and asset rebalancing.<br><br>Dynamic pricing is supported by Chainlink Oracles along with TWAP pricing from leading volume DEXs."
  // }, {
  //   id: 2,
  //   question: "What is the GMX Governance Token? ",
  //   answer: "The GMX token is the governance token of the GMX ecosystem, it provides the token owner voting rights on the direction of the GMX platform.<br><br>Additionally, when GMX is staked you will earn 30% of the platform-generated fees, you will also earn Escrowed GMX tokens and Multiplier Points."
  // }, {
  //   id: 3,
  //   question: "What is the OLP Token? ",
  //   answer: "The OLP token represents the liquidity users provide to the GMX platform for Swaps and Margin Trading.<br><br>To provide liquidity to OLP you <a href='https://gmx.io/buy_olp' target='_blank'>trade</a> your crypto asset BTC, ETH, LINK, UNI, USDC, USDT, MIM, or FRAX to the liquidity pool, in exchange, you gain exposure to a diversified index of tokens while earning 50% of the platform trading fees and esODX."
  // }, {
  //   id: 4,
  //   question: "What can I trade on GMX? ",
  //   answer: "On GMX you can swap or margin trade any of the following assets: ETH, BTC, LINK, UNI, USDC, USDT, MIM, FRAX, with others to be added. "
  // }]

  // const toggleFAQContent = function(index) {
  //   if (openedFAQIndex === index) {
  //     setOpenedFAQIndex(null)
  //   } else {
  //     setOpenedFAQIndex(index)
  //   }
  // }

  // ARBITRUM

  // const arbitrumPositionStatsUrl = getServerUrl(ARBITRUM, "/position_stats");
  // const { data: arbitrumPositionStats } = useSWR([arbitrumPositionStatsUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  // });

  // const arbitrumTotalVolumeUrl = getServerUrl(ARBITRUM, "/total_volume");
  // const { data: arbitrumTotalVolume } = useSWR([arbitrumTotalVolumeUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  // });

  // AVALANCHE

  // const avalanchePositionStatsUrl = getServerUrl(AVALANCHE, "/position_stats");
  // const { data: avalanchePositionStats } = useSWR([avalanchePositionStatsUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  // });

  // const avalancheTotalVolumeUrl = getServerUrl(AVALANCHE, "/total_volume");
  // const { data: avalancheTotalVolume } = useSWR([avalancheTotalVolumeUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  // });

  // Total Volume

  // const arbitrumTotalVolumeSum = getTotalVolumeSum(arbitrumTotalVolume);
  // const avalancheTotalVolumeSum = getTotalVolumeSum(avalancheTotalVolume);

  // let totalVolumeSum = bigNumberify(0);
  // if (arbitrumTotalVolumeSum && avalancheTotalVolumeSum) {
  //   totalVolumeSum = totalVolumeSum.add(arbitrumTotalVolumeSum);
  //   totalVolumeSum = totalVolumeSum.add(avalancheTotalVolumeSum);
  // }

  // Open Interest

  // let openInterest = bigNumberify(0);
  // if (
  //   arbitrumPositionStats &&
  //   arbitrumPositionStats.totalLongPositionSizes &&
  //   arbitrumPositionStats.totalShortPositionSizes
  // ) {
  //   openInterest = openInterest.add(arbitrumPositionStats.totalLongPositionSizes);
  //   openInterest = openInterest.add(arbitrumPositionStats.totalShortPositionSizes);
  // }

  // if (
  //   avalanchePositionStats &&
  //   avalanchePositionStats.totalLongPositionSizes &&
  //   avalanchePositionStats.totalShortPositionSizes
  // ) {
  //   openInterest = openInterest.add(avalanchePositionStats.totalLongPositionSizes);
  //   openInterest = openInterest.add(avalanchePositionStats.totalShortPositionSizes);
  // }

  const LaunchExchangeButton = () => {
    return (
      <HeaderLink
        className="default-btn LaunchExchangeButton"
        to="/trade"
        redirectPopupTimestamp={redirectPopupTimestamp}
        showRedirectModal={showRedirectModal}
      >
        <Trans>Launch App</Trans>
      </HeaderLink>
    );
  };

  return (
    <div className="Home">
      <div className="Home-top">
        {/* <div className="Home-top-image"></div> */}
        <div className="Home-title-section-container default-container">
          <div className="Home-title-section">
            <div className="Home-title">
              <Trans>
                PERMISSIONLESS
                <br />
                DECENTRALIZED
                <br />
                <span style={{ color: "#80AE0E" }}>PERPETUAL</span>
                <br />
                EXCHANGE
              </Trans>
            </div>
            <img src={linePic} className="mb-10 max-md:mb-5" style={{ maxWidth: "60vw" }} alt="line" />
            <div className="Home-description">
              Easily engage in leveraged trading and swaps of BTC, ETH, and other top cryptocurrencies.
            </div>
            <LaunchExchangeButton />
          </div>
        </div>

        <div className="Home-feature-wrap default-container">
          <div className="Home-feature">
            <h2>ODX zkEVM Chain</h2>
            {/* <div className="_cont">
              ODX is deployed on ODX zkEVM Chain which is a App-Exclusive-Chain based ZK-Rollup powerd by Opside. ODX
              zkEVM uses Ethereum as the layer1,Inherits Ethereum's security, with asset settlement ultimately executed
              on Ethereum.
            </div> */}
            <ul className=" max-md:grid-cols-1 grid grid-cols-2 Home-tip-list">
              <li className="border-b-[0.5px] border-[#80AE0E] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
                <h3>Exclusive Chain</h3>
                <div>ODX is deployed on ODX zkEVM Chain which is a App-Exclusive-Chain based ZK-Rollup powerd by Opside.</div>
                <img src={homeODX1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
              </li>
              <li className="border-l-[0.5px] border-b-[0.5px] border-[#80AE0E] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
                <h3>High Security</h3>
                <div>ODX zkEVM uses Ethereum as the layer1,Inherits Ethereum's security, with asset settlement ultimately executed on Ethereum.</div>
                <img src={homeODX2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
              </li>
              <li className="border-b-0 border-[#80AE0E] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 max-md:border-b-[0.5px] relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
                <h3>High TPS</h3>
                <div>The exclusive ZK-Rollup brings high TPS, providing users with a better trading experience.</div>
                <img src={homeODX3} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
              </li>
              <li className="border-l-[0.5px] border-b-0 border-[#80AE0E] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 max-md:border-b-0 relative even:text-right even:pr-60 even:pl-5  odd:pr-5 odd:pl-60">
                <h3>Low Gas</h3>
                <div>Minimal gas fees, with some transactions costing as little as 0 gas.</div>
                <img src={homeODX4} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
              </li>
            </ul>
          </div>
        </div>

        <div className="Home-feature-wrap default-container">
          <div className="Home-feature">
            <h2>Features</h2>
            <ul className="max-md:grid-cols-1 grid grid-cols-3 Home-feature-list">
              <li>
                <h3>Leveraged Trading</h3>
                <div>
                  Traders could now take advantage of up to 50x leverage on assets such as BTC, ETH, USDT, USDC etc.
                </div>
                <img src={featureIcon1} alt="" />
              </li>
              <li>
                <h3>Cross-Margin Collateral</h3>
                <div>
                  ODX enables cross-margin collateral management, allowing margin balance sharing across positions.
                  Traders can efficiently and conveniently manage their entire portfolio.
                </div>
                <img src={featureIcon2} alt="" />
              </li>
              <li>
                <h3>More APR% for LP</h3>
                <div>
                  ODX offers one of the highest APR% for LPs in the market through multiple rewards programs and
                  incentive campaign.
                </div>
                <img src={featureIcon3} alt="" />
              </li>
              <li>
                <h3>Mutil Rewards Programma</h3>
                <div>ODX has the following incentive programs </div>
                <div className="mt-sm easy-list">
                  <div>Trader's loyalty and credit </div>
                  <div>Holding incentive rewards </div>
                  <div>Liquidity provider rewards </div>
                  <div>Referral program</div>
                </div>
                <img src={featureIcon4} alt="" />
              </li>
              <li>
                <h3>Reduce Risks</h3>
                <div>
                  ODX implements multiple risk reduction measures for users.
                  <div className="mt-sm easy-list">
                    <div>Individual LP</div>
                    <div>Fee structures</div>
                    <div>Zero price impact </div>
                    <div>Liquidation protection</div>
                  </div>
                </div>
                <img src={featureIcon5} alt="" />
              </li>
              <li>
                <h3>Insurance Funding</h3>
                <div>
                  The Insurance Fund helps to ensure liquidity in OLP and provide a reliable stream of ETH rewards for
                  all staked ODX.
                </div>
                <img src={featureIcon6} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-[150px] max-md:mt-[75px] Home-latest-info-container default-container">
          <div className=" border max-md:text-center border-[0.5px] rounded-[25px] max-md:grid-cols-2 grid grid-cols-4 !border-[#80AE0E]">
            <div className="border-l-[0.5px] border-[#80AE0E] py-10 sm:pl-10 first:border-0">
              <div className="Home-latest-info__title">
                <Trans>Total Trading Volume</Trans>
              </div>
              <div className="Home-latest-info__value">
                $0
                {
                  // formatAmount(totalVolumeSum, USD_DECIMALS, 0, true)
                }
              </div>
            </div>
            <div className=" border-l-[0.5px] border-[#80AE0E] py-10 sm:pl-10">
              <div className="Home-latest-info__title">
                <Trans>Total Value Locked</Trans>
              </div>
              <div className="Home-latest-info__value">${0}</div>
            </div>
            <div className=" border-l-[0.5px] border-[#80AE0E] max-md:border-0 max-md:border-t-[0.5px] py-10 sm:pl-10">
              <div className="Home-latest-info__title">
                <Trans>Total Fees</Trans>
              </div>
              <div className="Home-latest-info__value">${0}</div>
            </div>
            <div className="border-l-[0.5px] border-[#80AE0E] max-md:border-t-[0.5px] py-10 sm:pl-10">
              <div className="Home-latest-info__title">
                <Trans>Open Interest</Trans>
              </div>
              <div className="Home-latest-info__value">${0}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="Home-feature-wrap default-container">
        <div className="Home-feature">
          <h2>Tokenomics</h2>
          <ul className="max-md:grid-cols-1 grid grid-cols-2 tokenomics-list">
            <TokenCard showRedirectModal={showRedirectModal} redirectPopupTimestamp={redirectPopupTimestamp} />
          </ul>
        </div>
      </div>

      <div className="Home-feature-wrap default-container">
        <div className="Home-feature">
          <h2>Trade</h2>
          <ul className=" max-md:grid-cols-1 grid grid-cols-2 Home-tip-list">
            <li className="border-b-[0.5px] border-[#80AE0E] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Zero price impact</h3>
              <div>Swap tokens with lowest trading fees and zero price impact.</div>
              <img src={homeTrade1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-[0.5px] border-[#80AE0E] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>50x Leverage</h3>
              <div>Trade BTC, ETH, USDC and other top cryptocurrencies with up to 50x leverage</div>
              <img src={homeTrade2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
            <li className="border-b-0 border-[#80AE0E] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 max-md:border-b-[0.5px] relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Robust price oracle</h3>
              <div>
                ODX uses SuperOracle as a reliable price oracle to achieve accurate and stable pricing so that traders
                can confidently execute trades with reliable pricing information.
              </div>
              <img src={homeTrade3} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-0 border-[#80AE0E] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 max-md:border-b-0 relative even:text-right even:pr-60 even:pl-5  odd:pr-5 odd:pl-60">
              <h3>Peer to Pool</h3>
              <div>
                ODX leverages liquidity pools and peer-to-peer principles for permissionless automated trading,
                eliminating centralized order books and traditional marketplaces.
              </div>
              <img src={homeTrade4} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
          </ul>
        </div>
      </div>

      <div className="Home-feature-wrap default-container">
        <div className="Home-feature">
          <h2>Community-driven</h2>
          <ul className="max-md:grid-cols-1 grid grid-cols-2 Home-tip-list">
            <li className="border-[#80AE0E] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 max-md:border-b-[0.5px] relative even:text-right even:pr-60 even:pl-5 odd:pr-5  odd:pl-60">
              <h3>No Investors & Foundation</h3>
              <div>
                ODX is entirely governed and driven by the community. 99% of ODX tokens are allocated to the community,
                held by community members.{" "}
              </div>
              <img src={homeC1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-[#80AE0E] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Community Governance</h3>
              <div>
                The platform's operations and updates are proposed and voted upon by the community (ODX holders).
              </div>
              <img src={homeC2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
          </ul>
        </div>
      </div>

      <div className="Home-feature-wrap default-container">
        <div className="Home-feature">
          <h2>Permissionless liquidity pool</h2>
          <ul className="max-md:grid-cols-1 grid grid-cols-2 Home-tip-list">
            <li className="border-[#80AE0E] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 max-md:border-b-[0.5px] relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Permissionless</h3>
              <div>
                Anyone can create a liquidity pool on ODX at any time using a combination of non-stablecoins and
                stablecoins.
              </div>
              <img src={homeP1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-[#80AE0E] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>High assets expansion</h3>
              <div>
                The permissionless creation of liquidity pools on ODX enables an almost infinite expansion of tradable
                asset types.
              </div>
              <img src={homeP2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
          </ul>
        </div>
      </div>

      <div className="Home-roadmap default-container">
        <h3 className="uppercase">Roadmap</h3>
        <ul className="max-md:grid-cols-1 grid gap-10 grid-cols-3 Home-roadmap-list">
          <li>
            <div className="_year">2023</div>
            <div className="_q">2023 - Q3:</div>
            <div className="_list">
              <div className="_item">Introduce ODX Testnet</div>
              <div className="_item">Release ODX Tokenomics</div>
            </div>
            <img src={homeRoadMapO} className="_water" alt="o" />
            <img src={homeRoadMapStartLight} className="_start" alt="" />
            <img src={homeRoadMapEndLight} className="_end" alt="" />
          </li>
          <li>
            <div className="_year">2023</div>
            <div className="_q">2023 - Q4:</div>
            <div className="_list">
              <div className="_item">Launch ODX Mainnet</div>
            </div>
            <img src={homeRoadMapD} className="_water" alt="d" />
            <img src={homeRoadMapStartDark} className="_start" alt="" />
            <img src={homeRoadMapEndDark} className="_end" alt="" />
          </li>
          <li>
            <div className="_year">2024</div>
            <div className="_q">2024 - Q1:</div>
            <div className="_list">
              <div className="_item">ODX TGE</div>
              <div className="_item">Launch Community Governance</div>
              <div className="_item">Initiate Permissionless Liquidity Pool</div>
              <div className="_item">Update ODX zkEVM Chain</div>
            </div>
            <img src={homeRoadMapX} className="_water" alt="x" />
            <img src={homeRoadMapStartDark} className="_start" alt="" />
            <img src={homeRoadMapEndDark} className="_end" alt="" />
          </li>
        </ul>
      </div>

      <div className="Home-feature-wrap default-container">
        <div className="Home-parnter-list">
          <h3 className="uppercase">Powered by</h3>
          <div className="flex  justify-center">
            <ul
              className="flex font-semibold max-md:text-[16px] px-10 text-[18px] text-[#9E9E9E] gap-10 items-center"
              style={{
                borderRadius: 55,
                border: "0.5px #587511 solid",
                background:
                  "linear-gradient(90deg, rgba(88,117,17,.2) 0%, rgba(25,25,25,1) 22%, rgba(31,34,24,1) 90%, rgba(88,117,17,.2) 100%)",
              }}
            >
              <a href="https://opside.network/rollup/create" target="_blank" rel="noopener noreferrer">
                <li className="flex max-md:justify-start p-6 items-center justify-center">
                  <img src={homeOpside} alt="" className="mr-4 max-md:w-[22px] w-[22px]" />
                  <div>Opside ZK-RaaS</div>
                  <img src={homeArr} alt="" className="ml-4 max-md:w-[22px] w-[22px]" />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <HomeFooter showRedirectModal={showRedirectModal} redirectPopupTimestamp={redirectPopupTimestamp} />
    </div>
  );
}
