import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { FarmDataProvider } from "./context/FarmDataContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FarmDataProvider>
      <App />
    </FarmDataProvider>
  </React.StrictMode>
);