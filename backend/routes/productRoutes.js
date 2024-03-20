import  express  from 'express';

const router = express.Router();

//import products from '../data/products.js';
import asyncHandler from '../middleware/asyncHandler.js'

import Products from '../models/productModel.js'
//get all products
router.get('/',asyncHandler(async (req,res)=>{
//to fetch data from data base 
const products =await Products.find({});
  res.json(products)
}));
//get single product
router.get('/:id',(req,res)=>{
const product=products.find((p)=>p._id === req.params.id);
  res.json(product)
});

export default router;
