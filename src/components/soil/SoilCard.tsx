import type { Soil } from "../../types/soil";

interface Props {
  soil: Soil;
}

export default function SoilCard({ soil }: Props) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-green-500 transition cursor-pointer">

<img
  src={soil.image}
  alt={soil.name}
  className="h-40 w-full rounded-2xl object-cover"
/>

      <h2 className="mt-4 text-2xl font-bold">
        {soil.name}
      </h2>

      <p className="mt-2 text-gray-400">
        {soil.description}
      </p>

      <div className="mt-5 flex justify-between">

        <div>
          <p className="text-xs text-gray-400">
            Fertility
          </p>

          <p>
            ⭐ {soil.fertility}/5
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400">
            Water
          </p>

          <p>
            💧 {soil.waterRetention}/5
          </p>
        </div>

      </div>

    </div>
  );
}