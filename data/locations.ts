export type MasjidLocation = {
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  latitude: number;
  longitude: number;
  googleMapsUrl: string;
  description: string;
  highlights: string[];
};

export const locations: MasjidLocation[] = [
  {
    id: "fayetteville",
    name: "Fayetteville St. Masjid",
    slug: "fayetteville",
    address: "3034 Fayetteville St",
    city: "Durham",
    state: "NC",
    zip: "27707",
    phone: "9843774450",
    latitude: 35.8938871,
    longitude: -78.9108791,
    googleMapsUrl:
      "https://www.google.com/maps/place/Jamaat+Ibad+Ar-Rahman/@35.8938914,-78.9130678,17z",
    description:
      "Fayetteville St. Masjid is JIAR's main facility, located next to the Food Lion on 3034 Fayetteville Street. This is where our community gathers to offer the five daily prayers and the congregational Salaatul Jumu'ah on Fridays. We also offer Islamic education for adults with specific classes aimed towards brothers and sisters.",
    highlights: [
      "Main masjid for daily prayers and Jumu'ah",
      "Marriage services and community gatherings",
      "Outreach programs and social events",
      "Funeral home for janazah services since 2011",
    ],
  },
  {
    id: "parkwood",
    name: "Parkwood Masjid",
    slug: "parkwood",
    address: "5122 Revere Rd",
    city: "Durham",
    state: "NC",
    zip: "27713",
    phone: "9192372968",
    latitude: 35.9628473,
    longitude: -78.908657,
    googleMapsUrl:
      "https://www.google.com/maps/place/Jamaat+Ibad+Ar+Rahman/@35.9628516,-78.9108457,17z",
    description:
      "Parkwood Masjid is JIAR's second facility, located in the Parkwood neighborhood. The building was purchased in 2009 and is currently used as the educational center for children in our community. The highlight of this facility is Al-Huda Academy, a full-time elementary Islamic School.",
    highlights: [
      "Educational center for the community",
      "Home of Al-Huda Academy (K–5 and preschool)",
      "NC Common Core Curriculum with Arabic, Qur'an, and Islamic studies",
      "Three Jumu'ah prayer shifts on Fridays",
    ],
  },
];

export function getLocationBySlug(slug: string): MasjidLocation | undefined {
  return locations.find((loc) => loc.slug === slug);
}
