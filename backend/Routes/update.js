const express = require("express");
const router = express.Router();
const taskModel = require("../models/task");

router.post("/update", async (req, res) => {
  const { id, content } = req.body;

  const updatedTask = await taskModel.findOneAndUpdate(
    { _id: id },
    { content: content }
  );

  res.json(updatedTask);
});

module.exports = router;
