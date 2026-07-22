import GlassCard from "../common/GlassCard";

interface Row {
  time: string;
  moisture: number;
}

interface Props {
  history: Row[];
}

export default function HistoryTable({ history }: Props) {
  return (
    <GlassCard>
      <h2 className="mb-6 text-xl font-semibold">
        Sensor Readings
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="border-b border-white/10 text-gray-400">
              <th className="pb-3">Time</th>
              <th className="pb-3">Moisture</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {[...history].reverse().map((row) => (
              <tr
                key={row.time}
                className="border-b border-white/5"
              >
                <td className="py-4">{row.time}</td>

                <td>{row.moisture}%</td>

                <td>
                  {row.moisture < 35 ? (
                    <span className="text-red-400">
                      Dry
                    </span>
                  ) : row.moisture > 75 ? (
                    <span className="text-yellow-400">
                      Wet
                    </span>
                  ) : (
                    <span className="text-green-400">
                      Healthy
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
}