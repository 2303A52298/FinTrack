function Sidebar({ setView, active }) {
  return (
    <div className="sidebar">
      <h2>💰 FinTrack</h2>

      <div
        className={`nav-item ${active === "dashboard" ? "active" : ""}`}
        onClick={() => setView("dashboard")}
      >
        Dashboard
      </div>

      <div
        className={`nav-item ${active === "analytics" ? "active" : ""}`}
        onClick={() => setView("analytics")}
      >
        Analytics
      </div>

      <div
        className={`nav-item ${active === "expenses" ? "active" : ""}`}
        onClick={() => setView("expenses")}
      >
        Expenses
      </div>
    </div>
  );
}

export default Sidebar;