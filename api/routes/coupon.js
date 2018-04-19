const express = require("express");
const router = express.Router();
const metafetch = require("metafetch");
const urlParser = require("url-parse");

// Importing Models
const Coupon = require("../models/Coupon");
const Store = require("../models/Store");

const isAuthenticated = function(req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated()) {
    console.log("You are authrized to go to home page");
    return next();
  }

  // if the user is not authenticated then redirect him to the login page
  console.log("You are not authourized");
  res.status(403).json({
    success: false,
    message: "You are not Authenticated for this request"
  });
};

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

router.put("/addCoupon", isAuthenticated, (req, res) => {
  const coupon = req.body;
  const couponData = {
    kind: coupon.kind,
    category: coupon.categories,
    tags: coupon.tags,
    title: coupon.title,
    description: coupon.description,
    code: coupon.code,
    exclutionDetails: coupon.exclutionDetails,
    linkUrl: coupon.linkUrl,
    imgUrl: coupon.imgUrl,
    storeId: coupon.storeId,
    addedBy: { userId: req.user._id },
    expiredAt: new Date(coupon.expiredAt)
  };

  Store.findOne({ storeUrl: coupon.linkUrl })
    .then(r => {
      if (r) {
        couponData.storeId = r._id;
        const newCoupon = new Coupon(couponData);
        newCoupon.save().then((r) => res.json({ sucess: true, coupon : r }));
      } else {
        // Extracting Main Site Url From Full Url
        const url = new urlParser(coupon.linkUrl).origin;

        metafetch.fetch(url, function(err, meta) {
          const newStore = new Store({
            name: coupon.store,
            description: meta.description || "  ",
            storeUrl: url,
            logoUrl: meta.image || "  ",
            categories: []
          });

          newStore.save().then(r => {
            couponData.storeId = r._id;
            const newCoupon = new Coupon(couponData);
            newCoupon.save().then((r) => res.json({ sucess: true, coupon : r }));
          });
        });
      }
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));

  // const newCoupon = new Coupon(couponData);
  // newCoupon.save().then((r)=>res.json(r));

});

router.get("/unapprovedCoupons", (req, res) => {
  Coupon.find({approvedBy : {$exists:false}})
    .select("-usedBy -likedBy -unlikedBy -comments -createdAt, -__v")
    .populate({
      path:"storeId",
      select:"name _id"
    })
    .then((r)=>res.json(r))
    .catch((err)=>res.json(err));
});

router.put("/updateCoupon", isAuthenticated, (req, res) => {
  const coupon = req.body;
  const couponData = {
    kind: coupon.kind,
    category: coupon.categories,
    tags: coupon.tags,
    title: coupon.title,
    description: coupon.description,
    code: coupon.code,
    exclutionDetails: coupon.exclutionDetails,
    linkUrl: coupon.linkUrl,
    imgUrl: coupon.imgUrl,
    storeId: coupon.storeId,
    addedBy: { userId: req.user._id },
    expiredAt: new Date(coupon.expiredAt)
  };

  Store.findOne({ storeUrl: coupon.linkUrl })
    .then(r => {
      if (r) {
        couponData.storeId = r._id;
        const newCoupon = new Coupon(couponData);
        newCoupon.save().then((r) => res.json({ sucess: true, coupon : r }));
      } else {
        // Extracting Main Site Url From Full Url
        const url = new urlParser(coupon.linkUrl).origin;

        metafetch.fetch(url, function(err, meta) {
          const newStore = new Store({
            name: coupon.store,
            description: meta.description || "  ",
            storeUrl: url,
            logoUrl: meta.image || "  ",
            categories: []
          });

          newStore.save().then(r => {
            couponData.storeId = r._id;
            const newCoupon = new Coupon(couponData);
            newCoupon.save().then((r) => res.json({ sucess: true, coupon : r }));
          });
        });
      }
    })
    .catch((err) => res.status(404).json({ success: false, err: err }));

  // const newCoupon = new Coupon(couponData);
  // newCoupon.save().then((r)=>res.json(r));

});

module.exports = router;
