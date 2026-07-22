import { useFarm } from "../context/FarmDataContext";
import StatCard from "../components/cards/StatCard";
import MoistureChart from "../components/charts/MoistureChart";

export default function Analytics() {
  const {
    history,
    averageMoisture,
    wateringCount,
  } = useFarm();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Analytics
        </h1>

        <p className="text-gray-400">
          Farm performance overview
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <StatCard
          title="Average Moisture"
          value={`${averageMoisture.toFixed(1)}%`}
        />

        <StatCard
          title="Pump Activations"
          value={wateringCount}
        />
      </div>

      <MoistureChart history={history} />
    </div>
  );
}