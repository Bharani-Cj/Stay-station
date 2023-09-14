const userController = require("./../controllers/authController");

const express = require("express");

const router = express.Router();

router.post("/bookvisit", userController.bookVisit);
router.post("/signup", userController.signup);
router.post("/login", userController.logIn);

module.exports = router;
