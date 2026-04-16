import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Stats from "../components/Stats";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import Transactions from "../components/Transactions";
import Budget from "../components/Budget";
import Modal from "../components/Modal";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [view, setView] = useState("dashboard"); // ✅ NEW

  const [transactions, setTransactions] = useState([
    { id: 1, desc: "Zomato", amt: 500, category: "Food" },
    { id: 2, desc: "Uber", amt: 200, category: "Transport" }
  ]);

  const addExpense = (data) => {
    setTransactions((prev) => [
      {
        id: Date.now(),
        desc: data.desc,
        amt: Number(data.amt),
        category: data.category
      },
      ...prev
    ]);
  };

  return (
    <div className="shell">
      <Sidebar setView={setView} active={view} />

      <div className="main">
        <Topbar openModal={() => setShowModal(true)} />

        <div className="content">

          {/* ✅ DASHBOARD VIEW */}
          {view === "dashboard" && (
            <>
              <Stats transactions={transactions} />

              <div className="grid2">
                <BarChart transactions={transactions} />
                <DonutChart transactions={transactions} />
              </div>

              <div className="grid2">
                <Transactions transactions={transactions} />
                <Budget transactions={transactions} />
              </div>
            </>
          )}

          {/* ✅ EXPENSES VIEW */}
          {view === "expenses" && (
            <Transactions transactions={transactions} />
          )}

          {/* ✅ ANALYTICS VIEW */}
          {view === "analytics" && (
            <div>
              <h2>Analytics</h2>
              <BarChart transactions={transactions} />
              <DonutChart transactions={transactions} />
            </div>
          )}

        </div>
      </div>

      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          addExpense={addExpense}
        />
      )}
    </div>
  );
}

export default Dashboard;