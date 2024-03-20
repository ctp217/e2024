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
router.get('/:id',asyncHandler(async(req,res)=>{
const product=await Products.findById(req.params.id);
if(product){
  res.json(product)
}
  else{
    res.status(400).json({message:'product not found'});
  }
}));

export default router;
