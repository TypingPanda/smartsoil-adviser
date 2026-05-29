export default function AnalyticsPanel() {
    const waterUsage = null
    const pumpTime = null
    const efficiency = null
  
    return (
      <div
        style={{
          marginTop: "28px",
        }}
      >
        <h2
          style={{
            color: "white",
  
            fontSize: "34px",
  
            marginBottom: "22px",
          }}
        >
          📊 Irrigation Analytics
        </h2>
  
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
          {/* WATER USAGE */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#10261a,#163b28)",
  
              padding: "28px",
  
              borderRadius: "24px",
  
              border:
                "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                color: "#86efac",
              }}
            >
              Water Usage
            </p>
  
            <h1
              style={{
                color: "white",
  
                fontSize: "56px",
  
                marginTop: "14px",
              }}
            >
              {waterUsage !== null
  ? `${waterUsage}L`
  : "--"}
            </h1>
  
            <p
              style={{
                marginTop: "14px",
  
                color: "#d8f3dc",
              }}
            >
              Daily irrigation consumption
            </p>
          </div>
  
          {/* PUMP ACTIVE TIME */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#10261a,#163b28)",
  
              padding: "28px",
  
              borderRadius: "24px",
  
              border:
                "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                color: "#86efac",
              }}
            >
              Pump Active Time
            </p>
  
            <h1
              style={{
                color: "white",
  
                fontSize: "56px",
  
                marginTop: "14px",
              }}
            >
              {pumpTime !== null
  ? `${pumpTime}m`
  : "--"}
            </h1>
  
            <p
              style={{
                marginTop: "14px",
  
                color: "#d8f3dc",
              }}
            >
              Total runtime today
            </p>
          </div>
  
          {/* EFFICIENCY */}
          <div
            style={{
              background:
                "linear-gradient(135deg,#10261a,#163b28)",
  
              padding: "28px",
  
              borderRadius: "24px",
  
              border:
                "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p
              style={{
                color: "#86efac",
              }}
            >
              Efficiency Score
            </p>
  
            <h1
              style={{
                color: "white",
  
                fontSize: "56px",
  
                marginTop: "14px",
              }}
            >
              {efficiency !== null
  ? `${efficiency}%`
  : "--"}
            </h1>
  
            <div
              style={{
                marginTop: "18px",
  
                height: "12px",
  
                background:
                  "rgba(255,255,255,0.08)",
  
                borderRadius: "20px",
  
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width:
  efficiency !== null
    ? `${efficiency}%`
    : "0%",
  
                  height: "100%",
  
                  background:
                    "linear-gradient(90deg,#22c55e,#4ade80)",
  
                  borderRadius: "20px",
                }}
              />
            </div>
  
            <p
              style={{
                marginTop: "14px",
  
                color: "#d8f3dc",
              }}
            >
              Smart irrigation performance
            </p>
          </div>
        </div>
      </div>
    )
  }