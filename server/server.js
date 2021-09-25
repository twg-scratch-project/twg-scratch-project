const express = require("express");
const app = express();
const path = require("path");
const apiRouter = require("./routes/api");
const cookieParser = require("cookie-parser");
const yelpRouter = require("./routes/yelp_api");

const colors = require("colors");
require("dotenv").config();
const PORT = process.env.PORT;

//initializing bodyParser
app.use(express.json({ extended: false }));

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

app.use(cookieParser());

app.use("/build", express.static(path.join(__dirname, "../build")));

//@route       GET api/users
//@desc         Register a user
//@access     Public

app.use("/users", require("./routes/users"));

//Yelp API ?
//see yelp-notes.txt
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});
