require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tasks = require("./Routes/Tasks");
const task = require("./Routes/Task");
const deleteTask = require("./Routes/deleteTask");
const completed = require("./Routes/completed");
const update = require("./Routes/update");

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(cors());
app.use(express.json());

app.use("/", tasks);
app.use("/", task);
app.use("/", deleteTask);
app.use("/", completed);
app.use("/", update);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
