export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Masjids",
    children: [
      { label: "Parkwood Masjid", href: "/masjids/parkwood" },
      { label: "Fayetteville St. Masjid", href: "/masjids/fayetteville" },
      { label: "Recent News", href: "/about/news" },
      { label: "Event Photo Gallery", href: "/gallery" },
    ],
  },
  {
    label: "Membership",
    children: [
      { label: "Application", href: "/membership" },
      {
        label: "Members Login",
        href: "https://us.mohid.co/nc/durham/jamaat/masjid/member/account/signin",
      },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Funeral / Janazah Service", href: "/services/funeral" },
      { label: "Marriage / Nikah Service", href: "/services/marriage" },
      { label: "Live", href: "/services/live" },
      {
        label: "Islam",
        children: [
          { label: "5 Pillars of Islam", href: "/services/islam/pillars" },
          { label: "Declaration of Faith", href: "/services/islam/faith" },
          { label: "Prayer", href: "/services/islam/prayer" },
          { label: "Charity", href: "/services/islam/charity" },
          { label: "Fasting (Sawm)", href: "/services/islam/fasting" },
          { label: "Pilgrimage (Hajj)", href: "/services/islam/hajj" },
          { label: "Islamic Articles", href: "/services/islam/articles" },
          { label: "New Muslim Resources", href: "/services/islam/new-muslims" },
        ],
      },
      { label: "Aqeeqah", href: "/services/aqeeqah" },
      { label: "Outreach / Dawah", href: "/services/dawah" },
      { label: "Community Activities", href: "/services/community" },
      { label: "Daily Prayers & Jumu'ah", href: "/services/prayers" },
      { label: "Forms", href: "/services/forms" },
      { label: "Prayer Times Calculation", href: "/services/prayer-calculation" },
      { label: "Volunteer", href: "/services/volunteer" },
      { label: "Sadaqah Services", href: "/services/sadaqah" },
    ],
  },
  {
    label: "Education",
    children: [
      { label: "Tajwid Classes by Imam Hicham Jabal", href: "/education/tajwid" },
      { label: "Quran Tajweed Class for Sisters", href: "/education/tajweed-sisters" },
      { label: "Quran Hifz Program", href: "/education/hifz" },
      { label: "Quran Class – Beginner Sisters", href: "/education/quran-beginner" },
      { label: "Islamic Basics Bi-Weekly Lectures", href: "/education/islamic-basics" },
      { label: "Sister's Quran Halaqa", href: "/education/sisters-halaqa" },
      {
        label: "Al-Misbah Qur'an Academy",
        children: [
          { label: "About", href: "/education/almisbah" },
          { label: "Calendar", href: "/education/almisbah/calendar" },
          { label: "Application", href: "/education/almisbah/application" },
          { label: "Policies & Guidelines", href: "/education/almisbah/policies" },
          { label: "Curriculum", href: "/education/almisbah/curriculum" },
        ],
      },
      {
        label: "Al-Qalam Triangle Academy",
        children: [
          { label: "About", href: "/education/alqalam" },
          { label: "Official Website", href: "https://aqta.org" },
        ],
      },
    ],
  },
  {
    label: "About",
    children: [
      { label: "Recent News", href: "/about/news" },
      { label: "Our Imams", href: "/about/imams" },
      { label: "About JIAR", href: "/about" },
      { label: "Board of Directors", href: "/about/directors" },
      { label: "Board of Trustees", href: "/about/trustees" },
      { label: "Events Calendar", href: "/events" },
      { label: "Event Photo Gallery", href: "/gallery" },
      { label: "History of JIAR", href: "/about/history" },
      { label: "JIAR Bylaws", href: "/about/bylaws" },
      { label: "Volunteer", href: "/services/volunteer" },
      {
        label: "Join Our WhatsApp",
        href: "https://chat.whatsapp.com/KEsIdzXBHVhGv9TAIrsOBs",
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "quran-learning",
    title: "Quran Learning",
    description:
      "Tajwid, Hifz, and Qur'an classes for all ages including sisters-only programs.",
    href: "/education",
    icon: "book",
  },
  {
    id: "mosque-develop",
    title: "Mosque Development",
    description:
      "Support the Fayetteville St. Masjid renovation and community expansion projects.",
    href: "/masjids/fayetteville",
    icon: "mosque",
    featured: true,
  },
  {
    id: "funeral-service",
    title: "Funeral Service",
    description:
      "Complete janazah services including ghusl, prayer, and cemetery accompaniment.",
    href: "/services/funeral",
    icon: "crescent",
  },
  {
    id: "help-poor",
    title: "Help the Poor",
    description:
      "Food pantry, sadaqah services, and community support for families in need.",
    href: "/services/sadaqah",
    icon: "heart",
  },
];

export const constructionUpdate = {
  title: "Fayetteville St. Masjid Construction Update",
  description:
    "Considering the financial situation, and evaluating the present and future needs of the community, the Project Committee has recently recommended the JIAR board to work on the renovation option. We are currently reaching out to Architects and Contractors for Design and Construction services for the renovation of the masjid.",
  links: [
    {
      label: "Details on Replacing the Construction Project",
      href: "https://ibadarrahman.org/2021/10/01/update-on-fayetteville-st-masjid-construction-project/",
    },
    {
      label: "Update on Renovation Progress",
      href: "https://ibadarrahman.org/2022/03/03/update-on-fayetteville-masjid-renovations/",
    },
  ],
};
