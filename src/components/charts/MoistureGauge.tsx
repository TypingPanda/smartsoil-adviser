import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import GlassCard from "../common/GlassCard";

interface Props {
  moisture: number;
}

export default function MoistureGauge({ moisture }: Props) {
  const status =
    moisture < 35
      ? "Dry"
      : moisture > 75
      ? "Too Wet"
      : "Healthy";

  const message =
    moisture < 35
      ? "Irrigation recommended."
      : moisture > 75
      ? "Reduce irrigation."
      : "No irrigation required.";

  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">
          Soil Moisture
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm ${
            moisture < 35
              ? "bg-red-500/20 text-red-400"
              : moisture > 75
              ? "bg-yellow-500/20 text-yellow-400"
              : "bg-green-500/20 text-green-400"
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mx-auto mt-8 w-52">
        <CircularProgressbar
          value={moisture}
          text={`${moisture}%`}
          styles={buildStyles({
            pathColor:
              moisture < 35
                ? "#ef4444"
                : moisture > 75
                ? "#eab308"
                : "#22c55e",
            trailColor: "#1e293b",
            textColor: "#ffffff",
            textSize: "16px",
          })}
        />
      </div>

      <div className="mt-8 text-center">
        <p className="text-xl font-semibold">
          {status}
        </p>

        <p className="mt-2 text-gray-400">
          {message}
        </p>
      </div>
    </GlassCard>
  );
}