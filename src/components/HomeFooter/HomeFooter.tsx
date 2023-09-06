import cx from "classnames";
import "./HomeFooter.css";
import { isHomeSite } from "lib/legacy";
import { SOCIAL_LINKS } from "./constants";
import ExternalLink from "components/ExternalLink/ExternalLink";

type Props = { showRedirectModal?: (to: string) => void; redirectPopupTimestamp?: () => void };

export default function Footer({ showRedirectModal, redirectPopupTimestamp }: Props) {
  const isHome = isHomeSite();

  return (
    <div className="HomeFooter">
      <div className={cx("HomeFooter-wrapper", { home: isHome })}>
        <h3>Join Our Community</h3>
        <div className="HomeFooter-social-link-block">
          {SOCIAL_LINKS.map((platform) => {
            return (
              <ExternalLink key={platform.name} className="App-social-link" href={platform.link}>
                <img src={platform.icon} alt={platform.name} />
              </ExternalLink>
            );
          })}
        </div>
        <div className="HomeFooter-links">© 2023 odx.finance</div>
      </div>
    </div>
  );
}
