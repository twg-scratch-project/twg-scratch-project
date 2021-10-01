const express = require("express");
const morgan = require("morgan");
const colors = require("colors");

// require("dotenv").config();

const AppError = require("./utils/appError");

const app = express();

//initializing bodyParser
app.use(express.json({ extended: false }));

// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//receiving errors here!
// console.log(`error found here with get`.italic);
app.get("/api/test-route", (req, res, next) => {
  return res.status(200).json({
    status: "success",
    data: "GET request to test-route was succesful",
  });
});

//ROUTES
//API
app.use("/api", require("./routes/api"));
//User route
app.use("/users", require("./routes/users"));
//Friend route
app.use("/friends", require("./routes/friends"));
//Trip route
//To be continued...

// IMPORTANT: Make sure to write all route handling BEFORE this one.
// Handle 'page not found' error
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use((err, req, res, next) => {
  // TODO: Implement version for production (ie. less detailed error response)

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
});

module.exports = app;
