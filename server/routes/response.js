const express = require("express");
const Response = require("../models/Response");

const router = express.Router();

// Submit survey response
router.post("/", async (req, res) => {
  try {
    const { surveyId, answers } = req.body;

    const response = new Response({
      surveyId,
      answers
    });

    await response.save();
    res.json({ message: "Response submitted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to submit response" });
  }
});

// Get responses by survey
router.get("/:surveyId", async (req, res) => {
  try {
    const responses = await Response.find({
      surveyId: req.params.surveyId
    });
    res.json(responses);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch responses" });
  }
});

module.exports = router;
