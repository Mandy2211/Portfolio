const express = require("express");
const router = express.Router();
const { getFlowers, createFlower } = require("../controllers/flowerController");

router.get("/", getFlowers);
router.post("/", createFlower);

module.exports = router;
