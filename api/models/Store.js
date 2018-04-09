const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Helper functions that retrive data from Store collection
const StoreFunctions = require("./StoreFunctions");

// Schema options for "couponSchema"
const schemaOptions = {
  timestamps: true // Automatically add "createdAt" and "updatedAt" to schema
};

// Main schema
const storeSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    logoUrl: { type: String, required: true },
    categories: [{ type: String }],
    rating: { type: Number, default: 0, min: 0, max: 5 }
    // "createdAt" and "updatedAt" automatically added here
  },
  schemaOptions
);

// Static functions that run on "Store" Model
storeSchema.statics.findAllStoresAndCategories = StoreFunctions.findAllStoresAndCategories;

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
