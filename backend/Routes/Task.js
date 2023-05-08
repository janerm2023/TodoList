const express = require("express");
const router = express.Router();
const taskModel = require("../models/task");

router.post("/task", async (req, res) => {
  const { content } = req.body;
  const newTask = await taskModel.create({ content });

  res.json(newTask);
});

module.exports = router;
