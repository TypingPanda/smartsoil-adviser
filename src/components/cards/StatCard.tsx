import { ReactNode } from "react";
import GlassCard from "../common/GlassCard";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color,
}: Props) {
  return (
    <GlassCard
      className="
        group
        relative
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]
      "
    >
      {/* Glow */}
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-green-500/10 blur-3xl transition-all duration-300 group-hover:bg-green-500/20" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 text-5xl font-bold text-white">
            {value}
          </h2>

          <p className="mt-4 flex items-center gap-2 text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            {subtitle}
          </p>
        </div>

        <div
          className={`
            flex h-20 w-20 items-center justify-center
            rounded-3xl
            bg-white/5
            text-4xl
            transition-transform
            duration-300
            group-hover:scale-110
            ${color}
          `}
        >
          {icon}
        </div>
      </div>
    </GlassCard>
  );
}