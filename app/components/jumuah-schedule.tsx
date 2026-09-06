import { jumuahSchedules } from "@/data/jumuah";

function nextFriday(): string {
  const date = new Date();
  date.setDate(date.getDate() + ((5 - date.getDay() + 7) % 7));
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Friday shifts inside a flush card: a tinted header naming the next Friday and
 * the shift count, then one ruled row per shift.
 */
export function JumuahSchedule() {
  const totalShifts = jumuahSchedules.reduce(
    (count, schedule) => count + schedule.shifts.length,
    0,
  );

  const rows = jumuahSchedules.flatMap((schedule) =>
    schedule.shifts.map((shift) => ({
      key: `${schedule.locationId}-${shift.time}`,
      time: shift.time,
      imam: shift.imam,
      location: schedule.locationName,
    })),
  );

  return (
    <div className="card card-flush">
      <div className="card-header">
        <span className="card-title tabular">{nextFriday()}</span>
        <p className="body-secondary mt-1 mb-0">
          {totalShifts} shifts held across both JIAR masjids
        </p>
      </div>

      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Imam</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <th scope="row" className="key-value whitespace-nowrap">
                  {row.time}
                </th>
                <td className="wrap">{row.imam}</td>
                <td className="wrap">{row.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
