const mongoose = require("mongoose");

const flowerSchema = new mongoose.Schema({
    name: String,
    image: String,
    caption: String
});

const Flower = mongoose.model("Flower", flowerSchema);

module.exports = Flower;