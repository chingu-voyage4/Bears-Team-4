/* This is The User Schema For MongoDB and Mongoose
 * It contain fields for id, name,password,email.
 */
// Require Mongose ORM
var Mongoose = require("mongoose");
// Require Mongoose Schema to Make Mongoose Object
var Schema = Mongoose.Schema;

// Lets create Schema Object
// The formet will be x = { variables like type and conditionals...} fallowed by ','
var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  username: { type: String, unique: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  profileImgUrl: { type: String },
  savedCoupons: [{ type: Schema.Types.ObjectId }], // Reference to "Coupons" collection "id"
  favouriteStores: [{ type: Schema.Types.ObjectId }] // Reference to "Stores" collection "id"
});

// This will creates database collection named "Users" in the Database
var Users = Mongoose.model("User", UserSchema);

// We are making available it to other files
module.exports = Users;
