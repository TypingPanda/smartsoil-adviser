import { Link, useLocation } from "react-router-dom"

import {
  FaChartPie,
  FaHistory,
  FaSeedling,
  FaMicrochip,
} from "react-icons/fa"

export default function Sidebar() {
  const location = useLocation()

  const menu = [
    {
      name: "Dashboard",
      path: "/",
      icon: <FaChartPie />,
    },
    {
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      name: "Soil Guide",
      path: "/soil-guide",
      icon: <FaSeedling />,
    },
    {
      name: "Arduino Setup",
      path: "/arduino",
      icon: <FaMicrochip />,
    },
  ]

  return (
    <div
      style={{
        width:
  window.innerWidth < 900
    ? "90px"
    : "260px",
        background:
          "linear-gradient(180deg,#08140d,#0d2216)",

        minHeight: "100vh",

        padding: "30px 18px",

        borderRight:
          "1px solid rgba(255,255,255,0.05)",

        position: "sticky",

        top: 0,
      }}
    >
      <div
        style={{
          marginBottom: "50px",
        }}
      >
        <h1
          style={{
            color: "#f0fdf4",
            fontSize: "32px",
            fontWeight: 700,
          }}
        >
          🌱 SmartSoil
        </h1>

        <p
          style={{
            color: "#86efac",
            marginTop: "8px",
            fontSize: "14px",
          }}
        >
          AI Agriculture System
        </p>
      </div>

      {menu.map((item) => {
        const active =
          location.pathname === item.path

        return (
          <Link key={item.path} to={item.path}>
            <div
              style={{
                background: active
                  ? "linear-gradient(90deg,#22c55e,#16a34a)"
                  : "transparent",

                color: active
                  ? "#04130a"
                  : "#f0fdf4",

                padding: "18px",

                borderRadius: "18px",

                marginBottom: "14px",

                display: "flex",

                alignItems: "center",

                gap: "14px",

                fontWeight: 600,

                transition: "0.3s",

                boxShadow: active
                  ? "0 10px 25px rgba(34,197,94,0.25)"
                  : "none",
              }}
            >
              {item.icon}
              {window.innerWidth > 900 &&
  item.name}
            </div>
          </Link>
        )
      })}
    </div>
  )
}