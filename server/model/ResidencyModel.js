const mongoose = require("mongoose");
const validator = require("validator");

const residencySchema = mongoose.Schema({
  title: String,

  description: String,

  price: Number,

  address: {
    type: String,
    unique: true,
  },
  city: String,

  country: String,

  image: String,

  facilities: Array,

  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: Date,
});

const residencyModel = mongoose.model("Residency", residencySchema);

module.exports = residencyModel;

//  userEmail: {
//     type: String,
//     unique: true,
//     lowercase: true,
//     validate: [validator.isEmail, "invalid email"],
//   },
