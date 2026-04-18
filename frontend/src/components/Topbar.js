function Topbar({ openModal }) {
  return (
    <div className="topbar">
      <h2>Overview</h2>
      <button onClick={openModal} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        New Transaction
      </button>
    </div>
  );
}

export default Topbar;