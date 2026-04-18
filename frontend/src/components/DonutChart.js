function DonutChart({ transactions }) {
  const total = transactions.reduce((a, b) => a + b.amt, 0);

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h3 style={{ width: "100%", textAlign: "left" }}>Category Breakdown</h3>
      <div style={{ position: "relative", width: "150px", height: "150px", marginTop: "10px" }}>
        <svg viewBox="0 0 36 36" style={{ width: "100%", height: "100%" }}>
          <path
            className="circle-bg"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="3"
          />
          <path
            className="circle"
            strokeDasharray="60, 100"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="var(--primary)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
          <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Total</span>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>₹{total}</div>
        </div>
      </div>
    </div>
  );
}

export default DonutChart;