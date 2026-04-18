function Stats({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amt, 0);

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Balance</h3>
        <p>₹{total.toLocaleString()}</p>
      </div>
      <div className="stat-card">
        <h3>Total Transactions</h3>
        <p>{transactions.length}</p>
      </div>
      <div className="stat-card">
        <h3>Average Expense</h3>
        <p>₹{Number((total / transactions.length || 0).toFixed(0)).toLocaleString()}</p>
      </div>
      <div className="stat-card">
        <h3>Max Expense</h3>
        <p>₹{Math.max(...transactions.map(t => t.amt), 0).toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Stats;