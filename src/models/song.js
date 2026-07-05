const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    title: String,
    artist: String,
    coverImage: String,
    spotifyLink: String,
    favoriteLyric: String
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;