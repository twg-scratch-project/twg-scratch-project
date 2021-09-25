const models = require("../models/Users");

const expenseController = {};

expenseController.sampleApp = async (req, res, next) => {
  const newMsg = new models.HelloWorld({
    name: "test",
    numberVal: 10,
  });

  await newMsg.save();
  next();
};

module.exports = expenseController;
