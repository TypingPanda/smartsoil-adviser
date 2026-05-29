export default function Notification({
    message,
    type,
  }: any) {
    return (
      <div
        style={{
          background:
            type === "warning"
              ? "linear-gradient(90deg,#7f1d1d,#991b1b)"
              : "linear-gradient(90deg,#14532d,#166534)",
  
          padding: "18px 22px",
  
          borderRadius: "18px",
  
          marginBottom: "24px",
  
          color: "white",
  
          fontWeight: 600,
  
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        {message}
      </div>
    )
  }