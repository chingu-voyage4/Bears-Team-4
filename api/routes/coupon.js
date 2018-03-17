const express = require("express");
const router = express.Router();

// Importing Models
const Coupon = require("../models/Coupon");

// Just Testing
router.get("/all", (req, res) => {
  Coupon.find({})
    .select("title description")
    .then(r => {
      res.json(r);
    });
});

module.exports = router;
