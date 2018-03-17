var express = require("express");
var router = express.Router();

// Importing sub routes
const storeRoutes = require("./store");
const couponRoutes = require("./coupon");
const addMockData = require("../utils/addMockData"); // Just for development. Remove this in production.

// Assigning sub routes to pathes
router.use("/store", storeRoutes);
router.use("/coupon", couponRoutes);

// Just for development. Remove this in production.
// (!!! Be Careful !!!) Run this path to completly drop database and Fill database with relevent mock data.
router.use("/debug/addMockData", addMockData);

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
  router.post(
    "/signup",
    passport.authenticate("signup", {
      successRedirect: "/api/home",
      failureRedirect: "/api/signup",
      failureFlash: true
    })
  );

  /* Handle Login POST */
  router.post(
    "/login",
    passport.authenticate("login", {
      successRedirect: "/api/home",
      failureRedirect: "/api/login",
      failureFlash: true
    })
  );

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
