const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {};

// login
authController.logIn = async (req, res, next) => {
  // get attributes from request
  const { email, password } = req.body;

  // look for the user in db
  const userRecord = await User.findOne({ email });

  if (userRecord) {
    //found the user, check if the credentials match those provided from the req
    const hashMatch = await bcrypt.compare(password, userRecord.password);

    if (hashMatch) { // credentials are good

      // prepare a payload for the JWT
      const payload = {
        user: {
          id: userRecord.id,
        }
      };

      // create the encoded jwt token
      const token = await jwt.sign(payload,
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 });

      // save the jwt token to the cookie in the response
      res.cookie('AUTH_TOKEN', token, {httpOnly: true});

      // save the user in res.locals
      res.locals.user = userRecord;

      // continue with the next middleware
      return next();
    }
  }

  // TODO: use proper error handling
  // credentials didn't match, so error out with a 401
  return res.status(401).send('Login failure');

};

// validate access
authController.isLoggedIn = async (req, res, next) => {
  // check for the auth cookie
  const authCookie = req.cookies['AUTH_TOKEN'];
  
  if (authCookie) {
    // decode/check jwt token + signature
    const decodedToken = jwt.verify(authCookie, process.env.JWT_SECRET);

    if (decodedToken.user.id) { // was there a decoded token with a user.id property?
      res.locals.userID = decodedToken.user.id;
      return next();
    }
  }
  
  // stop the request and send a 401 (since won't want to continue to downstream middleware)
  return res.status(401).send('Not signed in');
};

// logout
authController.logout = async (req, res, next) => {
  // clear the cookie containing the jwt
  res.clearCookie('AUTH_TOKEN');
  next();
};


module.exports = authController;