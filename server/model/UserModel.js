const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, `User Must have a name`],
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "User must have Email"],
    validate: [validator.isEmail, "invalid email"],
  },
  password: {
    type: String,
    required: [true, "Password is required field"],
  },

  image: {
    type: String,
  },

  bookedVisits: Array,

  favResidenciesID: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Residency",
    },
  ],

  ownedResidencies: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Residency",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function (userPassword, hashedPassword) {
  return await bcrypt.compare(userPassword, hashedPassword);
};

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
