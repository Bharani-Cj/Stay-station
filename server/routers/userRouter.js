const userController = require("./../controllers/authController");

const express = require("express");

const router = express.Router();

router.post("/signin", userController.signup);
router.post("/login", userController.logIn);

module.exports = router;
