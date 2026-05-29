import { useEffect, useState } from "react"

export default function WeatherWidget() {
  const [weather, setWeather] =
    useState<any>(null)

    useEffect(() => {
      async function fetchWeather() {
        try {
          const apiKey =
            import.meta.env
              .VITE_WEATHER_API_KEY
    
          const city = "Bangalore"
    
          const response =
            await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
            )
    
          const data =
            await response.json()
    
          console.log(data)
    
          setWeather(data)
        } catch (error) {
          console.log(error)
        }
      }
    
      fetchWeather()
    }, [])
  if (!weather) {
    return (
      <div
        style={{
          marginTop: "28px",

          color: "white",
        }}
      >
        Loading weather...
      </div>
    )
  }

  const temperature =
    weather.main.temp

  const humidity =
    weather.main.humidity

  const weatherType =
    weather.weather[0].main

  const recommendation =
    humidity > 70
      ? "High humidity detected. Reduce irrigation frequency."
      : "Moderate humidity. Continue balanced irrigation."

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg,#10261a,#163b28)",

        borderRadius: "28px",

        padding: "28px",

        marginTop: "28px",

        border:
          "1px solid rgba(255,255,255,0.06)",

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

          marginBottom: "24px",
        }}
      >
        <div>
          <h2
            style={{
              color: "white",

              fontSize: "32px",
            }}
          >
            🌦 Live Weather
          </h2>

          <p
            style={{
              color: "#86efac",

              marginTop: "8px",
            }}
          >
            Real-time weather monitoring
          </p>
        </div>

        <h1
          style={{
            fontSize: "64px",
          }}
        >
          ☀️
        </h1>
      </div>

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            window.innerWidth < 900
              ? "1fr"
              : "repeat(3,1fr)",

          gap: "20px",
        }}
      >
        <div>
          <p style={{ color: "#86efac" }}>
            Temperature
          </p>

          <h1
            style={{
              color: "white",

              fontSize: "42px",
            }}
          >
            {temperature}°C
          </h1>
        </div>

        <div>
          <p style={{ color: "#86efac" }}>
            Humidity
          </p>

          <h1
            style={{
              color: "white",

              fontSize: "42px",
            }}
          >
            {humidity}%
          </h1>
        </div>

        <div>
          <p style={{ color: "#86efac" }}>
            Condition
          </p>

          <h1
            style={{
              color: "white",

              fontSize: "28px",
            }}
          >
            {weatherType}
          </h1>
        </div>
      </div>

      <div
        style={{
          marginTop: "28px",

          padding: "18px",

          borderRadius: "18px",

          background:
            "rgba(255,255,255,0.04)",
        }}
      >
        <h3
          style={{
            marginBottom: "10px",
          }}
        >
          🌱 Smart Recommendation
        </h3>

        <p
          style={{
            color: "#d8f3dc",

            lineHeight: 1.8,
          }}
        >
          {recommendation}
        </p>
      </div>
    </div>
  )
}