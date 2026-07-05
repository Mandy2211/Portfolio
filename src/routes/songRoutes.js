const express = require("express");
const router = express.Router();
const { getSongs, createSong } = require("../controllers/songController");

router.get("/", getSongs);
router.post("/", createSong);

module.exports = router;
