export type PrayerName = "Fajr" | "Sunrise" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";

export const prayerNames: PrayerName[] = [
  "Fajr",
  "Sunrise",
  "Dhuhr",
  "Asr",
  "Maghrib",
  "Isha",
];

/** Iqamah offset in minutes after athan. Admin-editable later. */
export const iqamahOffsets: Record<string, Record<PrayerName, number>> = {
  fayetteville: {
    Fajr: 15,
    Sunrise: 0,
    Dhuhr: 10,
    Asr: 10,
    Maghrib: 5,
    Isha: 10,
  },
  parkwood: {
    Fajr: 15,
    Sunrise: 0,
    Dhuhr: 10,
    Asr: 10,
    Maghrib: 5,
    Isha: 10,
  },
};

/** ISNA method = 2 in Aladhan API */
export const PRAYER_CALCULATION_METHOD = 2;
