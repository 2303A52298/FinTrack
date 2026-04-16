const express = require("express");
const cors = require("cors");
const app = express();

const expenseRoutes = require("./routes/expenseRoutes");

app.use(cors());
app.use(express.json());

// API route
app.use("/api", expenseRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});