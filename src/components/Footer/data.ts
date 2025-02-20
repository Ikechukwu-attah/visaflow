import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type SubFooterItem = {
  id: number;
  url: string;
  item: string;
  external?: boolean;
  icon?: IconType;
};

type FooterItems = {
  id: number;
  title: string;
  footerLinks: SubFooterItem[];
};

export const footerData: FooterItems[] = [
  {
    id: 1,
    title: "Company",
    footerLinks: [
      { id: 1, item: "About Us", url: "/about" },
      { id: 2, item: "Careers", url: "/careers" },
      { id: 3, item: "Blog", url: "/blog" },
      { id: 4, item: "Press", url: "/press" },
    ],
  },

  {
    id: 2,
    title: "Support",
    footerLinks: [
      { id: 1, item: "Help Center", url: "/help" },
      { id: 2, item: "FAQs", url: "/faq" },
      { id: 3, item: "Customer Support", url: "/support" },
      { id: 4, item: "Report an Issue", url: "/report" },
    ],
  },

  {
    id: 3,
    title: "Legal",
    footerLinks: [
      { id: 1, item: "Privacy Policy", url: "/privacy-policy" },
      { id: 2, item: "Terms of Service", url: "/terms" },
      { id: 3, item: "Cookie Policy", url: "/cookies" },
      { id: 4, item: "Compliance", url: "/compliance" },
    ],
  },

  {
    id: 4,
    title: "Immigration Resources",
    footerLinks: [
      { id: 1, item: "Visa Requirements", url: "/visa-requirements" },
      { id: 2, item: "Application Process", url: "/application-process" },
      { id: 3, item: "Country Guides", url: "/country-guides" },
      { id: 4, item: "AI-Powered Assistance", url: "/ai-assistance" },
    ],
  },

  {
    id: 5,
    title: "Follow Us",
    footerLinks: [
      {
        id: 1,
        item: "LinkedIn",
        url: "https://www.linkedin.com",
        external: true,
        icon: FaLinkedin, // ✅ No TypeScript error now
      },
      {
        id: 2,
        item: "Twitter",
        url: "https://www.twitter.com",
        external: true,
        icon: FaTwitter, // ✅ No TypeScript error now
      },
      {
        id: 3,
        item: "Facebook",
        url: "https://www.facebook.com",
        external: true,
        icon: FaFacebook, // ✅ No TypeScript error now
      },
      {
        id: 4,
        item: "Instagram",
        url: "https://www.instagram.com",
        external: true,
        icon: FaInstagram, // ✅ No TypeScript error now
      },
    ],
  },
];
