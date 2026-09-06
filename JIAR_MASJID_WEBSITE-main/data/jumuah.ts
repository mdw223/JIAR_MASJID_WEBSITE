export type JumuahShift = {
  time: string;
  imam: string;
};

export type JumuahSchedule = {
  locationId: string;
  locationName: string;
  shifts: JumuahShift[];
};

export const jumuahSchedules: JumuahSchedule[] = [
  {
    locationId: "parkwood",
    locationName: "Parkwood Masjid",
    shifts: [
      { time: "12:10 PM", imam: "Imam Mohamed AbuEita" },
      { time: "1:10 PM", imam: "Imam Sami Kocak" },
      { time: "2:10 PM", imam: "Br Zain Malik" },
    ],
  },
  {
    locationId: "fayetteville",
    locationName: "Fayetteville St. Masjid",
    shifts: [{ time: "1:00 PM", imam: "Imam Hasan Yagoub" }],
  },
];
