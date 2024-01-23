interface appsLinkType {
  href: string;
  title: string;
  subtext: string;
  avatar: string;
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
export { ProductsAppsLink, MarketsAppsLink, CompanyAppsLink, ContactAppsLink };
