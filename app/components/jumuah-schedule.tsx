import { jumuahSchedules } from "@/data/jumuah";

export function JumuahSchedule() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jumuahSchedules.map((schedule) => (
        <div key={schedule.locationId} className="rounded-xl border border-border bg-card p-6">
          <h3 className="text-lg font-semibold text-primary">{schedule.locationName}</h3>
          <ul className="mt-4 space-y-3">
            {schedule.shifts.map((shift) => (
              <li key={shift.time} className="flex items-start gap-3 border-b border-border pb-3 last:border-0 last:pb-0">
                <span className="rounded-md bg-accent/10 px-2.5 py-1 text-sm font-semibold text-accent">
                  {shift.time}
                </span>
                <span className="text-sm text-muted-foreground">{shift.imam}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
