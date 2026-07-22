import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  
  import GlassCard from "../common/GlassCard";
  
  interface Props {
    history: {
      time: string;
      moisture: number;
    }[];
  }
  
  export default function MoistureChart({
    history,
  }: Props) {
    return (
      <GlassCard>
        <h2 className="mb-6 text-xl font-semibold">
          Moisture Trend
        </h2>
  
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={history}>
              <defs>
                <linearGradient id="moisture" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
  
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
  
              <XAxis dataKey="time" stroke="#94a3b8" />
  
              <YAxis stroke="#94a3b8" />
  
              <Tooltip />
  
              <Area
                type="monotone"
                dataKey="moisture"
                stroke="#22c55e"
                strokeWidth={3}
                fill="url(#moisture)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    );
  }