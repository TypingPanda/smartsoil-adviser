import { useState } from "react"
import Modal from "./Modal"
const crops = [
    {
      name: "Tomato",
      moisture: "Medium Moisture",
  
      image:
  "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg",
      description:
        "Requires balanced irrigation and nutrient-rich soil.",
    },
  
    {
      name: "Maize",
      moisture: "Moderate Moisture",
  
      image:
  "https://images.pexels.com/photos/547263/pexels-photo-547263.jpeg",
  
      description:
        "Grows well in healthy moisture conditions.",
    },
  
    {
      name: "Rice",
      moisture: "High Moisture",
  
      image:
  "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg",
      description:
        "Requires high water availability and wet soil.",
    },
  
    {
      name: "Potato",
      moisture: "Low Moisture",
  
      image:
  "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg",
  
      description:
        "Suitable for cooler and controlled irrigation environments.",
    },
  ]
  
  export default function CropGallery() {
    const [selectedCrop, setSelectedCrop] =
  useState<any>(null)
    return (
    <>
      <div
        style={{
          marginTop: "28px",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
  
            color: "white",
  
            fontSize: "34px",
          }}
        >
          🌾 Recommended Crops
        </h2>
  
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
          {crops.map((crop, index) => (
            <div
              key={index}
  
              style={{
                background:
                  "rgba(17,36,26,0.75)",
  
                borderRadius: "26px",
  
                overflow: "hidden",
  
                border:
                  "1px solid rgba(255,255,255,0.06)",
  
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.25)",
              }}
            >
              <img
                src={crop.image}
  
                alt={crop.name}
  
                style={{
                  width: "100%",
  
                  height: "220px",
  
                  objectFit: "cover",
                }}
              />
  
              <div
                style={{
                  padding: "22px",
                }}
              >
                <h2
                  style={{
                    color: "white",
  
                    marginBottom: "10px",
                  }}
                >
                  {crop.name}
                </h2>
  
                <p
                  style={{
                    color: "#86efac",
  
                    marginBottom: "14px",
                  }}
                >
                  {crop.moisture}
                </p>
  
                <p
                  style={{
                    color: "#d8f3dc",
  
                    lineHeight: 1.7,
                  }}
                >
                  {crop.description}
                </p>
  
                <button
  onClick={() =>
    setSelectedCrop(crop)
  }

  style={{
    marginTop: "18px",

    background:
      "linear-gradient(90deg,#22c55e,#16a34a)",

    border: "none",

    padding:
      "12px 18px",

    borderRadius:
      "14px",

    color:
      "#04130a",

    fontWeight: 700,

    cursor:
      "pointer",
  }}
>
  View Details
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
      open={selectedCrop !== null}

      onClose={() =>
        setSelectedCrop(null)
      }

      title={selectedCrop?.name}

      content={`
${selectedCrop?.description}

Recommended Fertilizers:
Organic compost and nitrogen-rich fertilizers.

Irrigation Advice:
Maintain balanced watering schedule for healthy crop growth.
`}
    />
    </>
    )
  }