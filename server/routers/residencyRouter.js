const residencyController = require("./../controllers/residencyController");

const express = require("express");
const router = express.Router();

router.post("/register", residencyController.registerResidency);
router.get("/getAllResidency", residencyController.getAllResidency);
router.get("/getResidency/:id", residencyController.getResidency);

module.exports = router;
