const Flower = require("../models/flower");

const getFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } 
  catch (error) {
    console.log("Not yet blooming !")
  }
};

const createFlower = async (req, res) => {
  try {
    const flower = await Flower.create(req.body);
    res.status(201).json(flower);
  } catch (error) {
    console.log("oops the flower withered :( \n Try again later");
  }
};

module.exports = { getFlowers, createFlower };
