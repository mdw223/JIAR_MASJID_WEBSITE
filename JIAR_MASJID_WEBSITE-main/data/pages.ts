export type PageContent = {
  slug: string;
  title: string;
  description?: string;
  content: string[];
  externalUrl?: string;
};

export const pageContent: Record<string, PageContent> = {
  about: {
    slug: "about",
    title: "About JIAR",
    description: "Learn about Jamaat Ibad Ar-Rahman and our mission in Durham, NC.",
    content: [
      "Jamaat Ibad Ar-Rahman (JIAR) is a vibrant Muslim community serving Durham, North Carolina and the surrounding Triangle area. With two masjid locations — Fayetteville St. Masjid and Parkwood Masjid — we provide daily prayers, Islamic education, community services, and outreach programs.",
      "Our community is committed to fostering a welcoming environment for Muslims and non-Muslims alike, offering services including funeral/janazah, marriage/nikah, aqeeqah, dawah, and sadaqah programs.",
      "JIAR operates two active Islamic schools: Al-Misbah Qur'an Academy and Al-Qalam Triangle Academy, nurturing the next generation of Muslim leaders.",
    ],
  },
  history: {
    slug: "history",
    title: "History of JIAR",
    content: [
      "Jamaat Ibad Ar-Rahman has served the Durham Muslim community for decades, growing from a small gathering to two active masjid facilities.",
      "The Fayetteville St. location became JIAR's main facility, while the Parkwood building was purchased in 2009 to serve as an educational center for the community.",
      "In 2011, JIAR constructed a funeral home at the Fayetteville St. location, enabling complete janazah services for our community.",
    ],
  },
  directors: {
    slug: "directors",
    title: "Board of Directors",
    content: [
      "The JIAR Board of Directors oversees the operations and strategic direction of Jamaat Ibad Ar-Rahman. Board members are elected by the community and serve to ensure transparent governance.",
      "For current board member information, please contact admin@ibadarrahman.org.",
    ],
  },
  trustees: {
    slug: "trustees",
    title: "Board of Trustees",
    content: [
      "The Board of Trustees provides oversight and guidance for JIAR's long-term vision and major decisions affecting the community.",
      "For current trustee information, please contact admin@ibadarrahman.org.",
    ],
  },
  bylaws: {
    slug: "bylaws",
    title: "JIAR Bylaws",
    content: [
      "The JIAR Bylaws govern the organizational structure, membership, elections, and operational procedures of Jamaat Ibad Ar-Rahman.",
      "For a copy of the current bylaws, please contact admin@ibadarrahman.org or visit the masjid office.",
    ],
  },
  imams: {
    slug: "imams",
    title: "Our Imams",
    content: [
      "JIAR is served by dedicated Imams who lead prayers, provide Islamic guidance, and teach Qur'an and Islamic studies to our community.",
      "Imam Mohamed Shaaban Aboueita serves the Parkwood Masjid community. Imam Hasan Yagoub leads Jumu'ah at Fayetteville St. Masjid. Imam Sami Kocak and Br. Zain Malik also lead Jumu'ah prayers at Parkwood.",
    ],
  },
  funeral: {
    slug: "funeral",
    title: "Funeral / Janazah Service",
    content: [
      "JIAR provides complete janazah (funeral) services at our Fayetteville St. Masjid location, including ghusl (washing of the deceased), janazah prayer, and accompaniment to the cemetery.",
      "Our funeral home was constructed in 2011 to serve the Muslim community of Durham and the surrounding area.",
      "For immediate assistance, please call the masjid at (919) 237-2968.",
    ],
  },
  marriage: {
    slug: "marriage",
    title: "Marriage / Nikah Service",
    content: [
      "JIAR offers nikah (Islamic marriage) services performed by qualified Imams. Couples should contact the masjid office to schedule a nikah ceremony.",
      "Please bring required documentation and ensure both parties have completed any pre-marriage counseling as recommended.",
    ],
  },
  aqeeqah: {
    slug: "aqeeqah",
    title: "Aqeeqah Service",
    content: [
      "Aqeeqah is the Islamic tradition of sacrificing an animal on the occasion of a child's birth. JIAR can assist community members with arranging aqeeqah services.",
      "Contact the masjid office for more information and scheduling.",
    ],
  },
  dawah: {
    slug: "dawah",
    title: "Outreach / Dawah",
    content: [
      "JIAR's dawah and outreach programs aim to share Islam with the broader Durham community through educational seminars, open house events, and community engagement.",
      "Non-Muslims interested in learning about Islam are welcome to visit our Fayetteville St. Masjid location.",
    ],
  },
  community: {
    slug: "community",
    title: "Community Activities",
    content: [
      "JIAR hosts regular community activities including youth programs, women's halaqas, family events, and seasonal celebrations such as Eid festivals.",
      "Check our events calendar and recent news for upcoming activities.",
    ],
  },
  prayers: {
    slug: "prayers",
    title: "Daily Prayers & Jumu'ah",
    content: [
      "Five daily prayers are held at both JIAR masjid locations. Jumu'ah (Friday prayer) is offered at multiple times at Parkwood and once at Fayetteville St. Masjid.",
      "See the prayer times table on our homepage for current athan and iqamah times.",
    ],
  },
  forms: {
    slug: "forms",
    title: "Forms",
    content: [
      "Various forms for JIAR services and programs are available. Please contact admin@ibadarrahman.org for specific form requests.",
    ],
  },
  "prayer-calculation": {
    slug: "prayer-calculation",
    title: "Prayer Times Calculation",
    content: [
      "JIAR uses the ISNA (Islamic Society of North America) calculation method for prayer times. Iqamah times are set by the masjid administration and may differ from calculated athan times.",
    ],
  },
  volunteer: {
    slug: "volunteer",
    title: "Volunteer",
    content: [
      "JIAR relies on community volunteers for many programs and events. Whether you can help with youth programs, community events, maintenance, or administrative tasks, your contribution is valued.",
      "Contact admin@ibadarrahman.org to learn about volunteer opportunities.",
    ],
  },
  sadaqah: {
    slug: "sadaqah",
    title: "Sadaqah Services",
    content: [
      "JIAR's sadaqah services include food pantry assistance, financial aid for community members in need, and zakat distribution.",
      "To request assistance or to contribute, please contact the masjid office.",
    ],
  },
  live: {
    slug: "live",
    title: "Live",
    content: [
      "Watch JIAR programs and events live. Check our YouTube channel for live streams and recorded content.",
    ],
    externalUrl: "https://www.youtube.com/channel/UCxLw0KyM5hbQ5NyPFQ8oEQQ/videos",
  },
  "islam-pillars": {
    slug: "islam-pillars",
    title: "5 Pillars of Islam",
    content: [
      "The five pillars of Islam are: Shahada (Declaration of Faith), Salah (Prayer), Zakat (Charity), Sawm (Fasting), and Hajj (Pilgrimage).",
      "Explore each pillar through the links in our Services menu.",
    ],
  },
  "islam-faith": {
    slug: "islam-faith",
    title: "Declaration of Faith",
    content: [
      "The Shahada is the declaration of faith: 'There is no god but Allah, and Muhammad is the Messenger of Allah.' It is the first pillar of Islam and the entry point to the Muslim faith.",
    ],
  },
  "islam-prayer": {
    slug: "islam-prayer",
    title: "Prayer (Salah)",
    content: [
      "Salah is the five daily prayers performed by Muslims. It is the second pillar of Islam and a direct connection between the believer and Allah.",
    ],
  },
  "islam-charity": {
    slug: "islam-charity",
    title: "Charity (Zakat)",
    content: [
      "Zakat is the obligatory charity that Muslims must give annually. It purifies wealth and supports those in need within the community.",
    ],
  },
  "islam-fasting": {
    slug: "islam-fasting",
    title: "Fasting (Sawm)",
    content: [
      "Sawm is fasting during the month of Ramadan, the ninth month of the Islamic calendar. Muslims abstain from food, drink, and other physical needs from dawn until sunset.",
    ],
  },
  "islam-hajj": {
    slug: "islam-hajj",
    title: "Pilgrimage (Hajj)",
    content: [
      "Hajj is the pilgrimage to Makkah that every able-bodied Muslim must perform at least once in their lifetime. It occurs during the Islamic month of Dhul Hijjah.",
    ],
  },
  "islam-articles": {
    slug: "islam-articles",
    title: "Islamic Articles",
    content: [
      "Educational articles about Islam and Muslim life. More content coming soon.",
    ],
  },
  "islam-new-muslims": {
    slug: "islam-new-muslims",
    title: "New Muslim Resources",
    content: [
      "Welcome to Islam! JIAR offers resources and support for new Muslims including classes, mentorship, and community integration.",
      "Visit our Fayetteville St. Masjid or contact admin@ibadarrahman.org for guidance.",
    ],
  },
  tajwid: {
    slug: "tajwid",
    title: "Tajwid Classes by Imam Hicham Jabal",
    content: [
      "Learn proper Qur'an recitation with Tajwid rules under the guidance of Imam Hicham Jabal.",
      "Contact the masjid for class schedules and registration.",
    ],
  },
  "tajweed-sisters": {
    slug: "tajweed-sisters",
    title: "Quran Tajweed Class for Sisters Only",
    content: [
      "Sisters-only Qur'an tajweed classes focusing on proper pronunciation and recitation rules.",
    ],
  },
  hifz: {
    slug: "hifz",
    title: "Quran Hifz Program",
    content: [
      "The Qur'an Hifz program at JIAR helps students memorize the Holy Qur'an with qualified teachers.",
    ],
  },
  "quran-beginner": {
    slug: "quran-beginner",
    title: "Qur'an Class – Beginner Level for Sisters",
    content: [
      "Beginner-level Qur'an classes designed for sisters who are starting their journey of learning to read the Qur'an.",
    ],
  },
  "islamic-basics": {
    slug: "islamic-basics",
    title: "Islamic Basics Bi-Weekly Lectures",
    content: [
      "Bi-weekly lectures covering fundamental Islamic knowledge for the community.",
    ],
  },
  "sisters-halaqa": {
    slug: "sisters-halaqa",
    title: "Sister's Quran Halaqa",
    content: [
      "A regular gathering for sisters to study and discuss the Qur'an together.",
    ],
  },
  almisbah: {
    slug: "almisbah",
    title: "Al-Misbah Qur'an Academy",
    content: [
      "Al-Misbah Qur'an Academy is JIAR's dedicated Qur'an memorization and Islamic studies program.",
      "The academy provides structured curriculum for students of all ages.",
    ],
  },
  "almisbah-calendar": {
    slug: "almisbah-calendar",
    title: "Al-Misbah Calendar",
    content: ["Academic calendar and important dates for Al-Misbah Qur'an Academy."],
  },
  "almisbah-application": {
    slug: "almisbah-application",
    title: "Al-Misbah Application",
    content: ["Apply to Al-Misbah Qur'an Academy. Contact admin@ibadarrahman.org for application forms."],
  },
  "almisbah-policies": {
    slug: "almisbah-policies",
    title: "Al-Misbah Policies & Guidelines",
    content: ["Policies and guidelines for students and families at Al-Misbah Qur'an Academy."],
  },
  "almisbah-curriculum": {
    slug: "almisbah-curriculum",
    title: "Al-Misbah Curriculum",
    content: ["Curriculum overview for Al-Misbah Qur'an Academy including Qur'an, Arabic, and Islamic studies."],
  },
  alqalam: {
    slug: "alqalam",
    title: "Al-Qalam Triangle Academy",
    content: [
      "Al-Qalam Triangle Academy provides Islamic education in the Triangle area.",
      "Visit the official website for more information.",
    ],
    externalUrl: "https://aqta.org",
  },
  membership: {
    slug: "membership",
    title: "Membership",
    content: [
      "Become a member of Jamaat Ibad Ar-Rahman to support our community and access member benefits.",
      "Apply online through our Mohid membership portal or contact the masjid office.",
    ],
  },
  events: {
    slug: "events",
    title: "Events Calendar",
    content: [
      "Stay up to date with JIAR programs, classes, and community events. Full calendar integration coming soon.",
    ],
  },
  gallery: {
    slug: "gallery",
    title: "JIAR Event Photo Gallery",
    content: [
      "Photos from JIAR community events, Eid celebrations, and programs. Gallery coming soon.",
    ],
  },
};

export function getPageContent(key: string): PageContent | undefined {
  return pageContent[key];
}

export const slugToContentKey: Record<string, string> = {
  "/about": "about",
  "/about/history": "history",
  "/about/directors": "directors",
  "/about/trustees": "trustees",
  "/about/bylaws": "bylaws",
  "/about/imams": "imams",
  "/services/funeral": "funeral",
  "/services/marriage": "marriage",
  "/services/aqeeqah": "aqeeqah",
  "/services/dawah": "dawah",
  "/services/community": "community",
  "/services/prayers": "prayers",
  "/services/forms": "forms",
  "/services/prayer-calculation": "prayer-calculation",
  "/services/volunteer": "volunteer",
  "/services/sadaqah": "sadaqah",
  "/services/live": "live",
  "/services/islam/pillars": "islam-pillars",
  "/services/islam/faith": "islam-faith",
  "/services/islam/prayer": "islam-prayer",
  "/services/islam/charity": "islam-charity",
  "/services/islam/fasting": "islam-fasting",
  "/services/islam/hajj": "islam-hajj",
  "/services/islam/articles": "islam-articles",
  "/services/islam/new-muslims": "islam-new-muslims",
  "/education/tajwid": "tajwid",
  "/education/tajweed-sisters": "tajweed-sisters",
  "/education/hifz": "hifz",
  "/education/quran-beginner": "quran-beginner",
  "/education/islamic-basics": "islamic-basics",
  "/education/sisters-halaqa": "sisters-halaqa",
  "/education/almisbah": "almisbah",
  "/education/almisbah/calendar": "almisbah-calendar",
  "/education/almisbah/application": "almisbah-application",
  "/education/almisbah/policies": "almisbah-policies",
  "/education/almisbah/curriculum": "almisbah-curriculum",
  "/education/alqalam": "alqalam",
  "/membership": "membership",
  "/events": "events",
  "/gallery": "gallery",
};
