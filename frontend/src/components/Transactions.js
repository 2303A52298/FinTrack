function Transactions({ transactions }) {
  return (
    <div className="card">
      <h3>Transactions</h3>

      {transactions.map((t) => (
        <div key={t.id} className="tx-item">
          <span>{t.desc} ({t.category})</span>
          <span>₹{t.amt}</span>
        </div>
      ))}
    </div>
  );
}

export default Transactions;