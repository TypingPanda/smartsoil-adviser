export interface AIRecommendation {
    status: string;
    statusColor: string;
    title: string;
    message: string;
    recommendation: string;
    waterSaving: string;
  }
  
  export function getAIRecommendation(
    moisture: number,
    temperature: number,
    humidity: number
  ): AIRecommendation {
  
    if (moisture < 35) {
      return {
        status: "Critical",
        statusColor: "text-red-400",
        title: "⚠ Soil is Dry",
        message:
          "Moisture has dropped below the safe threshold.",
        recommendation:
          "Start irrigation immediately for 15–20 minutes.",
        waterSaving:
          "Water saving disabled to protect crops.",
      };
    }
  
    if (moisture < 55) {
      return {
        status: "Warning",
        statusColor: "text-yellow-400",
        title: "Low Moisture",
        message:
          "Moisture is reducing gradually.",
        recommendation:
          "Prepare irrigation within the next hour.",
        waterSaving:
          "Estimated water saving: 10%",
      };
    }
  
    if (moisture < 75) {
      return {
        status: "Healthy",
        statusColor: "text-green-400",
        title: "Optimal Moisture",
        message:
          "Current soil moisture is ideal.",
        recommendation:
          "No irrigation required.",
        waterSaving:
          "Estimated water saving: 18%",
      };
    }
  
    return {
      status: "High",
      statusColor: "text-blue-400",
      title: "High Moisture",
      message:
        "Soil is becoming saturated.",
      recommendation:
        "Delay irrigation until moisture decreases.",
      waterSaving:
        "Irrigation postponed due to excess moisture.",
    };
  }