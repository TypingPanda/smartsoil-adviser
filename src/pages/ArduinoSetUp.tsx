import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"
import Card from "../components/Card"

export default function ArduinoSetup() {
  return (
    <div
      style={{
        display: "flex",
        background: "#07140d",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Sidebar />

      <div style={{ padding: "35px", flex: 1 }}>
        <Topbar
          title="Arduino Setup"
          subtitle="Hardware connection guide"
        />

        <Card>
          <h2>🔌 Connections</h2>

          <p>
            Moisture Sensor → A0
          </p>

          <p>
            Pump Module → Pin 8
          </p>

          <p>
            Upload Arduino code using Arduino IDE.
          </p>
        </Card>
      </div>
    </div>
  )
}