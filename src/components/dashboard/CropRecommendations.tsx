import GlassCard from "../common/GlassCard";

const crops = [
  { name: "Rice", score: 98 },
  { name: "Sugarcane", score: 93 },
  { name: "Spinach", score: 88 },
  { name: "Tomato", score: 81 },
];

export default function CropRecommendations() {
  return (
    <GlassCard>
      <h2 className="mb-6 text-xl font-semibold">
        🌱 Recommended Crops
      </h2>

      <div className="space-y-4">
        {crops.map((crop) => (
          <div
            key={crop.name}
            className="rounded-2xl bg-white/5 p-4"
          >
            <div className="flex justify-between">
              <h3 className="font-semibold">
                {crop.name}
              </h3>

              <span className="text-green-400">
                {crop.score}%
              </span>
            </div>

            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-green-400"
                style={{
                  width: `${crop.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}