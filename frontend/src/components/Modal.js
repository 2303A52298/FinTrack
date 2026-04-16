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
        <h3>Add Expense</h3>

        <input
          placeholder="Title"
          value={form.desc}
          onChange={(e) =>
            setForm({ ...form, desc: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Amount"
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
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Other</option>
        </select>

        <button onClick={handleSubmit}>Add Expense</button>
        <button onClick={close}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;