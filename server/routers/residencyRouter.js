const residencyController = require("./../controllers/residencyController");

const express = require("express");
const router = express.Router();

router.post("/register", residencyController.registerResidency);
module.exports = router;
