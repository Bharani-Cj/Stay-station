const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const userRouter = require("./routers/userRouter");
const residencyRouter = require("./routers/residencyRouter");
const globalErrorHandler = require("./controllers/globalErrorHandler");
const APIError = require("./utils/APIError");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/residency", residencyRouter);

app.all("*", (req, res, next) => {
  return next(new APIError("Route Not Found", 401));
});

app.use(globalErrorHandler);

module.exports = app;
