export type DonationCategory = {
  id: string;
  name: string;
  description: string;
  url: string;
};

export const donationIntro = {
  email: "donate@ibadarrahman.org",
  paragraphs: [
    "JazakAllaahu Khayran for your continuous support to Jamaat Ibad Ar-Rahman. It is your donations that allow us to keep up the many community activities at JIAR.",
    "It's because of your donations and duas, that we now have recurring youth, community, dawah and women programs. We have two active schools, our own Al Misbah Hifz School and Al Qalam School. Along with the above, we are also working on many new initiatives and all that was, is and will be possible only with your support.",
    'Allah says (which can be interpreted as): "Of their wealth take alms to purify and sanctify them." [at-Tawba 9:103.] Furthermore: "He that spends his possessions [on others] so that he might grow in purity." [al-Layl 92:18.]',
  ],
};

export const donationCategories: DonationCategory[] = [
  {
    id: "masjid-operation",
    name: "Masjid Operation",
    description: "Support daily operations, utilities, and maintenance of both masjid locations.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "zakat",
    name: "Zakat-Al-Mal",
    description: "Fulfill your obligation of Zakat to support those in need within our community.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "sadaqah",
    name: "Sadaqah",
    description: "Voluntary charity to support community programs and those in need.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "masjid-building",
    name: "Masjid Building",
    description: "Contribute to the Fayetteville St. Masjid renovation and building projects.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "funeral-home",
    name: "Funeral Home",
    description: "Support janazah services and funeral home operations.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "food-pantry",
    name: "Food Pantry",
    description: "Help provide food assistance to families in need.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "dawah",
    name: "Dawah",
    description: "Support outreach and dawah programs to share Islam with the community.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
  {
    id: "islamic-school",
    name: "Islamic School",
    description: "Support Al-Misbah Qur'an Academy and Al-Qalam Triangle Academy.",
    url: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
  },
];

export const alternateDonationUrl = "https://www.paypal.com/ncp/payment/YRZYJPXG2B6FE";
