const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema options
const schemaOptions = {
  timestamps: true // Automatically add "created_at" and "updated_at" to schema, and sub schema
};

// Subdoc schema for "couponSchema", Used to track usages like usedBy, likedBy
const usageSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true } // Reference to "Users" collection "id"
  },
  schemaOptions
);

// Subdoc schema for "couponSchema", Used to track comments
const commentSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true }, // Reference to "Users" collection "id"
    comment: { type: String, required: true }
  },
  schemaOptions
);

// Main schema
const couponSchema = new Schema(
  {
    kind: { type: String, required: true, enum: ["coupon", "deal"] },
    category: [{ type: String, required: true, index: true }],
    tags: [{ type: String, index: true }],
    title: { type: String, required: true },
    description: { type: String, required: true },
    exclutionDetails: { type: String },
    linkUrl: { type: String, required: true },
    imgUrl: { type: String },
    storeId: { type: Schema.Types.ObjectId, index: true }, // Reference to "Stores" collection "id"
    usedBy: [usageSchema],
    likedBy: [usageSchema],
    comments: [commentSchema],
    expired_at: { type: Date, required: true, index: true } // "created_at" and "updated_at" automatically added here
  },
  schemaOptions
);

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
