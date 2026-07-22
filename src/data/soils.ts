import type { Soil } from "../types/soil";

export const soils: Soil[] = [
  {
    id: 1,
    name: "Loamy Soil",
    image: "/soil/loamy.jpg",
    description:
      "A balanced mixture of sand, silt and clay. It is considered the best soil for agriculture.",
    waterRetention: 5,
    drainage: 4,
    fertility: 5,
    ph: "6.0 - 7.0",
    crops: ["Tomato", "Potato", "Corn", "Wheat"],
    tips: [
      "Add compost every season",
      "Water moderately",
      "Maintain organic matter"
    ]
  },

  {
    id: 2,
    name: "Sandy Soil",
    image: "/soil/sandy.jpg",
    description:
      "Light soil with large particles. Drains water quickly but retains fewer nutrients.",
    waterRetention: 2,
    drainage: 5,
    fertility: 2,
    ph: "5.5 - 6.5",
    crops: [
      "Carrot",
      "Groundnut",
      "Watermelon",
      "Potato"
    ],
    tips: [
      "Water frequently",
      "Add organic compost",
      "Use mulch to reduce evaporation"
    ]
  },

  {
    id: 3,
    name: "Clay Soil",
    image: "/soil/clay.jpg",
    description:
      "Heavy soil with excellent nutrient retention but slow drainage.",
    waterRetention: 5,
    drainage: 2,
    fertility: 4,
    ph: "6.0 - 7.5",
    crops: [
      "Rice",
      "Broccoli",
      "Cabbage",
      "Beans"
    ],
    tips: [
      "Avoid overwatering",
      "Improve drainage",
      "Mix with compost"
    ]
  },

  {
    id: 4,
    name: "Silt Soil",
    image: "/soil/silt.jpg",
    description:
      "Soft and fertile soil that retains moisture better than sandy soil.",
    waterRetention: 4,
    drainage: 3,
    fertility: 4,
    ph: "6.0 - 7.0",
    crops: [
      "Lettuce",
      "Onion",
      "Soybean",
      "Sugarcane"
    ],
    tips: [
      "Prevent erosion",
      "Add organic matter",
      "Avoid compaction"
    ]
  },

  {
    id: 5,
    name: "Black Soil",
    image: "/soil/black.jpg",
    description:
      "Rich black cotton soil found in many parts of India. Excellent for cotton cultivation.",
    waterRetention: 5,
    drainage: 3,
    fertility: 5,
    ph: "7.0 - 8.5",
    crops: [
      "Cotton",
      "Soybean",
      "Sunflower",
      "Sorghum"
    ],
    tips: [
      "Avoid waterlogging",
      "Deep plough before monsoon",
      "Maintain drainage"
    ]
  },

  {
    id: 6,
    name: "Red Soil",
    image: "/soil/red.jpg",
    description:
      "Iron-rich soil common in southern India. Moderately fertile and well-drained.",
    waterRetention: 3,
    drainage: 4,
    fertility: 3,
    ph: "6.0 - 7.5",
    crops: [
      "Millets",
      "Groundnut",
      "Pulses",
      "Tobacco"
    ],
    tips: [
      "Apply fertilizers regularly",
      "Add compost",
      "Monitor moisture"
    ]
  }
];