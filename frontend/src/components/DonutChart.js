function DonutChart({ transactions }) {
  const total = transactions.reduce((a, b) => a + b.amt, 0);

  return (
    <div className="card">
      <h3>Pie Chart</h3>
      <p>Total: ₹{total}</p>
    </div>
  );
}

export default DonutChart;