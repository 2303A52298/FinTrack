import React from "react";

function Sidebar({ setView, active }) {
  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="sidebar">
      <h2>
        <span style={{ fontSize: "1.8rem" }}>💸</span> FinTrack
      </h2>

      <div
        className={`nav-item ${active === "dashboard" ? "active" : ""}`}
        onClick={() => changeView("dashboard")}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        Dashboard
      </div>

      <div
        className={`nav-item ${active === "analytics" ? "active" : ""}`}
        onClick={() => changeView("analytics")}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
        Analytics
      </div>

      <div
        className={`nav-item ${active === "expenses" ? "active" : ""}`}
        onClick={() => changeView("expenses")}
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        Expenses
      </div>
    </div>
  );
}

export default Sidebar;