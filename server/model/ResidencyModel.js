const mongoose = require("mongoose");
const validator = require("validator");

const residencySchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, `Please provide a title`],
  },
  description: {
    type: String,
    required: [true, `Please provide a description`],
  },
  price: {
    type: Number,
    required: [true, `Please provide a price`],
  },
  address: {
    type: String,
    unique: true,
  },
  country: {
    type: String,
    required: [true, `Please provide a country`],
  },

  city: String,

  image: String,
  facilities: Object,
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
