const db = require('../config/db');
const User = require('../models/Models');
const mongoose = require("mongoose");

const apiController = {};

apiController.createUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;
        const newUser = await new User({name:name, email:email, password:password});
        await newUser.save();
        return next();
    }
    catch (err) {
        return next(err);
    }
}

apiController.findUser = async (req, res, next) => {
    try {
        const {email} = req.params;
        const user = await User.findOne({email});
        res.locals.user = user;
        return next();
    }
    catch (err) {
        return next(err);
    }
}

apiController.getTrips = async (req, res, next) => {
   console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%request body: ', req.body)
    try {
        console.log('jdhhd')
        const {id} = req.params;
        const trips = await User.findById(mongoose.Types.ObjectId(id)).select("trips").sort({startDate: 1})
        const todayDate = new Date();
        const pastTrips = [];
        const upcomingTrips = [];
        for (let i = 0; i < trips.trips.length; i++) {
        const startDate = new Date(trips.trips[i].startDate);
        if (todayDate > startDate) {pastTrips.push(trips.trips[i])}
            else {upcomingTrips.push(trips.trips[i])}

        }
        req.body.trips = {id: trips._id.toString(), pastTrips, upcomingTrips};
        return next();
    }
    catch (err) {
      next(err)
    }
}

apiController.addTrip = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {trip} = req.body; 
        //const user = await User.findOne({_id: mongoose.Types.ObjectId(id)});
        //await user.trips.push(trip);
        //await user.save();
        await User.updateOne({_id: mongoose.Types.ObjectId(id)}, {"$push": {
            "trips" : {
                "$each" : [trip],
                "$sort" : {"startDate" : 1}
            }
        }})
        return next();
    }
    catch (err) {
        return next(err)
    }
}

apiController.deleteTrip = async (req, res, next) => {
    try {
       const {id} = req.params;
       const {trip_id} = req.body;
       await User.findOneAndUpdate({_id: mongoose.Types.ObjectId(id)}, {$pull: { trips : {_id: mongoose.Types.ObjectId(trip_id)}}} )
       return next();
    }
    catch (err) {
        return next(err)
    }
}

module.exports = apiController;