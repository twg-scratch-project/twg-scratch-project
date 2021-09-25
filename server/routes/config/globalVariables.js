const colors = require("colors");

const globalVar = {
  mongoURI: process.env.DATABASE,
  //   need to put this file in .env for this purpose
  jwtSecret: "secret",
};

console.log(globalVar.mongoURI, "in globalVariables.js", `var`.bgBlue);

module.exports = globalVar;
