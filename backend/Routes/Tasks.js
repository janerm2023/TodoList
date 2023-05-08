const express = require("express");
const router = express.Router();
const taskModel = require("../models/task");

router.get("/tasks", async (req, res) => {
  const tasks = await taskModel.find({}).limit(9).sort({ createdAt: -1 });
  res.json(tasks);
});

module.exports = router;
