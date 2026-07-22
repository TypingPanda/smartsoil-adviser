import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import SoilGuide from "./pages/SoilGuide";
import Arduino from "./pages/Arduino";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/soil-guide" element={<SoilGuide />} />
          <Route path="/arduino" element={<Arduino />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}