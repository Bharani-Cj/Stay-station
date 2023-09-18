const userModel = require("../model/UserModel");
const catchAsync = require("express-async-handler");
const APIError = require("./../utils/APIError");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

function jwtSign(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "5d",
  });
}

exports.protectRoutes = catchAsync(async (req, res, next) => {
  const token = req.headers.authentication.split(" ")[1];

  if (!token) next(new APIError("Please Login again..", 401));

  const tokenObj = await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);

  if (!tokenObj) next(new APIError("There No token available, Please Login", 401));

  const user = await userModel.findById(tokenObj.id);

  if (!user) next(new APIError("No user Found, Please SignIn", 403));

  req.user = user;

  next();
});

exports.signup = catchAsync(async (req, res, next) => {
  const { name, password, email } = req.body;
  if (!password || !email || !name) next(new APIError("Please Provide the valid Credintials", 401));

  let user;

  if (!(await userModel.findOne({ email }))) {
    user = await userModel.create(req.body);
    const token = jwtSign(user._id);
    if (!token) return next(new APIError("Internal server ERROR", 400));

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: req.secure || req.headers["x-forwarded-proto"] === "https",
    });

    res.status(200).json({
      status: "ok",
      token,
      user,
    });
  } else {
    return next(new APIError("User already exists", 201));
  }
});

exports.logIn = catchAsync(async (req, res, next) => {
  const isTopLevelNavigation =
    req.headers["referer"] === undefined || req.headers["origin"] === undefined;

  const { email, password } = req.body;

  if (!email || !password) next(new APIError("Please enter the Valid password", 400));

  const user = await userModel.findOne({ email });

  if (!user || !(await user.comparePassword(password, user.password)))
    return next(new APIError("Incorrect Email or Password", 401));

  const token = jwtSign(user._id);

  res
    .status(200)
    .cookie("jwt", token, {
      maxAge: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    })
    .json({
      token,
      user,
    });
});

exports.bookVisit = catchAsync(async (req, res, next) => {
  const { email, id, date } = req.body;
  const arr = { id, date };

  const user = await userModel.findOne({ email });

  let booked = false;
  user.bookedVisits.find((el, index) => {
    if (el.date === date) {
      booked = true;
    }
  });

  if (booked) return next(new APIError("You have alread booked this vaccation", 401));
  const updatedUser = await userModel.findOneAndUpdate(
    { email },
    { bookedVisits: [...user.bookedVisits, arr] },
    { new: true }
  );

  if (!user) return next(new APIError("No user Updated", 401));
  res.status(200).json({
    status: "sucesses",
    updatedUser,
  });
});
