const express = require("express");
const router = express.Router();

// Importing Models
const Coupon = require("../models/Coupon");

// Just Testing
router.get("/all", (req, res) => {
  Coupon.find({})
    .select({ storeId: 1, usedBy: { $slice: 2 } })
    .populate("usedBy.userId")
    .limit(1)
    .then(r => {
      res.json(r);
    });
});

// Return trendingDeals and topOffers that are not expired.
router.get("/trending/:noOfTrending?/:noOfTopOffers?", async (req, res) => {
  // API Path       - /api/trending/:noOfTrending/:noOfTopOffers

  let { noOfTrending = 9, noOfTopOffers = 12 } = req.params;

  // Get Top Trendings of Type "Deals" Only - Used for <TrendingItemBig> and <TrendingItemSmall> on Frontend Homepage
  let trendingDeals = await Coupon.trending({
    conditions: { kind: "deal" }, // Specifiying we want top trending items which is type "deal"
    noOfItems: Number(noOfTrending), // How many items want
    showFields: {
      // Specifying witch field wants us on output
      kind: 1,
      category: 1,
      title: 1,
      description: 1,
      code: 1,
      exclutionDetails: 1,
      linkUrl: 1,
      imgUrl: 1,
      storeId: 1,
      "comments.userId": 1,
      "comments.comment": 1,
      "comments.updatedAt": 1,
      expiredAt: 1,
      likedBy: 1,
      unlikedBy: 1
    }
  });

  // Get Top Trendings of Type "Deals" and "Coupons" excluding items already in trendingDeals. - Used for <TopOffers> on Frontend Frontend Homepage
  let topOffers = await Coupon.trending({
    conditions: {
      _id: { $nin: trendingDeals.map(i => i._id) } // Excluding items already in trendingDeals.
    },
    noOfItems: Number(noOfTopOffers), // How many items want
    showFields: {
      // Specifying witch field wants us on output
      kind: 1,
      category: 1,
      title: 1,
      description: 1,
      code: 1,
      exclutionDetails: 1,
      linkUrl: 1,
      imgUrl: 1,
      storeId: 1,
      "comments.userId": 1,
      "comments.comment": 1,
      "comments.updatedAt": 1,
      "comments.username": 1,
      expiredAt: 1,
      likedBy: 1,
      unlikedBy: 1
    }
  });

  res.json({ trendingDeals, topOffers });
});

router.post("/addComment", (req, res) => {
  // In req.body we recive couponId, comment, username, userId

  Coupon.findById(req.body.couponId) // Getting Relevent Coupon for adding comment.
    .then(r => {
      // Saving Comment
      r.comments.push(req.body);
      r.save().then(result => {
        r.populate(
          {
            path: "comments.userId", // Populating both "comments.userId"
            select: "firstName", // Specify which fields to show in sub docs after populating
            options: { limit: 10 } // Limiting max comments output is 10
          },
          (err, doc) => {
            res.json(doc);
          }
        );
      });
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
