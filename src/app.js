const express = require('express')
const cors = require('cors')
const app = express();
const bookRoutes = require("./routes/bookRoutes");
const flowerRoutes = require("./routes/flowerRoutes");
const songRoutes = require("./routes/songRoutes");
const projectRoutes = require("./routes/projectRoutes");
const messageRoutes = require("./routes/messageRoutes");
const contactRoutes = require("./routes/contactRoutes");


//middleware
app.use(cors())
app.use(express.json())




app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "HIYAAA"
    });
});
const mongoose = require("mongoose");

app.get("/db-test", (req, res) => {
    res.json({
        state: mongoose.connection.readyState
    });
});

app.use("/api/books", bookRoutes);
app.use("/api/flowers", flowerRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/contact", contactRoutes);

module.exports = app;