import { getCombinedPrayerTimes } from "@/app/lib/prayer-times";
import { locations } from "@/data/locations";
import { MapPinned, Phone } from "lucide-react";
const fayetteville = locations.find(
  (location) => location.name === "Fayetteville St. Masjid"
);

const parkwood = locations.find(
  (location) => location.name === "Parkwood Masjid"
);
export async function PrayerTimesTable() {
  const rows = await getCombinedPrayerTimes();

  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
      <table className="w-full min-w-[600px] text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 font-semibold" rowSpan={2}>
              Prayer
            </th>
            <th className="border-l border-border px-4 py-3 text-center font-semibold text-primary" colSpan={2}>
              <div>Fayetteville St.</div>
                <div className="mt-1 flex justify-center gap-3 text-xs font-normal">
                  <a
                    href={fayetteville?.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <MapPinned className="h-3.5 w-3.5" />
                    {fayetteville?.address}
                  </a>
                  <a
                    href={`tel:${fayetteville?.phone}`}
                    className="hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    +1 {fayetteville?.phone}
                  </a>
                </div>
            </th>
            <th className="border-l border-border px-4 py-3 text-center font-semibold text-primary" colSpan={2}>
              <div>Parkwood</div>
                <div className="mt-1 flex justify-center gap-3 text-xs font-normal">
                  <a
                    href={parkwood?.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <MapPinned className="h-3.5 w-3.5" />
                    {parkwood?.address}
                  </a>
                  <a
                    href={`tel:${parkwood?.phone}`}
                    className="hover:underline"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    +1 {parkwood?.phone}
                  </a>
                </div>
              
            </th>
          </tr>
          <tr className="border-b border-border bg-muted/30 text-xs text-muted-foreground">
            <th className="border-l border-border px-4 py-2 text-center">Athan</th>
            <th className="px-4 py-2 text-center">Iqamah</th>
            <th className="border-l border-border px-4 py-2 text-center">Athan</th>
            <th className="px-4 py-2 text-center">Iqamah</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.name}
              className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}
            >
              <td className="px-4 py-3 font-medium">{row.name}</td>
              <td className="border-l border-border px-4 py-3 text-center">{row.fayettevilleAthan}</td>
              <td className="px-4 py-3 text-center font-medium text-accent">{row.fayettevilleIqamah}</td>
              <td className="border-l border-border px-4 py-3 text-center">{row.parkwoodAthan}</td>
              <td className="px-4 py-3 text-center font-medium text-accent">{row.parkwoodIqamah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
