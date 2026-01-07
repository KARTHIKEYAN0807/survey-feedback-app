const express = require("express");
const Survey = require("../models/Survey");

const router = express.Router();

// Create survey
router.post("/", async (req, res) => {
  try {
    const { title, questions, createdBy } = req.body;

    const survey = new Survey({
      title,
      questions,
      createdBy
    });

    await survey.save();
    res.json(survey);
  } catch (err) {
    res.status(500).json({ message: "Failed to create survey" });
  }
});

// Get all surveys
router.get("/", async (req, res) => {
  try {
    const surveys = await Survey.find().sort({ createdAt: -1 });
    res.json(surveys);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch surveys" });
  }
});

module.exports = router;
