const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema options
const schemaOptions = {
  timestamps: true // "createdAt" and "updatedAt" automatically added here
};

// Subdoc schema for "couponSchema", Used to track usages like "usedBy", "likedBy"
const usageSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, index: true } // Reference to "Users" collection "id"
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

// Subdoc schema for "couponSchema", Used to track comments
const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, index: true }, // Reference to "Users" collection "id"
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
    exclutionDetails: { type: String },
    linkUrl: { type: String, required: true },
    imgUrl: { type: String },
    storeId: { type: Schema.Types.ObjectId, index: true }, // Reference to "Stores" collection "id"
    usedBy: [usageSchema], // Track witch users have used this coupon and when
    likedBy: [usageSchema], // Track witch users have liked this coupon and when
    comments: [commentSchema], // Track witch users have commented, comment and date
    expiredAt: { type: Date, required: true, index: true }
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
