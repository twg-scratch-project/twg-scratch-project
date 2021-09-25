const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

const colors = require("colors");
require("dotenv").config();
const PORT = process.env.PORT;

//importing and connecting to DB
const connectDB = require("./routes/config/db");
connectDB();

app.use("/build", express.static(path.join(__dirname, "../build")));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () =>
  console.log(
    `Server running in node env: ${process.env.NODE_ENV} listening on port: ${PORT}`
      .brightCyan.bold
  )
);
