const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.json({ message: err });
    res.status(500).send("Server Error");
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(products);
  } catch (err) {
    res.json({ message: err });
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
