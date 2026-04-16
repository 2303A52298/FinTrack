import React from "react";

function Sidebar({ setView, active }) {

  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="sidebar">
      <h2>💰 FinTrack</h2>

      <div
        className={`nav-item ${active === "dashboard" ? "active" : ""}`}
        onClick={() => changeView("dashboard")}
      >
        Dashboard
      </div>

      <div
        className={`nav-item ${active === "analytics" ? "active" : ""}`}
        onClick={() => changeView("analytics")}
      >
        Analytics
      </div>

      <div
        className={`nav-item ${active === "expenses" ? "active" : ""}`}
        onClick={() => changeView("expenses")}
      >
        Expenses
      </div>

    </div>
  );
}

export default Sidebar;