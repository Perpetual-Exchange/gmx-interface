import { t } from "@lingui/macro";
import "./HomeFooter.css";
import twitterIcon from "img/home-footer/twitter.svg";
import discordIcon from "img/home-footer/discord.svg";
import telegramIcon from "img/home-footer/telegram.svg";

type Link = {
  label: string;
  link: string;
  external?: boolean;
  isAppLink?: boolean;
};

type SocialLink = {
  link: string;
  name: string;
  icon: string;
};

export function getFooterLinks(isHome) {
  const FOOTER_LINKS: { home: Link[]; app: Link[] } = {
    home: [
      { label: t`Terms and Conditions`, link: "/terms-and-conditions" },
      { label: t`Referral Terms`, link: "/referral-terms" },
      { label: t`Media Kit`, link: "https://gmxio.gitbook.io/gmx/media-kit", external: true },
      // { label: "Jobs", link: "/jobs", isAppLink: true },
    ],
    app: [
      { label: t`Media Kit`, link: "https://gmxio.gitbook.io/gmx/media-kit", external: true },
      // { label: "Jobs", link: "/jobs" },
    ],
  };
  return FOOTER_LINKS[isHome ? "home" : "app"];
}

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "https://twitter.com/NeonNexus_io", name: "Twitter", icon: twitterIcon },
  { link: "https://discord.gg/qcm7qm4dJT", name: "Discord", icon: discordIcon },
  { link: "https://t.me/neonnexus_io", name: "Discord", icon: telegramIcon },
];
