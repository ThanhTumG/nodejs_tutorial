const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ nbHits: products.length, msg: products });
};

const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "product static test" });
};

module.exports = { getAllProductsStatic, getAllProducts };
