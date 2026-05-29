export default function Card({
    children,
  }: any) {
    return (
      <div
        style={{
          background:
            "rgba(17,36,26,0.75)",
  
          backdropFilter:
            "blur(18px)",
  
          padding: "30px",
  
          borderRadius: "28px",
  
          border:
            "1px solid rgba(255,255,255,0.06)",
  
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.35)",
  
          transition: "0.3s",
        }}
      >
        {children}
      </div>
    )
  }