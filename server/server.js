const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");

app.use("/build", express.static(path.join(__dirname, "../build")));

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000, () => console.log("Server started on port 3000"));
