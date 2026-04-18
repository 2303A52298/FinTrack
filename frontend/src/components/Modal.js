import { useState } from "react";

function Modal({ close, addExpense }) {
  const [form, setForm] = useState({
    desc: "",
    amt: "",
    category: "Food"
  });

  const handleSubmit = () => {
    if (!form.desc || !form.amt) {
      alert("Please fill all fields");
      return;
    }

    addExpense(form);

    setForm({ desc: "", amt: "", category: "Food" });
    close();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add New Transaction</h3>

        <input
          placeholder="What did you spend on?"
          value={form.desc}
          onChange={(e) =>
            setForm({ ...form, desc: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Amount (₹)"
          value={form.amt}
          onChange={(e) =>
            setForm({ ...form, amt: e.target.value })
          }
        />

        <select
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
          style={{ width: "100%", padding: "12px 16px", marginBottom: "16px", background: "rgba(0,0,0,0.2)", border: "1px solid var(--border-color)", color: "var(--text-main)", borderRadius: "8px", outline: "none" }}
        >
          <option value="Food" style={{ background: "var(--bg-dark)" }}>Food & Dining</option>
          <option value="Transport" style={{ background: "var(--bg-dark)" }}>Transportation</option>
          <option value="Shopping" style={{ background: "var(--bg-dark)" }}>Shopping</option>
          <option value="Entertainment" style={{ background: "var(--bg-dark)" }}>Entertainment</option>
          <option value="Other" style={{ background: "var(--bg-dark)" }}>Other</option>
        </select>

        <div className="modal-actions">
          <button className="btn-secondary" onClick={close}>Cancel</button>
          <button onClick={handleSubmit}>Save Transaction</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;