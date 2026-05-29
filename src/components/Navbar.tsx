import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
  const location = useLocation()

  const navItems = [
    {
      name: "Dashboard",
      path: "/",
    },

    {
      name: "History",
      path: "/history",
    },

    {
      name: "Soil Guide",
      path: "/soil-guide",
    },

    
    {
      name: "Arduino",
      path: "/arduino",
    },
  ]

  return (
    <div
      style={{
        width: "100%",

        background:
          "rgba(8,20,13,0.9)",

        backdropFilter:
          "blur(18px)",

        borderBottom:
          "1px solid rgba(255,255,255,0.06)",

        padding:
          "18px 40px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        position: "sticky",

        top: 0,

        zIndex: 100,
      }}
    >
      {/* LOGO */}
      <div>
        <h1
          style={{
            color: "white",

            fontSize: "32px",
          }}
        >
          🌱 SmartSoil
        </h1>
      </div>

      {/* NAVIGATION */}
      <div
        style={{
          display: "flex",

          gap: "14px",
        }}
      >
        {navItems.map((item) => {
          const active =
            location.pathname ===
            item.path

          return (
            <Link
              key={item.path}
              to={item.path}

              style={{
                textDecoration:
                  "none",
              }}
            >
              <div
                style={{
                  padding:
                    "12px 18px",

                  borderRadius:
                    "14px",

                  color: active
                    ? "#04130a"
                    : "white",

                  background: active
                    ? "linear-gradient(90deg,#22c55e,#16a34a)"
                    : "transparent",

                  fontWeight: 600,

                  transition:
                    "0.3s",
                }}
              >
                {item.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}