const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CouponFunctions = require("./CouponFunctions");

// Schema options
const schemaOptions = {
  timestamps: true // "createdAt" and "updatedAt" automatically added here
};

// Subdoc schema for "couponSchema", Used to track usages like "usedBy", "likedBy", "createdby", "approvedby"
const usageSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
      ref: "User"
    } // Reference to "Users" collection "id"
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

// Subdoc schema for "couponSchema", Used to track comments
const commentSchema = new Schema(
  {
    userId: {
      // type: Schema.Types.ObjectId,
      // required: true,
      type: Schema.Types.ObjectId,
      index: true,
      ref: "User"
    }, // Reference to "Users" collection "id" (This is only used when registered user post a comment)
    username: { type: String }, // Used to track anonymus comments
    comment: { type: String, required: true }
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

// Main schema
const couponSchema = new Schema(
  {
    kind: {
      type: String,
      required: true,
      enum: ["coupon", "deal"], // Only this two values are valid
      index: true
    },
    category: [{ type: String, required: true, index: true }],
    tags: [{ type: String, index: true }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: String }, // Code should only availabe for "kind == coupon"
    exclutionDetails: { type: String }, // Description about which products are not valid for this coupon.
    linkUrl: { type: String, required: true },
    imgUrl: { type: String },
    storeId: { type: Schema.Types.ObjectId, index: true, ref: "Store" }, // Reference to "Stores" collection "id",
    addedBy: { type: usageSchema, required: true }, // Track witch user has added this coupon
    approvedBy: { type: usageSchema }, // Track witch user approved this coupon (Only superAdmin and admin should be able to approve a coupon )
    usedBy: [usageSchema], // Track witch users have used this coupon and when
    likedBy: [usageSchema], // Track witch users have liked this coupon and when
    unlikedBy: [usageSchema], // Track witch users have unliked this coupon and when
    comments: [commentSchema], // Track witch users have commented, comment and date
    expiredAt: { type: Date, required: true, index: true }
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

// Static functions that run on "Coupon" Model
couponSchema.statics.trending = CouponFunctions.trending;

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
