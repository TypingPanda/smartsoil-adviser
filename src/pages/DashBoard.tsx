import { useEffect, useState } from "react"
import SensorFeed from "../components/SensorFeed"
import Navbar from "../components/Navbar"
import Card from "../components/Card"
import Notification from "../components/Notification"
import CropGallery from "../components/CropGallery"
import { downloadReport } from "../services/pdfService"
import AnalyticsPanel from "../components/AnalyticsPanel"

import {
    getRecommendation,
  } from "../services/aiRecommendation"
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts"

import {
  getMoisture,
  getPumpStatus,
  updateSimulation,
  connectArduino,
  isSimulationMode,
} from "../services/sensorService"

const data: any[] = []

export default function Dashboard() {
    const [moisture, setMoisture] =
  useState<number | null>(null)

const [pumpOn, setPumpOn] =
  useState(false)
const [simulation] = useState(
  isSimulationMode()
)
const [monitoring, setMonitoring] =
  useState(false)
const alertMessage =
  moisture === null
    ? "🔌 Waiting for Arduino connection."
    : moisture < 30
    ? "⚠ Low moisture detected. Irrigation started."
    : "✅ Soil moisture stabilized."

const alertType =
    moisture === null
      ? "warning"
      : moisture < 30
      ? "warning"
      : "success"
const recommendation =
      moisture !== null
        ? getRecommendation(moisture)
        : {
            title:
              "🔌 Waiting for Arduino",
    
            message:
              "Connect Arduino device to receive live soil data.",
    
            crops:
              "No live recommendation available.",
          }
          useEffect(() => {
            const interval =
              setInterval(() => {
                setMoisture(
                  getMoisture()
                )
          
                setPumpOn(
                  getPumpStatus()
                )
              }, 1000)
          
            return () =>
              clearInterval(interval)
          }, [])


  return (
    <div>
  
      <Navbar />
  
      <div
        style={{
          background:
            "radial-gradient(circle at top,#123524,#07140d)",
  
          minHeight: "100vh",
  
          color: "white",
  
          padding: "40px",
        }}
      >
      

     
        {/* HERO */}
        <div
          style={{
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
                fontSize:
                window.innerWidth < 900
                  ? "34px"
                  : "54px",
              fontWeight: 700,
            }}
          >
            Soil Intelligence
          </h1>

          <p
            style={{
              color: "#86efac",
              marginTop: "10px",
              fontSize: "18px",
            }}
          >
            Real-time smart irrigation monitoring
          </p>
        </div>

        {/* TOP BANNER */}
        <div
          style={{
            background:
              "linear-gradient(90deg,#163020,#1f5134)",

            padding: "22px",

            borderRadius: "24px",

            marginBottom: "28px",

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",
          }}
        >
          <div>
            
            <h2>{simulation
  ? "⚡ Simulation Mode Active"
  : "🔌 Arduino Connected"}</h2>

            <p
              style={{
                color: "#d8f3dc",
                marginTop: "6px",
              }}
            >
              Live monitoring enabled
            </p>
          </div>

          <div
            style={{
              width: "18px",
              height: "18px",
              background: "#22c55e",
              borderRadius: "50%",

              boxShadow:
                "0 0 20px #22c55e",
            }}
          />
        </div>
        <Notification
  message={alertMessage}
  type={alertType}
/>
        <div
  style={{
    display: "flex",
    gap: "14px",
    marginBottom: "28px",
  }}
>
  <button
    onClick={connectArduino}
    style={{
      background:
        "linear-gradient(90deg,#22c55e,#16a34a)",

      border: "none",

      padding: "14px 20px",

      borderRadius: "16px",

      color: "#04130a",

      fontWeight: 700,

      cursor: "pointer",
    }}
  >
    🔌 Connect Arduino
  </button>
  <button
  onClick={() =>
    downloadReport(
      moisture,
      pumpOn
    )
  }

  style={{
    background:
      "linear-gradient(90deg,#2563eb,#1d4ed8)",

    border: "none",

    padding: "14px 20px",

    borderRadius: "16px",

    color: "white",

    fontWeight: 700,

    cursor: "pointer",
  }}
>
  📄 Download Report
</button>
  <button
  onClick={() =>
    setMonitoring(!monitoring)
  }

  style={{
    background: monitoring
      ? "linear-gradient(90deg,#22c55e,#16a34a)"
      : "rgba(255,255,255,0.06)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    padding: "14px 20px",

    borderRadius: "16px",

    color: monitoring
      ? "#04130a"
      : "white",

    fontWeight: 700,

    cursor: "pointer",
  }}
>
  {monitoring
    ? "🟢 Monitoring Active"
    : "📡 Live Monitoring"}
</button>


</div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",

            gridTemplateColumns:
  window.innerWidth < 900
    ? "1fr"
    : "repeat(3,1fr)",

            gap: "22px",
          }}
        >
          <Card>
            <p
              style={{
                color: "#86efac",
                marginBottom: "16px",
              }}
            >
              Moisture Level
            </p>

            <h1
  style={{
    fontSize: "42px",
  }}
>
  {moisture !== null
    ? `${moisture}%`
    : "No Device"}
</h1>

            <div
              style={{
                marginTop: "18px",

                height: "12px",

                background:
                  "rgba(255,255,255,0.1)",

                borderRadius: "20px",

                overflow: "hidden",
              }}
            >
              <div
                style={{
                    width:
                    moisture !== null
                      ? `${moisture}%`
                      : "0%",

                  height: "100%",

                  background:
                    "linear-gradient(90deg,#22c55e,#4ade80)",

                  borderRadius: "20px",
                }}
              />
            </div>
          </Card>

          <Card>
            <p
              style={{
                color: "#86efac",
              }}
            >
              Pump Status
            </p>

            <div
              style={{
                display: "flex",

                alignItems: "center",

                gap: "18px",

                marginTop: "22px",
              }}
            >
              <div
                style={{
                  width: "90px",
                  height: "90px",

                  borderRadius: "50%",

                  background:
                    "radial-gradient(circle,#4ade80,#166534)",

                  boxShadow:
                    "0 0 40px rgba(74,222,128,0.5)",
                }}
              />

              <h1
                style={{
                  fontSize: "70px",
                }}
              >
                {moisture === null
  ? "WAIT"
  : pumpOn
  ? "ON"
  : "OFF"}
              </h1>
            </div>
          </Card>

          <Card>
            <p
              style={{
                color: "#86efac",
              }}
            >
              Alerts
            </p>

            <h1
              style={{
                marginTop: "20px",

                fontSize: "54px",
              }}
            >
              1
            </h1>

            <p
              style={{
                color: "#fca5a5",

                marginTop: "10px",
              }}
            >
             {moisture === null
  ? "Waiting for Arduino"
  : moisture < 30
  ? "Low moisture detected"
  : "Soil moisture stable"}
            </p>
          </Card>
        </div>

        {/* CHART */}
        <div
          style={{
            marginTop: "28px",
          }}
        >
          <Card>
            <div
              style={{
                display: "flex",

                justifyContent:
                  "space-between",

                marginBottom: "20px",
              }}
            >
              <div>
                <h2>Moisture Analytics</h2>

                <p
                  style={{
                    color: "#86efac",
                    marginTop: "6px",
                  }}
                >
                  {moisture !== null
  ? "Live moisture trend"
  : "Waiting for Arduino data"}
                </p>
              </div>

              <h2
                style={{
                  color: "#22c55e",
                }}
              >
                {moisture !== null
  ? "LIVE"
  : "--"}
              </h2>
            </div>

            <div
              style={{
                height: "320px",
              }}
            >
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                {moisture !== null ? (
 
    <AreaChart data={data}>
      <defs>
        <linearGradient
          id="color"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#22c55e"
            stopOpacity={0.8}
          />

          <stop
            offset="100%"
            stopColor="#22c55e"
            stopOpacity={0}
          />
        </linearGradient>
      </defs>

      <XAxis
        dataKey="time"
        stroke="#86efac"
      />

      <Tooltip />

      <Area
        type="monotone"
        dataKey="moisture"
        stroke="#4ade80"
        fill="url(#color)"
        strokeWidth={4}
      />
    </AreaChart>
    
  
) : (
    <div
      style={{
        height: "320px",
  
        display: "flex",
  
        alignItems: "center",
  
        justifyContent: "center",
  
        color: "#86efac",
  
        fontSize: "32px",
  
        fontWeight: 700,
  
        textAlign: "center",
      }}
    >
      📡 Waiting for live Arduino data...
    </div>
  )}
  </ResponsiveContainer>
             
            </div>
          </Card>
        </div>
        <SensorFeed
  moisture={moisture}
  pumpOn={pumpOn}
/>

<AnalyticsPanel />
<CropGallery />
        {/* RECOMMENDATION */}
        <div
          style={{
            marginTop: "28px",
          }}
        >
          <Card>
  <h2>
    {recommendation.title}
  </h2>

  <p
    style={{
      color: "#d8f3dc",

      marginTop: "16px",

      lineHeight: 1.8,

      fontSize: "17px",
    }}
  >
    {recommendation.message}
  </p>

  <div
    style={{
      marginTop: "22px",
    }}
  >
    <p
      style={{
        color: "#86efac",

        marginBottom: "10px",
      }}
    >
      Recommended Crops
    </p>

    <h3>
      {recommendation.crops}
    </h3>
  </div>
</Card>
        </div>
      </div>
    </div>
)
}