export default function Modal({
    open,
    onClose,
    title,
    content,
  }: any) {
    if (!open) return null
  
    return (
      <div
        style={{
          position: "fixed",
  
          top: 0,
          left: 0,
  
          width: "100%",
  
          height: "100%",
  
          background:
            "rgba(0,0,0,0.7)",
  
          display: "flex",
  
          justifyContent:
            "center",
  
          alignItems: "center",
  
          zIndex: 999,
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(135deg,#10261a,#163b28)",
  
            width:
              window.innerWidth < 900
                ? "90%"
                : "600px",
  
            borderRadius: "28px",
  
            padding: "34px",
  
            border:
              "1px solid rgba(255,255,255,0.06)",
  
            boxShadow:
              "0 10px 40px rgba(0,0,0,0.4)",
          }}
        >
          <h1
            style={{
              color: "white",
  
              marginBottom: "20px",
            }}
          >
            {title}
          </h1>
  
          <p
            style={{
              color: "#d8f3dc",
  
              lineHeight: 1.9,
  
              fontSize: "17px",
            }}
          >
            {content}
          </p>
  
          <button
            onClick={onClose}
  
            style={{
              marginTop: "28px",
  
              background:
                "linear-gradient(90deg,#22c55e,#16a34a)",
  
              border: "none",
  
              padding:
                "14px 22px",
  
              borderRadius:
                "16px",
  
              color:
                "#04130a",
  
              fontWeight: 700,
  
              cursor:
                "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    )
  }