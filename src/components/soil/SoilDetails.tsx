import type { Soil } from "../../types/soil";

interface Props {
  soil: Soil;
}

export default function SoilDetails({ soil }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

      <div className="flex items-center gap-6">

      <img
  src={soil.image}
  alt={soil.name}
  className="h-40 w-full rounded-2xl object-cover"
/>

        <div>

          <h2 className="text-4xl font-bold">
            {soil.name}
          </h2>

          <p className="mt-4 text-gray-300">
            {soil.description}
          </p>

          <p className="mt-4">
            <span className="font-semibold">Ideal pH:</span> {soil.ph}
          </p>

        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl bg-zinc-800 p-5">
          <p className="text-gray-400">Water Retention</p>
          <h3 className="mt-2 text-2xl">
            💧 {soil.waterRetention}/5
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-5">
          <p className="text-gray-400">Drainage</p>
          <h3 className="mt-2 text-2xl">
            🚰 {soil.drainage}/5
          </h3>
        </div>

        <div className="rounded-2xl bg-zinc-800 p-5">
          <p className="text-gray-400">Fertility</p>
          <h3 className="mt-2 text-2xl">
            ⭐ {soil.fertility}/5
          </h3>
        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">

        <div>
          <h3 className="mb-4 text-xl font-semibold">
            🌾 Recommended Crops
          </h3>

          <ul className="space-y-2">
            {soil.crops.map((crop) => (
              <li key={crop} className="rounded-lg bg-green-500/10 p-3">
                {crop}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">
            💡 Management Tips
          </h3>

          <ul className="space-y-2">
            {soil.tips.map((tip) => (
              <li key={tip} className="rounded-lg bg-blue-500/10 p-3">
                {tip}
              </li>
            ))}
          </ul>
        </div>

      </div>

    </div>
  );
}