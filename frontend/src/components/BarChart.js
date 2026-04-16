function BarChart({ transactions }) {
  return (
    <div className="card">
      <h3>Bar Chart</h3>
      <div style={{ display: "flex" }}>
        {transactions.map((t) => (
          <div
            key={t.id}
            className="bar"
            style={{ height: t.amt / 5 }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default BarChart;