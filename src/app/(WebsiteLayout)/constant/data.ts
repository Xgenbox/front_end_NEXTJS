interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
}
interface chipType {
  title: string;
  subtext: string;
  icon: string;
}

const ProductsAppsLink: appsLinkType[] = [
  // {
  //   href: "/apps/chats",
  //   title: "Chat Application",
  //   subtext: "New messages arrived",
  //   avatar: "/images/svgs/icon-dd-chat.svg",
  // },
  // {
  //   href: "/apps/ecommerce/shop",
  //   title: "eCommerce App",
  //   subtext: "New stock available",
  //   avatar: "/images/svgs/icon-dd-cart.svg",
  // },
  // {
  //   href: "/apps/notes",
  //   title: "Notes App",
  //   subtext: "To-do and Daily tasks",
  //   avatar: "/images/svgs/icon-dd-invoice.svg",
  // },
  // {
  //   href: "/apps/calendar",
  //   title: "Calendar App",
  //   subtext: "Get dates",
  //   avatar: "/images/svgs/icon-dd-date.svg",
  // },
  {
    href: "#",
    title: "Smart Box",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-mobile.svg",
  },
  // {
  //   href: "/apps/tickets",
  //   title: "Tickets App",
  //   subtext: "Submit tickets",
  //   avatar: "/images/svgs/icon-dd-lifebuoy.svg",
  // },
  // {
  //   href: "/apps/email",
  //   title: "Email App",
  //   subtext: "Get new emails",
  //   avatar: "/images/svgs/icon-dd-message-box.svg",
  // },
  {
    href: "#",
    title: "Fleet Management Platform",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-application.svg",
  },
];
const MarketsAppsLink: appsLinkType[] = [
  {
    href: "#",
    title: "Smart Cities",
    subtext: "Discover more details here",
    avatar: "/images/icons8/smart-city.png",
  },
  {
    href: "#",
    title: "Commercial Establishment",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-cart.svg",
  },
  {
    href: "#",
    title: "Private Organization",
    subtext: "Discover more details here",
    avatar: "/images/icons8/private-organization.png",
  },
  {
    href: "#",
    title: "Waste Collectors",
    subtext: "Discover more details here",
    avatar: "/images/icons8/waste-collectors.png",
  },
];

const CompanyAppsLink: appsLinkType[] = [
  {
    href: "#",
    title: "About Company",
    subtext: "Discover more details here",
    avatar: "/images/icons8/company.png",
  },
  {
    href: "#",
    title: "Partnership Opportunities",
    subtext: "Discover more details here",
    avatar: "/images/icons8/partnership.png",
  },
];
const ContactAppsLink: appsLinkType[] = [
  {
    href: "#",
    title: "Contact Details",
    subtext: "Discover more details here",
    avatar: "/images/svgs/icon-dd-chat.svg",
  },
  {
    href: "#",
    title: "Quote Request",
    subtext: "Discover more details here",
    avatar: "/images/icons8/quote.png",
  },
  {
    href: "#",
    title: "Technical Assistance",
    subtext: "Discover more details here",
    avatar: "/images/icons8/technical-assistance.png",
  },
];

const SmartBoxChipsData1: chipType[] = [
  {
    title: "Powered by solar energy",
    subtext:
      " Eco-friendly and sustainable, harnessing solar energy for efficient power generation.",
    icon: "heroicons:sun",
  },
  {
    title: "Wireless data transmission",
    subtext:
      "Wireless data transmission involves sending information over distances without physical connections or wires.",
    icon: "heroicons:chart-bar",
  },
  {
    title: "Safety sensorsSafety sensors",
    subtext:
      "Safety sensors are devices designed to detect hazards and prevent accidents in various environments.",
    icon: "heroicons:lock-closed",
  },
  {
    title: "GPS location tracking",
    subtext:
      "GPS location tracking enables real-time monitoring and positioning of objects or individuals globally.",
    icon: "heroicons:map",
  },
];
const SmartBoxChipsData2: chipType[] = [
  {
    title: "Graphic wraps",
    subtext:
      "Graphic wraps are customizable, visually striking vinyl coverings applied to vehicles or surfaces for advertising or aesthetic purposes.",
    icon: "heroicons:printer",
  },
  {
    title: "Advertisement signage",
    subtext:
      "Advertisement signage: visually impactful displays for promoting brands, products, or services.",
    icon: "heroicons:photo",
  },
  {
    title: "WI-FI router",
    subtext:
      "A Wi-Fi router is a device that provides wireless internet connectivity to various devices within a network.",
    icon: "heroicons:wifi",
  },
  {
    title: "mounting bracket",
    subtext:
      "A mounting bracket is a hardware device used to attach objects securely to a surface or structure.",
    icon: "heroicons:wrench-screwdriver",
  },
  {
    title: "Ashtray ",
    subtext:
      "An ashtray is a receptacle for ash and cigarette butts, typically used by smokers.",
    icon: "mdi:smoking",
  },
];
export {
  ProductsAppsLink,
  MarketsAppsLink,
  CompanyAppsLink,
  ContactAppsLink,
  SmartBoxChipsData1,
  SmartBoxChipsData2,
};
