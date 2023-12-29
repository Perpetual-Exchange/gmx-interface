import React from "react";
import { t } from "@lingui/macro";
import Footer from "components/Footer/Footer";
import "./Buy.css";
import TokenCard from "components/TokenCard/TokenCard";
import SEO from "components/Common/SEO";
import { getPageTitle } from "lib/legacy";
import b1 from "../../img/app-dashboard/b1.png";

export default function BuyGMXGLP() {
  return (
    <SEO title={getPageTitle(t`Buy NLP or NOX`)}>
      <div className="BuyGMXGLP page-layout Buy-page">
        <div className="BuyGMXGLP-container default-container">
          <div className="section-title-block">
            <img src={b1} className="right-b-icon" alt="" />
            <div className="section-title-content">
              <div className="Page-title">Buy NOX or NLP</div>
            </div>
          </div>
          <ul className="max-md:grid-cols-1 grid grid-cols-2 gap-20 buyrex-cards">
            <TokenCard />
          </ul>
        </div>
        <Footer />
      </div>
    </SEO>
  );
}
