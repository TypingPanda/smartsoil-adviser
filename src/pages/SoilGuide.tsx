import { useEffect, useState } from "react";

import SoilCard from "../components/soil/SoilCard";
import SoilDetails from "../components/soil/SoilDetails";

import { soils } from "../data/soils";


export default function SoilGuide() {

  const [selectedSoil, setSelectedSoil] = useState(soils[0]);
  const [search, setSearch] = useState("");
  const filteredSoils = soils.filter((soil) =>
    soil.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    if (filteredSoils.length > 0) {
      setSelectedSoil(filteredSoils[0]);
    }
  }, [filteredSoils]);
  return (

    <div className="space-y-8">

<div>

<h1 className="text-5xl font-bold">
  Soil Guide
</h1>

<p className="mt-3 text-gray-400">
  Learn about different soil types and their agricultural properties.
</p>

<input
  type="text"
  placeholder="Search soil..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-white"
/>

</div>

      <div className="grid gap-6 lg:grid-cols-3">

        <div className="space-y-6">

        {filteredSoils.length === 0 && (
    <div className="rounded-xl border border-dashed border-gray-600 p-6 text-center text-gray-400">
      No soil type found.
    </div>
  )}

{filteredSoils.map((soil) => (
    
<div
key={soil.id}
onClick={() => setSelectedSoil(soil)}
className={`cursor-pointer rounded-3xl ${
  selectedSoil.id === soil.id
    ? "ring-2 ring-green-500"
    : ""
}`}
>
<SoilCard soil={soil} />
</div>

          ))}

        </div>

        <div className="lg:col-span-2">

          <SoilDetails soil={selectedSoil} />

        </div>

      </div>

    </div>

  );

}