const express = require("express");
const router = express.Router();
const taskModel = require("../models/task");

router.post("/deleteTask", async (req, res) => {
  const { id } = req.body;
  const task = await taskModel.deleteOne({ _id: id });
  res.json(task);
});

module.exports = router;
