const express = require("express");
// const app = express();
const path = require("path");
const app = require("./app");
// const cookieParser = require("cookie-parser");

//To do
//Yelp API ?
//see yelp-notes.txt
const yelpRouter = require("./routes/yelp_api");

const colors = require("colors");
require("dotenv").config();
const PORT = process.env.PORT;

//importing and connecting to DB in MongoDB
// Ideally, server should not run until the db is connected
const connectDB = require("./routes/config/db");
connectDB().then(() =>
  app.listen(PORT, () =>
    console.log(
      `Server running in node env: ${process.env.NODE_ENV} listening on port: ${PORT}`
        .brightCyan.bold
    )
  )
);

// include json body parser
app.use(express.json({ extended: false }));

// app.use(cookieParser());

app.use("/build", express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use((err, req, res, next) => {
  // TODO: Implement version for production (ie. less detailed error response)
  console.log('err handler ', err);
  return res.status(500).json(err);
});
