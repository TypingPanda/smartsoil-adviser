import { CloudSun, Droplets, Wind, Thermometer } from "lucide-react";
import GlassCard from "../common/GlassCard";

export default function WeatherWidget() {
  return (
    <GlassCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Current Weather</p>

          <h2 className="mt-2 text-4xl font-bold">
            28°C
          </h2>

          <p className="mt-2 text-green-400">
            Sunny
          </p>
        </div>

        <CloudSun
          size={64}
          className="text-yellow-400"
        />
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/5 p-4 text-center">
          <Droplets className="mx-auto mb-2 text-blue-400" />
          <p className="text-xs text-gray-400">
            Humidity
          </p>
          <p className="font-semibold">65%</p>
        </div>

        <div className="rounded-xl bg-white/5 p-4 text-center">
          <Wind className="mx-auto mb-2 text-cyan-400" />
          <p className="text-xs text-gray-400">
            Wind
          </p>
          <p className="font-semibold">8 km/h</p>
        </div>

        <div className="rounded-xl bg-white/5 p-4 text-center">
          <Thermometer className="mx-auto mb-2 text-red-400" />
          <p className="text-xs text-gray-400">
            Feels Like
          </p>
          <p className="font-semibold">30°C</p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-blue-500/10 p-4">
        <p className="font-semibold text-blue-300">
          Rain Forecast
        </p>

        <p className="mt-2 text-gray-300">
          20% chance of rainfall in the next 6 hours.
        </p>
      </div>
    </GlassCard>
  );
}