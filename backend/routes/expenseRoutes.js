const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// GET all expenses
router.get("/expenses", async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ _id: -1 });
    // mapping _id to id so frontend doesn't break if it expects `id`
    const formattedExpenses = expenses.map(expense => ({
      ...expense.toObject(),
      id: expense._id
    }));
    res.json(formattedExpenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// ADD expense
router.post("/expenses", async (req, res) => {
  const { title, amount, category, date } = req.body;

  try {
    const newExpense = new Expense({
      title,
      amount,
      category,
      date
    });

    const savedExpense = await newExpense.save();
    res.status(201).json({
      ...savedExpense.toObject(),
      id: savedExpense._id
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE expense
router.delete("/expenses/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) return res.status(404).json({ message: "Expense not found" });
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;