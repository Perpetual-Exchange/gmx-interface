import ExternalLink from "components/ExternalLink/ExternalLink";
import "./Header.css";

type HomeNavLink = { label: string; link: string; isHomeLink?: boolean | false };
export function HomeHeaderNavLinks() {
  const HOME_MENUS: HomeNavLink[] = [
    {
      label: `App`,
      link: "https://dapp.romex.finance",
    },{
      label: `Docs`,
      link: "https://docs.romex.finance",
    },{
      label: `Twitter`,
      link: "https://twitter.com/REXfinance",
    },{
      label: `Discord`,
      link: "https://discord.com/invite/9MTZdXeDkq",
    },
  ];
  return (
    <div className="App-header-nav-links">
      {HOME_MENUS.map(({ link, label, isHomeLink = false }) => {
        return (
          <div key={label} className="App-header-link-container">
            <ExternalLink href={link}>{label}</ExternalLink>
          </div>
        );
      })}
    </div>
  );
}
