const residencyModel = require("../model/ResidencyModel");
const asyncHandler = require("express-async-handler");
const APIError = require("./../utils/APIError");

exports.registerResidency = asyncHandler(async (req, res, next) => {
  const { title, description, address, price, city, facilities, image, country } = req.body;
  const resi = await residencyModel.create({
    title: title,
    description: description,
    address: address,
    price: price,
    city: city,
    facilities: facilities,
    image: image,
    country: country,
  });
  res.status(200).json({
    status: "success",
    resi,
  });
});

exports.getAllResidency = asyncHandler(async (req, res, next) => {
  const residency = await residencyModel.find();

  if (!residency) return next(new APIError("No residency found", 401));

  res.status(200).json({
    status: "success",
    residency,
  });
});

exports.getResidency = asyncHandler(async (req, res, next) => {
  const residency = await residencyModel.findById(req.params.id);

  if (!residency) return next(new APIError("No residency found", 401));

  res.status(200).json({
    status: "success",
    residency,
  });
});
