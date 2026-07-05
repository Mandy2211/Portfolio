const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    github: String,
    TechStack: [String],
    learnings: String
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;