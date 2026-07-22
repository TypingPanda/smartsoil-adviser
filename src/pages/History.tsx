import { useFarm } from "../context/FarmDataContext";
import MoistureChart from "../components/charts/MoistureChart";
import HistoryTable from "../components/history/HistoryTable";

export default function History() {
    const { history } = useFarm();

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold text-white">
          Sensor History
        </h1>

        <p className="mt-2 text-gray-400">
          View previous soil moisture readings and trends.
        </p>
      </div>

      {/* Chart */}
      <MoistureChart history={history} />

      {/* Table */}
      <HistoryTable history={history} />
    </div>
  );
}