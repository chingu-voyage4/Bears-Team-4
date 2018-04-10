const express = require("express");
const router = express.Router();
const passport = require("passport");

// Importing sub routes
const storeRoutes = require("./store");
const couponRoutes = require("./coupon");
const authRoutes = require("./auth")(passport);
const helperRoutes = require("./helpers");
const addMockData = require("../utils/addMockData"); // Just for development. Remove this in production.

// Assigning sub routes to pathes
router.use("/store", storeRoutes);
router.use("/coupon", couponRoutes);
router.use("/auth", authRoutes);
router.use("/helpers", helperRoutes);

// Just for development. Remove this in production.
// (!!! Be Careful !!!) Run this path to completly drop database and Fill database with relevent mock data.
router.use("/debug/addMockData", addMockData);

module.exports = router;
