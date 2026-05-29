import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Dashboard from "./pages/DashBoard"
import History from "./pages/History"
import SoilGuide from "./pages/SoilGuide"
import ArduinoSetup from "./pages/ArduinoSetup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/soil-guide" element={<SoilGuide />} />
        <Route path="/arduino" element={<ArduinoSetup />} />
      </Routes>
    </BrowserRouter>
  )
}