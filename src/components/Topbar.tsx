export default function Topbar({
    title,
    subtitle,
  }: any) {
    return (
      <div
        style={{
          marginBottom: "30px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            margin: 0,
            color: "white",
          }}
        >
          {title}
        </h1>
  
        <p
          style={{
            color: "#86efac",
          }}
        >
          {subtitle}
        </p>
      </div>
    )
  }