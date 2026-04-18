function Budget() {
  return (
    <div className="card">
      <h3>Monthly Budget</h3>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "var(--text-muted)" }}>
        <span>Spent: ₹5,000</span>
        <span>Target: ₹10,000</span>
      </div>
      <div style={{ width: "100%", background: "rgba(255,255,255,0.1)", borderRadius: "8px", height: "8px", overflow: "hidden" }}>
        <div style={{ width: "50%", background: "var(--primary)", height: "100%", borderRadius: "8px" }}></div>
      </div>
    </div>
  );
}

export default Budget;