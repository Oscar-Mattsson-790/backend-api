require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user");
const blogRouter = require("./routes/blog");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => app.listen(PORT))
  .then(() => console.log(`Connected to the database on port ${PORT}...`));
