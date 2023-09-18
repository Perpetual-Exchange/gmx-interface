import Footer from "components/Footer/Footer";
import "./Home.css";
import RoadMap  from './RoadMap.tsx';

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

import homeEarn1 from "img/home-earn/s1.png";
import homeEarn2 from "img/home-earn/s2.png";
import homeEarn3 from "img/home-earn/s3.png";
import homeEarn4 from "img/home-earn/s4.png";

import homeReward1 from "img/home-reward/r1.png";
import homeReward2 from "img/home-reward/r2.png";
import homeReward3 from "img/home-reward/r3.png";
import homeReward4 from "img/home-reward/r4.png";

import homeRollux from "img/home-partner/Rollux.png";
import homeWEconomy from "img/home-partner/WEconomy.svg";
import homeSyscoin from "img/home-partner/Syscoin.png";
import homePegasys from "img/home-partner/Pegasys.svg";

import linePic from "img/vector1.png";

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
  //   question: "What is the GLP Token? ",
  //   answer: "The GLP token represents the liquidity users provide to the GMX platform for Swaps and Margin Trading.<br><br>To provide liquidity to GLP you <a href='https://gmx.io/buy_glp' target='_blank'>trade</a> your crypto asset BTC, ETH, LINK, UNI, USDC, USDT, MIM, or FRAX to the liquidity pool, in exchange, you gain exposure to a diversified index of tokens while earning 50% of the platform trading fees and esGMX."
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

  // // AVALANCHE

  // const avalanchePositionStatsUrl = getServerUrl(AVALANCHE, "/position_stats");
  // const { data: avalanchePositionStats } = useSWR([avalanchePositionStatsUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  // });

  // const avalancheTotalVolumeUrl = getServerUrl(AVALANCHE, "/total_volume");
  // const { data: avalancheTotalVolume } = useSWR([avalancheTotalVolumeUrl], {
  //   fetcher: (...args) => fetch(...args).then((res) => res.json()),
  // });

  // // Total Volume

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
        <Trans>Launch Dapp</Trans>
      </HeaderLink>
    );
  };

  const linkTo = (url)=>{
    window.open(url || '/')
  }

  return (
    <div className="Home">
      <div className="Home-top">
        {/* <div className="Home-top-image"></div> */}
        <div className="Home-title-section-container default-container">
          <div className="Home-title-section">
            <div className="Home-title">
              <Trans>
                DECENTRALIZED
                <br />
                <span style={{ color: "#e0ee8d" }}>PERPETUAL</span>
                <br />
                EXCHANGE
              </Trans>
            </div>
            <img src={linePic} className="mb-10 max-md:mb-5" style={{ maxWidth: "60vw" }} alt="line" />
            <div className="Home-description">
              <Trans>Easily engage in leveraged trading and swaps of BTC,ETH, SYS,and other top cryptocurrencies.</Trans>
            </div>
            <LaunchExchangeButton />
          </div>
        </div>
        <div className="Home-feature-wrap default-container">
          <div className="Home-feature">
            <h2>Features</h2>
            <ul className="max-md:grid-cols-1 grid grid-cols-3 Home-feature-list">
              <li>
                <h3>Leveraged Trading</h3>
                <div>
                  Traders could now take advantage of up to 50x leverage on assets such as BTC, ETH, USDT, SYS, PSYS,
                  etc.
                </div>
                <img src={featureIcon1} alt="" />
              </li>
              <li>
                <h3>Cross-Margin Collateral</h3>
                <div>
                  RoMEX enables cross-margin collateral management, allowing margin balance sharing across positions.
                  Traders can efficiently and conveniently manage their entire portfolio.
                </div>
                <img src={featureIcon2} alt="" />
              </li>
              <li>
                <h3>More APR% for LP</h3>
                <div>
                  RoMEX offers one of the highest APR% for LPs in the market through multiple rewards programs and
                  incentive campaign.
                </div>
                <img src={featureIcon3} alt="" />
              </li>
              <li>
                <h3>Mutil Rewards Programma</h3>
                <div>RoMEX has the following incentive programs </div>
                <div className="mt-sm easy-list">
                  <div>Trader's loyalty and credit </div>
                  <div>Holding incentive rewards </div>
                  <div>Liquidity provider rewards </div>
                  {/* <div>Referral program</div> */}
                </div>
                <img src={featureIcon4} alt="" />
              </li>
              <li>
                <h3>Save on Costs</h3>
                <div>
                  Enter and exit positions with minimal spread and zero price impact.
                  <a href="https://docs.romex.finance/fee" target="_blank" className="read-more" rel=" noreferrer">
                    learn more
                  </a>
                </div>
                <img src={featureIcon5} alt="" />
              </li>
              <li>
                <h3>Insurance Funding</h3>
                <div>
                  The Insurance Fund helps to ensure liquidity in RLP and provide a reliable stream of SYS rewards for
                  all staked REX.
                </div>
                <img src={featureIcon6} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" Home-latest-info-container default-container">
          <div className=" border max-md:text-center border-[0.5px] max-md:grid-cols-2 grid grid-cols-4 !border-[#e0ee8d]">
            <div className="border-l-[0.5px] border-[#e0ee8d] py-10 sm:pl-10 first:border-0">
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
            <div className=" border-l-[0.5px] border-[#e0ee8d] py-10 sm:pl-10">
              <div className="Home-latest-info__title">
                <Trans>Total Value Locked</Trans>
              </div>
              <div className="Home-latest-info__value">${0}</div>
            </div>
            <div className=" border-l-[0.5px] border-[#e0ee8d] max-md:border-0 max-md:border-t-[0.5px] py-10 sm:pl-10">
              <div className="Home-latest-info__title">
                <Trans>Total Fees</Trans>
              </div>
              <div className="Home-latest-info__value">${0}</div>
            </div>
            <div className="border-l-[0.5px] border-[#e0ee8d] max-md:border-t-[0.5px] py-10 sm:pl-10">
              <div className="Home-latest-info__title">
                <Trans>Open Interest</Trans>
              </div>
              <div className="Home-latest-info__value">
                $0
                {
                  // formatAmount(openInterest, USD_DECIMALS, 0, true)
                }
              </div>
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
            <li className="border-b-[0.5px] border-[#e0ee8d] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Zero price impact</h3>
              <div>Swap tokens with lowest trading fees and zero price impact.</div>
              <img src={homeTrade1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-[0.5px] border-[#e0ee8d] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>50x Leverage</h3>
              <div>Trade BTC, ETH, SYS, PSYS and other top cryptocurrencies with up to 50x leverage</div>
              <img src={homeTrade2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
            <li className="border-[#e0ee8d] border-l-0 max-md:border-b-[0.5px] max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Robust price oracle</h3>
              <div>
                RoMEX uses SuperOracle as a reliable price oracle to achieve accurate and stable pricing so that
                traders can confidently execute trades with reliable pricing information.
              </div>
              <img src={homeTrade3} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-0 border-[#e0ee8d] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 max-md:border-b-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60 ">
              <h3>Peer to Pool</h3>
              <div>
                RoMEX leverages liquidity pools and peer-to-peer principles for permissionless automated trading,
                eliminating centralized order books and traditional marketplaces.
              </div>
              <img src={homeTrade4} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
          </ul>
        </div>
      </div>

      <div className="Home-feature-wrap default-container">
        <div className="Home-feature">
          <h2>Earn</h2>
          <ul className="max-md:grid-cols-1 grid grid-cols-2 Home-tip-list">
            <li className="border-b-[0.5px] border-[#e0ee8d] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Providing Liquidity</h3>
              <div>Providing Liquidity earn esREX rewards and 70% of platform fees</div>
              <img src={homeEarn1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-[0.5px] border-[#e0ee8d] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Stake to earn</h3>
              <div>
                Staked REX receives three types of rewards that includes Escrowed REX, Multiplier Points and SYS Rewards
              </div>
              <img src={homeEarn2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
            <li className="border-[#e0ee8d] border-l-0 max-md:border-b-[0.5px] max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Trade to earn</h3>
              <div>Earn REX by trading volume, the bigger the trading volume, the more you earn</div>
              <img src={homeEarn3} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-0 border-[#e0ee8d] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 max-md:border-b-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Open Positions</h3>
              <div>Traders will receive esREX rewards for the period that their leveraged positions are active.</div>
              <img src={homeEarn4} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
          </ul>
        </div>
      </div>

      <div className="Home-feature-wrap default-container">
        <div className="Home-feature">
          <h2>Rewards</h2>
          <ul className="max-md:grid-cols-1 grid grid-cols-2 Home-tip-list">
            <li className="border-b-[0.5px] border-[#e0ee8d] border-l-0 max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Traders' Loyalty Credit</h3>
              <div>
                In accordance with trading volume, Traders will be awarded REX token(the rate depends on which asset
                users trade on){" "}
                <a href="https://docs.rollex.xyz/rewrads" className="read-more" target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </div>
              <img src={homeReward1} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-[0.5px] border-[#e0ee8d] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Open Positions incentives</h3>
              <div>
                RoMEX will allocate a portion of esREX tokens to open positions. You will earn esREX by just keeping
                your positions opened.{" "}
                <a href="https://docs.rollex.xyz/rewrads" className="read-more" target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </div>
              <img src={homeReward2} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
            <li className="border-[#e0ee8d] border-l-0 max-md:border-b-[0.5px] max-md:even:pr-40 max-md:odd:pl-40 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Liquidity Providers rewards</h3>
              <div>
                In addition to the protocol fees that liquidity providers will receive, RoMEX will also provide esREX
                rewards as additional incentives to Liquidity Providers.{" "}
                <a href="https://docs.rollex.xyz/rewrads" className="read-more" target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </div>
              <img src={homeReward3} alt="" className="max-md:top-20 max-md:left-8 top-16 left-12 absolute" />
            </li>
            <li className="border-l-[0.5px] border-b-0 border-[#e0ee8d] max-md:even:pr-40 max-md:odd:pl-40 max-md:border-l-0 max-md:border-b-0 relative even:text-right even:pr-60 even:pl-5 odd:pr-5 odd:pl-60">
              <h3>Referral Program</h3>
              <div>
                Reward referrals who help RoMEX attract new users. Referral users can get up to 10.0% discount on
                transaction fees, and referrers can earn up to 15% of referral transaction fee income.
                <a href="https://docs.rollex.xyz/rewrads" className="read-more" target="_blank" rel="noreferrer">
                  Learn more
                </a>
              </div>
              <img src={homeReward4} alt="" className="max-md:top-20 max-md:right-8 top-16 right-12 absolute" />
            </li>
          </ul>
        </div>

        <RoadMap/>

        <div className="Home-parnter-list">
          <h3>Powered by</h3>
          <ul className="max-md:grid-cols-2 max-md:gap-y-10 max-md:gap-x-10 grid  grid-cols-4 md:gap-x-10">
            <li className="flex  max-md:justify-start items-center justify-center" onClick={()=>linkTo('https://rollux.com')}>
              <img src={homeRollux} alt="" className="mr-5" />
              <div>Rollux</div>
            </li>
            <li className="flex max-md:justify-start items-center justify-center"  onClick={()=>linkTo('https://weconomy.network')}>
              <img src={homeWEconomy} alt="" className="mr-5" />
              <div>WEconomy</div>
            </li>
            <li className="flex max-md:justify-start items-center justify-center"  onClick={()=>linkTo('https://syscoin.org')}>
              <img src={homeSyscoin} alt="" className="mr-5" />
              <div>Syscoin</div>
            </li>
            <li className="flex max-md:justify-start items-center justify-center"  onClick={()=>linkTo('https://app.pegasys.fi')}>
              <img src={homePegasys} alt="" className="mr-5" />
              <div>Pegasys</div>
            </li>
          </ul>
        </div>
      </div>

      <Footer showRedirectModal={showRedirectModal} redirectPopupTimestamp={redirectPopupTimestamp} />
    </div>
  );
}
