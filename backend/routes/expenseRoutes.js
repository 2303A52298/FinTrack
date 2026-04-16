const express = require("express");
const router = express.Router();

let expenses = [];

// GET all expenses
router.get("/expenses", (req, res) => {
  res.json(expenses);
});

// ADD expense
router.post("/expenses", (req, res) => {
  const { title, amount, category, date } = req.body;

  const newExpense = {
    id: Date.now(),
    title,
    amount,
    category,
    date
  };

  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

module.exports = router;