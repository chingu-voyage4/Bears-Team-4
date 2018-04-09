// This document contain functions that operate on "Coupon" Collection

// Return Trending Coupons and Deals.
function trending(options) {
  const { conditions, noOfItems, showFields } = options;

  return (
    this.aggregate()
      // Select coupons depend on kind and not expired.
      .match({ ...conditions, expiredAt: { $gt: new Date() } })
      // Define witch field to output
      .project({
        // Adding new field called "trending" which will have computed value of "(likedByCount + usedByCount) - unlikedByCount"
        trending: {
          $subtract: [
            {
              $sum: [{ $size: "$likedBy" }, { $size: "$usedBy" }]
            },
            { $size: "$unlikedBy" }
          ]
        },
        ...showFields
      })
      // Sorting results decendingly - So most popular items will be top
      .sort("-trending")
      // No of items to output
      .limit(noOfItems)
      // After aggregate in here seperately populating certain fields.
      // Aggregation + Direct Population is not possible. So thats why in here we are seperatly
      // populating using recived result.
      // (We could also have used $lookup in aggreation instead - Harder for multiple paths)
      .then(r =>
        this.populate(r, {
          path: "storeId comments.userId", // Populating both "storeId" and "comments.userId"
          select: "name logoUrl firstName", // Specify which fields to show in sub docs after populating
          options: { limit: 10 } // Limiting max comments output is 10
        })
      )
  );
}

module.exports = {
  trending
};
