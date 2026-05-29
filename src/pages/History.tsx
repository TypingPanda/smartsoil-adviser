
import Card from "../components/Card"

import { moistureHistory } from "../data/historyData"

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts"

export default function History() {
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
            Irrigation History
          </h1>

          <p
            style={{
              color: "#86efac",
              marginTop: "10px",
            }}
          >
            Moisture reports and watering logs
          </p>
        </div>

        {/* STATS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  window.innerWidth < 900
    ? "1fr"
    : "repeat(3,1fr)",

            gap: "20px",

            marginBottom: "28px",
          }}
        >
          <Card>
            <p style={{ color: "#86efac" }}>
              Total Irrigations
            </p>

            <h1
              style={{
                marginTop: "15px",
                fontSize: "50px",
              }}
            >
              --
            </h1>
          </Card>

          <Card>
            <p style={{ color: "#86efac" }}>
              Water Used
            </p>

            <h1
              style={{
                marginTop: "15px",
                fontSize: "50px",
              }}
            >
              --
            </h1>
          </Card>

          <Card>
            <p style={{ color: "#86efac" }}>
              System Health
            </p>

            <h1
              style={{
                marginTop: "15px",
                fontSize: "50px",
                color: "#4ade80",
              }}
            >
              waiting...
            </h1>
          </Card>
        </div>

        {/* CHART */}
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
              <h2>Moisture Trend</h2>

              <p
                style={{
                  color: "#86efac",
                  marginTop: "6px",
                }}
              >
                 Connect Arduino to start collecting data
              </p>
            </div>
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
              <AreaChart
                data={moistureHistory}
              >
                <defs>
                  <linearGradient
                    id="green"
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
                  fill="url(#green)"
                  strokeWidth={4}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* TABLE */}
        <div
          style={{
            marginTop: "28px",
          }}
        >
          <Card>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Recent Activity
            </h2>

            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
              }}
            >
              <thead>
                <tr
                  style={{
                    color: "#86efac",
                    textAlign: "left",
                  }}
                >
                  <th
                    style={{
                      paddingBottom: "18px",
                    }}
                  >
                    Time
                  </th>

                  <th>
                    Moisture
                  </th>

                  <th>
                    Pump
                  </th>

                  <th>
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {moistureHistory.map(
                  (item, index) => (
                    <tr
                      key={index}
                      style={{
                        borderTop:
                          "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <td
                        style={{
                          padding:
                            "18px 0",
                        }}
                      >
                        {item.time}
                      </td>

                      <td>
                        {
                          item.moisture
                        }
                        %
                      </td>

                      <td>
                        {item.pump}
                      </td>

                      <td>
                        {item.status}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  )
}