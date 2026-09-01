import { getCombinedPrayerTimes } from "@/app/lib/prayer-times";

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
              Fayetteville St.
            </th>
            <th className="border-l border-border px-4 py-3 text-center font-semibold text-primary" colSpan={2}>
              Parkwood
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
