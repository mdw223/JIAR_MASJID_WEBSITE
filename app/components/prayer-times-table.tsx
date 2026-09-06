import { getCombinedPrayerTimes } from "@/app/lib/prayer-times";

function gregorianDate(): string {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function hijriDate(): string {
  try {
    return new Intl.DateTimeFormat("en-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date());
  } catch {
    return "";
  }
}

/**
 * Daily timetable inside a flush card: a tinted status strip carrying the next
 * iqamah on one baseline, then one ruled row per prayer with the next prayer
 * as the single emphasised row.
 */
export async function PrayerTimesTable() {
  const rows = await getCombinedPrayerTimes();
  const nextRow = rows.find((row) => row.name !== "Sunrise");
  const hijri = hijriDate();

  return (
    <div className="card card-flush">
      <div className="status-strip">
        <span className="column-label w-full">Next iqamah</span>
        <span className="status-name">{nextRow?.name}</span>
        <span className="status-value">{nextRow?.parkwoodIqamah}</span>
        <span className="status-qualifier">Parkwood Masjid</span>
      </div>

      <div className="prayer-meta-row flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-[color:var(--border)] px-[clamp(16px,3.5vw,20px)] py-3">
        <span className="meta tabular">{gregorianDate()}</span>
        {hijri && <span className="meta tabular">· {hijri}</span>}
      </div>

      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th rowSpan={2}>Prayer</th>
              <th colSpan={2}>Fayetteville St.</th>
              <th colSpan={2} className="group-start">Parkwood</th>
            </tr>
            <tr>
              <th>Begins</th>
              <th>Iqamah</th>
              <th className="group-start">Begins</th>
              <th>Iqamah</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isSunrise = row.name === "Sunrise";
              return (
                <tr
                  key={row.name}
                  className={isSunrise ? "is-sunrise" : row.name === nextRow?.name ? "is-current" : ""}
                >
                  <th scope="row">{row.name}</th>
                  <td className="muted-time">{row.fayettevilleAthan}</td>
                  <td className="key-value">{row.fayettevilleIqamah}</td>
                  <td className="muted-time group-start">{row.parkwoodAthan}</td>
                  <td className="key-value">{row.parkwoodIqamah}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
