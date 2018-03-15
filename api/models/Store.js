const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema options for "couponSchema"
const schemaOptions = {
  timestamps: true // Automatically add "created_at" and "updated_at" to schema
};

// Main schema
const storeSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    logoUrl: { type: String, required: true },
    categories: [{ type: String, index: true }],
    rating: { type: Number, default: 0, min: 0, max: 5 }
  },
  schemaOptions
);

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
