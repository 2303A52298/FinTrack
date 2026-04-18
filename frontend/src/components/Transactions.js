function Transactions({ transactions }) {
  return (
    <div className="card">
      <h3>Recent Transactions</h3>

      {transactions.map((t) => (
        <div key={t.id} className="tx-item">
          <div className="tx-info">
            <span className="tx-desc">{t.desc}</span>
            <span className="tx-category">{t.category}</span>
          </div>
          <span className="tx-amt">- ₹{t.amt.toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

export default Transactions;