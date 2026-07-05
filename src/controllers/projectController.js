const Project = require("../models/project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProjects, createProject };
