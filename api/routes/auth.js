var express = require("express");
var router = express.Router();

var isAuthenticated = function(req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated()) {
    console.log("You are authrized to go to home page");
    return next();
  }

  // if the user is not authenticated then redirect him to the login page
  console.log("You are not authourized");
  res.redirect("/");
};

module.exports = function(passport) {
  /* GET login page. */
  router.get("/", function(req, res) {
    // Display the Login page with any flash message, if any
    res.send("Welcome to the index page");
  });

  /* GET Registration Page */
  router.get("/signup", function(req, res) {
    res.send("Welcome to the Register page");
  });

  /* Handle Registration POST */
  router.post("/signup", (req, res, next) => {
    // Excuting passport inside here because we want to handle errors (ex: User Exist) and send apporite data ourselves.
    // If not Passport Local Strategy just send an error to client with out any info.
    passport.authenticate("signup", (err, user, info) => {
      if (err) {
        res.status(400).json({ success: false, message: err.message });
      } else {
        req.login(user, function(err) {
          // Selecting What to output
          const {
            _id,
            email,
            firstName,
            role,
            savedCoupons,
            favouriteStores
          } = req.user;

          return res.json({
            success: true,
            message: {
              _id,
              email,
              firstName,
              role,
              savedCoupons,
              favouriteStores
            }
          });
        });
      }
    })(req, res, next);
  });

  /* Handle Login POST */
  router.post("/login", (req, res, next) => {
    // Excuting passport inside here because we want to handle errors (ex: User Exist) and send apporite data ourselves.
    // If not Passport Local Strategy just send an error to client with out any info.
    passport.authenticate("login", (err, user, info) => {
      if (err) {
        res.status(400).json({ success: false, message: err.message });
      } else {
        req.login(user, function(err) {
          // Selecting What to output
          const {
            _id,
            email,
            firstName,
            role,
            savedCoupons,
            favouriteStores
          } = req.user;

          return res.json({
            success: true,
            message: {
              _id,
              email,
              firstName,
              role,
              savedCoupons,
              favouriteStores
            }
          });
        });
      }
    })(req, res, next);
  });

  /* GET Home Page 
       * This route is protected and if it is not authenticated,
       * it will redirects to login page.
      */
  router.get("/home", isAuthenticated, function(req, res) {
    res.send("Welcome to the Home - This is SECRET page");
  });
  // router.get('/home', function(req, res){
  // 	res.send('Welcome to the Home');
  // });

  /* Handle Logout */
  router.get("/signout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  return router;
};
