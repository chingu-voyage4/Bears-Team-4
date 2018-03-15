const express = require("express");
const router = express.Router();

// Importing Models
const Store = require("../models/Store");

router.get("/allStoresAndCategories", (req, res) => {
  // Get all stores and categories as arrays
  Store.findAllStoresAndCategories()
    .then(r => res.json(r))
    .catch(err => res.json(err));
});

module.exports = router;
