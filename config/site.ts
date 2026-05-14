export const siteConfig = {
  name: "Anshu Memorial Academy",
  shortName: "AMA",
  url: "https://anshumemorial.in",
  ogImage: "https://anshumemorial.in/og.jpg",
  description:
    "Anshu Memorial Academy - A premium Co-educational English Medium school following CBSE pattern in Rajapakar, Vaishali, Bihar.",
  links: {
    facebook: "https://facebook.com/anshumemorial",
    twitter: "https://twitter.com/anshumemorial",
    instagram: "https://instagram.com/anshumemorial",
  },
  contact: {
    address: "Bhatha Chowk, Bhatha Dasi, Rajapakar, Vaishali, Bihar - 844124",
    phones: ["+91 9128289100", "+91 9973757920"],
    email: "info@anshumemorial.in",
  },
  mainNav: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Academics", href: "/academics" },
    { title: "Admissions", href: "/admissions" },
    { title: "Facilities", href: "/facilities" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ],
  studentResources: [
    { title: "Result", href: "/student/result" },
    { title: "Attendance", href: "/student/attendance" },
    { title: "Fees", href: "/student/fees" },
    { title: "Login", href: "/student/login" },
  ],
};

export type SiteConfig = typeof siteConfig;
