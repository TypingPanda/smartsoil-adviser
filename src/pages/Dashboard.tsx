import {
  Droplets,
  Power,
  Thermometer,
  ArrowUpRight,
} from "lucide-react";

import StatCard from "../components/cards/StatCard";
import MoistureGauge from "../components/charts/MoistureGauge";
import MoistureChart from "../components/charts/MoistureChart";
import WeatherWidget from "../components/dashboard/WeatherWidget";
import CropRecommendations from "../components/dashboard/CropRecommendations";
import { useFarm } from "../context/FarmDataContext";
import { getAIRecommendation } from "../utils/aiRecommendations";
import ChatWidget from "../components/chat/ChatWidget";
import { startPump, stopPump } from "../services/api";
import jsPDF from "jspdf";

export default function Dashboard() {
  const { farmData, history, events } = useFarm();
  const ai = getAIRecommendation(
    farmData.moisture,
    farmData.temperature,
    farmData.humidity
  );
  const generateReport = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(20);
    doc.text("SmartSoil AI Report", 20, 20);
  
    doc.setFontSize(12);
  
    doc.text(
      `Generated: ${new Date().toLocaleString()}`,
      20,
      35
    );
  
    doc.text(`Soil Moisture : ${farmData.moisture}%`, 20, 50);
    doc.text(`Temperature : ${farmData.temperature} °C`, 20, 60);
    doc.text(`Humidity : ${farmData.humidity}%`, 20, 70);
    doc.text(`Pump Status : ${farmData.pump ? "ON" : "OFF"}`, 20, 80);
  
    doc.text("AI Recommendation", 20, 100);
    doc.text(ai.recommendation, 20, 110);
  
    doc.save("SmartSoil_Report.pdf");
  };
  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-green-500/15 via-emerald-500/10 to-transparent p-8">
        <div className="flex items-center justify-between">
          <div>
          <div className="mb-2 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

        <span className="font-medium text-green-400">
          System Online
        </span>
      </div>

            <h1 className="text-5xl font-bold text-white">
              SmartSoil AI
            </h1>

            <p className="mt-4 max-w-2xl text-gray-400">
              AI-powered irrigation monitoring with live soil moisture,
              automated irrigation, weather intelligence and crop
              recommendations.
            </p>
          </div>

          <div className="hidden lg:flex h-24 w-24 items-center justify-center rounded-3xl bg-green-500/20">
            <ArrowUpRight
              size={42}
              className="text-green-400"
            />
          </div>
        </div>
      </section>
      <section className="grid gap-4 md:grid-cols-3">

  <button
    onClick={async () => {
      await startPump();
    }}
    className="rounded-2xl bg-green-600 p-4 hover:bg-green-700 transition"
  >
    Start Irrigation
  </button>

  <button
  onClick={generateReport}
  className="rounded-2xl bg-blue-600 p-4 hover:bg-blue-700 transition"
>
  Generate Report
</button>

  <button
    onClick={async () => {
      await stopPump();
    }}
    className="rounded-2xl bg-orange-600 p-4 hover:bg-orange-700 transition"
  >
    Emergency Stop
  </button>

</section>
      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <StatCard
          title="Soil Moisture"
          value={`${farmData.moisture}%`}
          subtitle="Optimal"
          icon={<Droplets />}
          color="text-cyan-400"
        />

        <StatCard
          title="Pump"
          value={farmData.pump ? "ON" : "OFF"}
          subtitle="Automatic Mode"
          icon={<Power />}
          color="text-green-400"
        />

        <StatCard
          title="Temperature"
          value={`${farmData.temperature}°C`}
          subtitle="Ideal"
          icon={<Thermometer />}
          color="text-orange-400"
        />
      </section>
      <section className="grid gap-6 md:grid-cols-4">

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

<h3 className="text-gray-400">
Overall Farm Health
</h3>

<h1 className="mt-3 text-5xl font-bold text-green-400">
92%
</h1>

<p className="mt-4 text-gray-300">
Excellent
</p>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

<h3 className="text-gray-400">
Water Used Today
</h3>

<h1 className="mt-3 text-4xl font-bold">
12.8 L
</h1>

<p className="mt-4 text-cyan-400">
↓ 14% from yesterday
</p>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

<h3 className="text-gray-400">
Pump Runtime
</h3>

<h1 className="mt-3 text-4xl font-bold">
2h 14m
</h1>

<p className="mt-4 text-green-400">
Today
</p>

</div>

<div className="rounded-3xl border border-white/10 bg-white/5 p-6">

<h3 className="text-gray-400">
Last Update
</h3>

<h1 className="mt-3 text-2xl font-bold">
Just now
</h1>

<p className="mt-4 text-gray-400">
Live Sensor
</p>

</div>

</section>
      {/* Charts */}
<section className="grid gap-6 lg:grid-cols-3">
  <MoistureGauge moisture={farmData.moisture} />

  <div className="lg:col-span-2">
    <MoistureChart history={history} />
  </div>
</section>

      {/* Intelligence Grid */}
      <section className="grid gap-6 lg:grid-cols-2">
        {/* AI Insights */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold">
      🤖 AI Decision Engine
    </h2>

    <span className={ai.statusColor}>
      {ai.status}
    </span>
  </div>

  <div className="mt-6 rounded-2xl bg-white/5 p-5">
    <h3 className="text-lg font-semibold">
      {ai.title}
    </h3>

    <p className="mt-3 text-gray-300">
      {ai.message}
    </p>
  </div>

  <div className="mt-5 rounded-2xl bg-blue-500/10 p-5">
    <h3 className="font-semibold text-blue-300">
      Recommendation
    </h3>

    <p className="mt-2 text-gray-300">
      {ai.recommendation}
    </p>
  </div>

  <div className="mt-5 rounded-2xl bg-green-500/10 p-5">
    <h3 className="font-semibold text-green-300">
      Water Efficiency
    </h3>

    <p className="mt-2 text-gray-300">
      {ai.waterSaving}
    </p>
  </div>
</div>
        <WeatherWidget
    temperature={farmData.temperature}
    humidity={farmData.humidity}
/>

        <CropRecommendations />

        {/* Activity */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
  <h2 className="mb-6 text-xl font-semibold">
    📋 Live Event Log
  </h2>

  <div className="space-y-3">
    {events.map((event) => (
      <div
        key={event.id}
        className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
      >
        <div
          className={`h-3 w-3 rounded-full ${
            event.type === "pump"
              ? "bg-green-400"
              : event.type === "moisture"
              ? "bg-blue-400"
              : event.type === "temperature"
              ? "bg-orange-400"
              : "bg-purple-400"
          }`}
        />

        <div className="flex-1">
          <p className="font-medium text-white">
            {event.message}
          </p>

          <p className="text-xs text-gray-400">
            {event.time}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>
      </section>
      <ChatWidget />
    </div>
  );
}