const express = require("express");
const tripController = require("../controllers/tripController");
const router = express.Router();
const { validationResult } = require('express-validator');


router.get("/", (req, res) => res.send('Trip'));

router.post(
  "/", 
  tripController.validate,
  tripController.create,
  (req, res) => res.send(`Saved trip ${res.locals.savedTrip}`));


module.exports = router;