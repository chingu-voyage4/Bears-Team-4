/**
 * Only use this in development enviroment.
 * This file is imported in routes/index.js and get excuted in "api/debug/addMockData" path.
 */

const mongoose = require("mongoose");
const faker = require("faker"); // Used to generate random items
const Chance = require("chance"); // Used to generate random numbers and items

// Database Models
const User = require("../models/Users");
const Coupon = require("../models/Coupon");
const Store = require("../models/Store");

// Setting seed so every time generate same sequence of data.
faker.seed(12345);
const chance = new Chance(12345);

// Some helper function to make easier to generate mock data

// Return empty slot array which we can use to simplly repeat something multiple times.
function repeat(n) {
  return Array.apply(null, { length: n });
}

// Return array of mock data, based on type of given faker cmd.
function genFakerList(cmd, nItems = 20) {
  return repeat(nItems).map(() => {
    return cmd();
  });
}

// Return subarray from given list.
function fromFakerList(list, min = 0, max = 5) {
  return chance.pickset(list, chance.integer({ min: min, max: max }));
}

// Helper function for generate usersData for "coupon". (Ex. For usedBy, likedBy)
function genUserList(userIdList, approvedDate, expiredDate) {
  return repeat(30).map(() => {
    return {
      userId: chance.pickone(userIdList),
      createdAt: faker.date.between(approvedDate, expiredDate) // Making sure used or liked between approved and expired Date.
    };
  });
}

// Helper function for generate commentData for "coupon". (Ex. For comments)
function genCommentList(userIdList, approvedDate, expiredDate) {
  return repeat(30).map(() => {
    return {
      userId: chance.pickone(userIdList),
      comment: faker.lorem.sentences(),
      createdAt: faker.date.between(approvedDate, expiredDate) // Making sure used or liked between approved and expired Date.
    };
  });
}

// Some generated arrays from faker.
const fakeCategories = genFakerList(faker.commerce.department, 30);
const fakeTags = genFakerList(faker.commerce.productAdjective, 30);

// Main function that inject all mock data.
async function addMockData(req, res) {
  try {
    // Completly empty database
    await mongoose.connection.db.dropDatabase();

    // Change repeat(x) value to how many documents you want

    // Inserting mockdata into User Collection
    await Promise.all(
      repeat(10).map(async () => {
        let user = new User();
        user.firstName = faker.name.firstName();
        user.lastName = faker.name.lastName();
        // from hereon just know that passing null like below is just for
        // give possibilty that this filed can be empty value randomly.
        user.username = chance.pickone([null, null, faker.internet.userName()]);
        user.email = faker.internet.email();
        user.password = faker.internet.password();
        user.role = chance.pickone(["admin", "user"]);
        user.profileImgUrl = chance.pickone([
          null,
          null,
          null,
          null,
          faker.image.avatar()
        ]);
        user.createdAt = faker.date.past();
        // savedCoupons and favouriteStores are added later

        return user.save();
      })
    );

    // Inserting mockdata into Store Collection
    await Promise.all(
      repeat(30).map(async () => {
        let store = new Store();
        store.name = faker.address.city();
        store.description = faker.lorem.sentences();
        store.logoUrl = faker.image.business();
        // Later some other categories also gonna added here based on available coupons
        store.categories = fromFakerList(fakeCategories, 0, 4);
        store.rating = chance.integer({ min: 0, max: 5 });
        store.createdAt = faker.date.past();

        return store.save();
      })
    );

    // Getting already added values like ids from Users and Store collection.
    let userIdList = await User.find({}).select("_id");
    let storeIdList = await Store.find({}).select("_id");

    // Inserting mockdata into Coupon Collection
    await Promise.all(
      repeat(30).map(async () => {
        let coupon = new Coupon();
        coupon.kind = chance.pickone(["coupon", "deal"]);
        coupon.category = fromFakerList(fakeCategories, 0, 2);
        coupon.tags = fromFakerList(fakeTags, 0, 4);
        coupon.title = faker.commerce.product();
        coupon.description = faker.lorem.sentences();
        coupon.code =
          coupon.kind === "coupon" ? chance.google_analytics() : null;
        coupon.exclutionDetails = chance.pickone([
          null,
          null,
          null,
          null,
          null,
          faker.lorem.sentences()
        ]);
        coupon.linkUrl = faker.internet.url();
        coupon.imgUrl = chance.pickone([
          null,
          null,
          null,
          null,
          faker.image.business()
        ]);

        coupon.createdAt = faker.date.past();
        coupon.expiredAt = faker.date.future();

        coupon.storeId = chance.pickone(storeIdList)._id;
        coupon.addedBy = {
          userId: chance.pickone(userIdList)._id,
          createdAt: coupon.createdAt // Making sure coupon addedBy date same as coupon created date.
        };

        // Making sure only some of coupon are approved.
        if (chance.bool()) {
          coupon.approvedBy = {
            userId: chance.pickone([...userIdList]),
            createdAt: faker.date.between(
              coupon.createdAt,
              new Date("2018/04/10")
            ) // Making sure coupon is approved date after its added.
          };
        }

        // Generate userlist compatible with "usageScheme" which use for "likedBy", "usedBy"
        let userList = genUserList(
          userIdList,
          coupon.createdAt,
          coupon.expiredAt
        );

        // Generate commentlist compatible with "commentScheme" which use for "comments"
        let commentList = genCommentList(
          userIdList,
          coupon.createdAt,
          coupon.expiredAt
        );

        coupon.usedBy = [
          ...chance.pickset(userList, chance.integer({ min: 0, max: 10 }))
        ];
        coupon.likedBy = [
          ...chance.pickset(userList, chance.integer({ min: 0, max: 10 }))
        ];
        coupon.unlikedBy = [
          ...chance.pickset(userList, chance.integer({ min: 0, max: 10 }))
        ];
        coupon.comments = [
          ...chance.pickset(commentList, chance.integer({ min: 0, max: 10 }))
        ];

        return coupon.save();
      })
    );

    // Getting already added values like ids of Coupons.
    let couponIdList = await Coupon.find({}).select("_id");

    // Adding some savedCoupons and likedCoupons to Users Collection
    await Promise.all(
      userIdList.map(userId => {
        return User.findByIdAndUpdate(userId, {
          favouriteStores: chance.pickset(
            storeIdList,
            chance.integer({ min: 0, max: 10 })
          ),
          savedCoupons: chance.pickset(
            couponIdList,
            chance.integer({ min: 0, max: 10 })
          )
        });
      })
    );
    res.send("<h1>Successfully Added All Mock Data</h1>");
  } catch (err) {
    res.send("<h1>Error Occured</h1>");
  }
}

module.exports = addMockData;
