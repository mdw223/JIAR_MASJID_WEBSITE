import { siteDefaults } from "@/data/site";
import { locations } from "@/data/locations";

export const siteConfig = {
  name: siteDefaults.name,
  shortName: siteDefaults.shortName,
  tagline: siteDefaults.tagline,
  description: siteDefaults.description,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ibadarrahman.org",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "9192372968",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "admin@ibadarrahman.org",
  donateEmail: "donate@ibadarrahman.org",
  locations,
  social: {
    facebook: "https://www.facebook.com/jamaatIbadArRahman",
    instagram: "https://www.instagram.com/jiardurham/",
    youtube: "https://www.youtube.com/channel/UCxLw0KyM5hbQ5NyPFQ8oEQQ/videos",
    twitter: "https://twitter.com/jiarnews",
    whatsapp: "https://chat.whatsapp.com/KEsIdzXBHVhGv9TAIrsOBs",
  },
  mohid: {
    donation: "https://us.mohid.co/nc/durham/jamaat/masjid/online/donation",
    membership: "https://us.mohid.co/nc/durham/jamaat/masjid/member/account/signin",
  },
} as const;

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\D/g, "")}`;
}

export function formatPhoneDisplay(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits.startsWith("1")) {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return phone;
}

export function formatAddress(location: (typeof locations)[0]): string {
  return `${location.address}, ${location.city}, ${location.state} ${location.zip}`;
}
