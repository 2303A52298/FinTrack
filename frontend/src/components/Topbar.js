function Topbar({ openModal }) {
  return (
    <div className="topbar">
      <h2>Dashboard</h2>
      <button onClick={openModal}>+ Add Expense</button>
    </div>
  );
}

export default Topbar;