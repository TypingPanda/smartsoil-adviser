import { Cpu, Wifi, Droplets, Thermometer, Power } from "lucide-react";
import { useFarm } from "../context/FarmDataContext";

export default function Arduino() {
  const { farmData } = useFarm();

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">Arduino Monitor</h1>
        <p className="mt-3 text-gray-400">
          Live monitoring of the SmartSoil IoT device.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
          <Cpu className="text-green-400" size={36} />
          <p className="mt-4 text-gray-400">Device</p>
          <h2 className="text-2xl font-bold">Arduino Nano</h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
          <Wifi className="text-green-400" size={36} />
          <p className="mt-4 text-gray-400">Connection</p>
          <h2 className="text-2xl font-bold text-green-400">
            Connected
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
          <Power className="text-green-400" size={36} />
          <p className="mt-4 text-gray-400">Pump</p>
          <h2 className="text-2xl font-bold">
            {farmData.pump ? "ON" : "OFF"}
          </h2>
        </div>

        <div className="rounded-3xl bg-white/5 p-6 border border-white/10">
          <Droplets className="text-cyan-400" size={36} />
          <p className="mt-4 text-gray-400">Moisture</p>
          <h2 className="text-2xl font-bold">
            {farmData.moisture}%
          </h2>
        </div>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

          <h2 className="text-2xl font-bold mb-5">
            Live Sensor Readings
          </h2>

          <div className="space-y-5">

            <div className="flex justify-between">
              <span>🌱 Soil Moisture</span>
              <span>{farmData.moisture}%</span>
            </div>

            <div className="flex justify-between">
              <span>🌡 Temperature</span>
              <span>{farmData.temperature}°C</span>
            </div>

            <div className="flex justify-between">
              <span>💧 Humidity</span>
              <span>{farmData.humidity}%</span>
            </div>

            <div className="flex justify-between">
              <span>🚰 Pump</span>
              <span>{farmData.pump ? "Running" : "Stopped"}</span>
            </div>

          </div>

        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">

          <h2 className="text-2xl font-bold mb-5">
            Device Information
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span>Board</span>
              <span>Arduino Nano</span>
            </div>

            <div className="flex justify-between">
              <span>Firmware</span>
              <span>v1.0.0</span>
            </div>

            <div className="flex justify-between">
              <span>Sampling Rate</span>
              <span>2 sec</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="text-green-400">
                Online
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}