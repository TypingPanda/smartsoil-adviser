import { Bell, Search, UserCircle } from "lucide-react";

export default function Navbar() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-white/10 bg-[#0f172a]/80 px-8 backdrop-blur-xl">
      <div>
        <h1 className="text-2xl font-bold text-white">
          Good Evening 👋
        </h1>

        <p className="text-sm text-gray-400">
          {today} • Smart Irrigation Dashboard
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10">
          <Search size={20} className="text-gray-300" />
        </button>

        <button className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10">
          <Bell size={20} className="text-gray-300" />
        </button>

        <button className="rounded-xl bg-green-500/20 p-2">
          <UserCircle size={34} className="text-green-400" />
        </button>
      </div>
    </header>
  );
}