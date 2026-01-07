const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Auth routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/surveys", require("./routes/survey"));
app.use("/api/responses", require("./routes/response"));



// Server start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
