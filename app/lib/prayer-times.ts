import {
  iqamahOffsets,
  PRAYER_CALCULATION_METHOD,
  prayerNames,
  type PrayerName,
} from "@/data/prayer-config";
import { locations } from "@/data/locations";

export type PrayerTimeRow = {
  name: PrayerName;
  fayettevilleAthan: string;
  fayettevilleIqamah: string;
  parkwoodAthan: string;
  parkwoodIqamah: string;
};

type AladhanTimings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
};

function addMinutes(time: string, minutes: number): string {
  if (minutes === 0) return time;
  const [hours, mins] = time.split(":").map(Number);
  const total = hours * 60 + mins + minutes;
  const h = Math.floor(total / 60) % 24;
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function formatTime12h(time: string): string {
  const [hours, mins] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const h = hours % 12 || 12;
  return `${h}:${String(mins).padStart(2, "0")} ${period}`;
}

async function fetchPrayerTimings(
  latitude: number,
  longitude: number,
): Promise<AladhanTimings | null> {
  const today = new Date();
  const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
  const url = `https://api.aladhan.com/v1/timings/${dateStr}?latitude=${latitude}&longitude=${longitude}&method=${PRAYER_CALCULATION_METHOD}`;

  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    const timings = data?.data?.timings;
    if (!timings) return null;
    return {
      Fajr: timings.Fajr?.split(" ")[0] ?? "",
      Sunrise: timings.Sunrise?.split(" ")[0] ?? "",
      Dhuhr: timings.Dhuhr?.split(" ")[0] ?? "",
      Asr: timings.Asr?.split(" ")[0] ?? "",
      Maghrib: timings.Maghrib?.split(" ")[0] ?? "",
      Isha: timings.Isha?.split(" ")[0] ?? "",
    };
  } catch {
    return null;
  }
}

export async function getCombinedPrayerTimes(): Promise<PrayerTimeRow[]> {
  const fayetteville = locations.find((l) => l.id === "fayetteville")!;
  const parkwood = locations.find((l) => l.id === "parkwood")!;

  const [fayTimings, parkTimings] = await Promise.all([
    fetchPrayerTimings(fayetteville.latitude, fayetteville.longitude),
    fetchPrayerTimings(parkwood.latitude, parkwood.longitude),
  ]);

  if (!fayTimings || !parkTimings) {
    return prayerNames.map((name) => ({
      name,
      fayettevilleAthan: "-",
      fayettevilleIqamah: "-",
      parkwoodAthan: "-",
      parkwoodIqamah: "-",
    }));
  }

  return prayerNames.map((name) => {
    const fayAthan = fayTimings[name];
    const parkAthan = parkTimings[name];
    const fayOffset = iqamahOffsets.fayetteville[name];
    const parkOffset = iqamahOffsets.parkwood[name];

    return {
      name,
      fayettevilleAthan: formatTime12h(fayAthan),
      fayettevilleIqamah:
        name === "Sunrise" ? "-" : formatTime12h(addMinutes(fayAthan, fayOffset)),
      parkwoodAthan: formatTime12h(parkAthan),
      parkwoodIqamah:
        name === "Sunrise" ? "-" : formatTime12h(addMinutes(parkAthan, parkOffset)),
    };
  });
}
