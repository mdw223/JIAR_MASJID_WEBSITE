export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  externalUrl?: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "eid-al-adha-1447-2026",
    title: "Eid Al-Adha 1447 / 2026",
    date: "2026-05-22",
    excerpt: "Eid Al-Adha 1447AH announcement for the JIAR community.",
  },
  {
    slug: "ramadan-announcement-2026",
    title: "Ramadan Announcement",
    date: "2026-02-17",
    excerpt: "Ramadan moon sighting announcement for 1447AH.",
  },
  {
    slug: "full-time-imam-position",
    title: "Full Time Imam Position",
    date: "2025-10-22",
    excerpt: "JIAR is seeking a full-time Imam to serve our growing community.",
  },
  {
    slug: "retirement-imam-zouhri",
    title: "Retirement of Shk. Abdenasser Zouhri as JIAR Imam",
    date: "2025-10-22",
    excerpt: "Announcement regarding the retirement of Sheikh Abdenasser Zouhri.",
  },
  {
    slug: "eid-al-adha-1446-2025",
    title: "Eid Al-Adha 1446/2025 Announcement",
    date: "2025-05-27",
    excerpt: "Eid Al-Adha 1446AH celebration details.",
  },
  {
    slug: "eid-al-fitr-1446",
    title: "Eid Al Fitr 1446 Announcement",
    date: "2025-03-29",
    excerpt: "Eid Al-Fitr 1446AH announcement for the community.",
  },
  {
    slug: "eid-festival-1446",
    title: "JIAR Eid Al-Fitr 1446 Festival",
    date: "2025-03-28",
    excerpt: "Community Eid festival celebration details.",
  },
];
