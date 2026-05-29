export default function SensorFeed({
    moisture,
    pumpOn,
  }: any) {
    const logs = [
      `[${new Date().toLocaleTimeString()}] Moisture updated`,
      `[${new Date().toLocaleTimeString()}] Pump ${
        pumpOn ? "activated" : "stopped"
      }`,
    ]
  
    return (
      <div
        style={{
          background:
            "rgba(0,0,0,0.35)",
  
          border:
            "1px solid rgba(255,255,255,0.06)",
  
          borderRadius: "24px",
  
          padding: "24px",
  
          marginTop: "28px",
  
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            display: "flex",
  
            justifyContent:
              "space-between",
  
            alignItems: "center",
  
            marginBottom: "18px",
          }}
        >
          <h2>🔌 Live Sensor Feed</h2>
  
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                background: "#22c55e",
                borderRadius: "50%",
  
                boxShadow:
                  "0 0 12px #22c55e",
              }}
            />
  
            <span
              style={{
                color: "#86efac",
              }}
            >
              Connected
            </span>
          </div>
        </div>
  
        {/* LIVE VALUES */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            marginBottom: "24px",
          }}
        >
          <div>
            <p style={{ color: "#86efac" }}>
              Moisture
            </p>
  
            <h1
              style={{
                fontSize: "42px",
              }}
            >
              {moisture}%
            </h1>
          </div>
  
          <div>
            <p style={{ color: "#86efac" }}>
              Pump
            </p>
  
            <h1
              style={{
                fontSize: "42px",
              }}
            >
              {pumpOn
                ? "🟢 ON"
                : "⚪ OFF"}
            </h1>
          </div>
        </div>
  
        {/* SERIAL LOGS */}
        <div>
          <h3
            style={{
              marginBottom: "14px",
            }}
          >
            Serial Logs
          </h3>
  
          {logs.map((log, index) => (
            <div
              key={index}
              style={{
                padding: "12px",
  
                marginBottom: "10px",
  
                background:
                  "rgba(255,255,255,0.04)",
  
                borderRadius: "12px",
  
                color: "#d8f3dc",
  
                fontSize: "14px",
              }}
            >
              {log}
            </div>
          ))}
        </div>
      </div>
    )
  }