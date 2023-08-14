const APIError = require("../utils/APIError");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "production") {
    let error;
    if (err.name === "CastError") error = CastErrorDB(err);
    if (err.name === "MongoError") error = mongoError(err);
    if (err.name === "11000") error = duplicateErr(err);
    proError(error, res);
  } else if (process.env.NODE_ENV === "development") {
    devError(err, res);
  }
};
const duplicateErr = (err) => {
  return new APIError(`Address already exists`, 403);
};
const mongoError = (err) => {
  return new APIError(`Please try another name or email`, 403);
};
const CastErrorDB = (err) => {
  const message = `Invalid ${err.path}:${err.value}`;
  return new APIError(message, 404);
};

function proError(err, res) {
  res.status(err.statusCode).json({
    status: "fail",
    message: err.message,
  });
}

function devError(err, res) {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    errStack: err.stack,
  });
}
