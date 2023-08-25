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
  .connect(
    "mongodb+srv://oscarmattsson790:sodFPWun4QcUfuiD@cluster0.ntkl7ke.mongodb.net/Blog"
  )
  .then(() => app.listen(PORT))
  .then(() => console.log(`Connected to the database on port ${PORT}...`));
