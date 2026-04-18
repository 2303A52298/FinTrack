function BarChart({ transactions }) {
  return (
    <div className="card">
      <h3>Expenses over Time</h3>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "12px", height: "150px", marginTop: "20px" }}>
        {transactions.map((t) => (
          <div
            key={t.id}
            className="bar"
            style={{ 
              height: `${Math.min(t.amt / 10, 150)}px`, 
              width: "40px", 
              background: "var(--primary)", 
              borderRadius: "6px 6px 0 0",
              opacity: 0.8
            }}
            title={`₹${t.amt}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;