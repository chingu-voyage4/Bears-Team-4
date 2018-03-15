const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema options for "couponSchema"
const schemaOptions = {
  timestamps: true // Automatically add "createdAt" and "updatedAt" to schema
};

// Main schema
const storeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    logoUrl: { type: String, required: true },
    categories: [{ type: String }],
    rating: { type: Number, default: 0, min: 0, max: 5 }
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
