const express = require("express");
const router = express.Router();
const taskModel = require("../models/task");

router.post("/complete", async (req, res) => {
  const { completed, id } = req.body;

  const updated = await taskModel.findOneAndUpdate(
    { _id: id },
    { completed: !completed }
  );

  res.json({ status: true, completed: updated.completed });
});

module.exports = router;
