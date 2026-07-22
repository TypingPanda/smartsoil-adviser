import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  History,
  BookOpen,
  Cpu,
  Leaf,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <LayoutDashboard size={20} />,
  },
  {
    name: "History",
    path: "/history",
    icon: <History size={20} />,
  },
  {
    name: "Soil Guide",
    path: "/soil-guide",
    icon: <BookOpen size={20} />,
  },
  {
    name: "Arduino",
    path: "/arduino",
    icon: <Cpu size={20} />,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-white/10 bg-[#0b1220] px-6 py-8">
      <div className="mb-12 flex items-center gap-3">
        <div className="rounded-xl bg-green-500/20 p-3">
          <Leaf className="text-green-400" size={24} />
        </div>

        <div>
          <h1 className="text-xl font-bold text-white">
            SmartSoil AI
          </h1>

          <p className="text-sm text-gray-400">
            Smart Irrigation
          </p>
        </div>
      </div>

      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                isActive
                  ? "bg-green-500 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            {link.icon}
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto pt-16">
        <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
          <p className="text-sm text-green-300">
            ● System Online
          </p>
        </div>
      </div>
    </aside>
  );
}