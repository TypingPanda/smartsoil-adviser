import jsPDF from "jspdf"

export function downloadReport(
  moisture: number,
  pumpOn: boolean
) {
  const doc = new jsPDF()

  doc.setFontSize(24)

  doc.text(
    "SmartSoil Agriculture Report",
    20,
    25
  )

  doc.setFontSize(16)

  doc.text(
    `Moisture Level: ${moisture}%`,
    20,
    50
  )

  doc.text(
    `Pump Status: ${
      pumpOn ? "ON" : "OFF"
    }`,
    20,
    65
  )

  doc.text(
    `Generated: ${new Date().toLocaleString()}`,
    20,
    80
  )

  doc.text(
    "Recommendation:",
    20,
    105
  )

  doc.setFontSize(13)

  const recommendation =
    moisture < 30
      ? "Soil is dry. Irrigation required immediately."
      : "Soil moisture is healthy."

  doc.text(recommendation, 20, 120)

  doc.save("SmartSoil_Report.pdf")
}