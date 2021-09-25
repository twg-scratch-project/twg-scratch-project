const colors = require("colors");
require("dotenv").config();

const globalVariables = {
  mongoURI: process.env.DATABASE,
  //   need to put this file in .env for this purpose
  jwtSecret: process.env.JWT_SECRET,
};

//console.log(globalVariables.mongoURI, "in globalVariables.js", `var`.bgBlue);

module.exports = globalVariables;
