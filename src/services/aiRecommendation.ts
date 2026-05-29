export function getRecommendation(
    moisture: number
  ) {
    if (moisture < 30) {
      return {
        title:
          "⚠ Dry Soil Detected",
  
        message:
          "Increase irrigation immediately. Soil moisture is critically low.",
  
        crops:
          "Rice, Sugarcane, Banana",
      }
    }
  
    if (moisture < 60) {
      return {
        title:
          "🌱 Moderate Moisture",
  
        message:
          "Soil condition is stable. Continue balanced irrigation.",
  
        crops:
          "Tomato, Potato, Maize",
      }
    }
  
    return {
      title:
        "💧 High Moisture",
  
      message:
        "Reduce irrigation. Excess water may affect crop health.",
  
      crops:
        "Rice, Water spinach",
    }
  }