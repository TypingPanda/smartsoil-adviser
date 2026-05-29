import { useState } from "react"


import Card from "../components/Card"

const soilData = [
  {
    title: "Dry Soil",

    status: "Low Moisture",

    color: "#ef4444",

    description:
      "Dry soil contains very little water and may reduce plant growth.",

    details:
      "Recommended for drought-resistant crops. Increase irrigation frequency and add organic compost to improve moisture retention.",

    fertilizers:
      "Organic compost, nitrogen-rich fertilizers",

    crops:
      "Millets, Cactus, Groundnut",

    irrigation:
      "Frequent light irrigation recommended.",
  },

  {
    title: "Healthy Soil",

    status: "Balanced Moisture",

    color: "#22c55e",

    description:
      "Healthy soil supports proper nutrient absorption and crop growth.",

    details:
      "Ideal condition for most agricultural crops. Maintain balanced watering schedule and monitor weather conditions regularly.",

    fertilizers:
      "Balanced NPK fertilizers",

    crops:
      "Tomato, Potato, Maize",

    irrigation:
      "Moderate irrigation cycle recommended.",
  },

  {
    title: "Wet Soil",

    status: "High Moisture",

    color: "#3b82f6",

    description:
      "Wet soil contains excess water and may affect root oxygen levels.",

    details:
      "Reduce irrigation frequency and improve drainage system to avoid root diseases and fungal growth.",

    fertilizers:
      "Potassium-rich fertilizers",

    crops:
      "Rice, Water spinach",

    irrigation:
      "Minimal irrigation required.",
  },
]

export default function SoilGuide() {
  const [selected, setSelected] =
    useState<number | null>(null)

  return (
    <div
      style={{
        display: "flex",

        background:
          "radial-gradient(circle at top,#123524,#07140d)",

        minHeight: "100vh",

        color: "white",
      }}
    >
      

      <div
        style={{
          flex: 1,

          padding: "40px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              fontSize: "54px",

              fontWeight: 700,
            }}
          >
            Soil Guide
          </h1>

          <p
            style={{
              color: "#86efac",

              marginTop: "10px",

              fontSize: "18px",
            }}
          >
            Interactive soil knowledge center
          </p>
        </div>

        {/* INFO BANNER */}
        <div
          style={{
            background:
              "linear-gradient(90deg,#163020,#1f5134)",

            padding: "22px",

            borderRadius: "24px",

            marginBottom: "28px",
          }}
        >
          🌿 Click any card below to
          explore detailed soil
          information and farming tips.
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
  window.innerWidth < 900
    ? "1fr"
    : "1fr 1fr",

            gap: "24px",
          }}
        >
          {soilData.map((item, index) => {
            const open =
              selected === index

            return (
              <div
                key={index}

                onClick={() =>
                  setSelected(
                    open
                      ? null
                      : index
                  )
                }

                style={{
                  cursor: "pointer",
                }}
              >
                <Card>
                  <h2
                    style={{
                      marginBottom:
                        "16px",

                      fontSize: "34px",
                    }}
                  >
                    {index === 0 && "🌵 "}
{index === 1 && "🌱 "}
{index === 2 && "💧 "}

{item.title}
                  </h2>

                  <p
                    style={{
                      color:
                        "#d8f3dc",

                      fontSize: "17px",
                    }}
                  >
                    {item.description}
                  </p>

                  {/* EXPANDED INFO */}
                  {open && (
                    <div
                      style={{
                        marginTop:
                          "24px",

                        paddingTop:
                          "20px",

                        borderTop:
                          "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <p
                        style={{
                          color:
                            "#86efac",

                          lineHeight: 1.9,

                          fontSize: "16px",
                        }}
                      >
                        {
                          item.details
                        }
                      </p>

                      <button
  onClick={(e) => {
    e.stopPropagation()

    alert(
`${item.details}

🌾 Suitable Crops:
${item.crops}

🧪 Fertilizers:
${item.fertilizers}

💧 Irrigation:
${item.irrigation}`
    )
  }}

  style={{
    marginTop: "20px",

    background:
      "linear-gradient(90deg,#22c55e,#16a34a)",

    border: "none",

    padding: "12px 18px",

    borderRadius: "14px",

    color: "#04130a",

    fontWeight: 700,

    cursor: "pointer",
  }}
>
  Learn More
</button>
  
                    </div>
                  )}
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}