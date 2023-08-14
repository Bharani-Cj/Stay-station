const residencyModel = require("../model/ResidencyModel");
const asyncHandler = require("express-async-handler");

exports.registerResidency = asyncHandler(async (req, res, next) => {
  const { title, description, address, price, city, facilities, image } = req.body;
  const resi = await residencyModel.create({
    title: title,
    description: description,
    address: address,
    price: price,
    city: city,
    facilities: facilities,
    image: image,
  });
  res.status(200).json({
    status: "success",
    resi,
  });
});
