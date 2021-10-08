const db = require('../config/db');
const User = require('../models/Models');
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

module.exports = apiController;