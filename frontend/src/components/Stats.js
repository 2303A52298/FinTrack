function Stats({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amt, 0);

  return (
    <div className="stats-grid">
      <div className="stat-card">Total: ₹{total}</div>
      <div className="stat-card">Count: {transactions.length}</div>
      <div className="stat-card">Avg: ₹{(total / transactions.length || 0).toFixed(0)}</div>
      <div className="stat-card">Max: ₹{Math.max(...transactions.map(t => t.amt), 0)}</div>
    </div>
  );
}

export default Stats;