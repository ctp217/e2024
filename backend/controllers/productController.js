import asyncHandler from "../middleware/asyncHandler.js";
import Products from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  //to fetch data from data base

  const products = await Products.find({});

  res.json(products);
  
});
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  // NOTE: checking for valid ObjectId to prevent CastError moved to separate
  // middleware. See README for more info.

  const product = await Products.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(400);
  }
});

export { getProducts, getProductById };
