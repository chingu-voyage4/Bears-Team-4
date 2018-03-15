/**
 * Only use this in development enviroment.
 * This file is imported in server.js and get excuted in "/addMockData" path.
 */

const mongoose = require("mongoose");

// Database Models
const User = require("../../models/Users");
const Coupon = require("../../models/Coupon");
const Store = require("../../models/Store");

// Mock Data
const usersData = require("./Users.json");
const couponsData = require("./Coupons.json");
const storesData = require("./Stores.json");

function addMockData(req, res) {
  // Completelly drop the database - Start Fresh (Be Carefull!!!!)
  mongoose.connection.db.dropDatabase(function(err, result) {
    if (err) return res.send("Error Occured \n" + err);

    // Inserting Users mock data
    usersData.forEach(user => {
      // Making some changes to mock data
      user.role = "user";

      User.create(user);
    });

    // Inserting coupons mock data
    couponsData.forEach(coupon => {
      // Making some changes to mock data
      coupon.code = coupon.kind === "coupon" ? coupon.code : ""; // Coupon code not needed, when coupon type is "deal"
      coupon.expiredAt = new Date().setDate(new Date().getDate() + 1); // Just setting next day as expiry date.

      Coupon.create(coupon);
    });

    // Inserting stores mock data
    storesData.forEach(store => {
      Store.create(store);
    });

    res.send("Successfully Added Mock Data" + result);
  });
}

module.exports = addMockData;
