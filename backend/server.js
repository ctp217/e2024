import express from 'express';
import dotenv from 'dotenv';


import products from'./data/products.js';
import connectDB from './config/db.js';
dotenv.config();

//const port =5000;
const port=process.env.PORT || 5000;
//connect to mongodb
connectDB(); 

const app= express();

app.get('/',(req,res)=>{

    res.send('Nezar API is working... ')
});

//get all products
app.get('/api/products',(req,res)=>{

    res.json(products)
});
//get single product
app.get('/api/products/:id',(req,res)=>{
const product=products.find((p)=>p._id === req.params.id);
    res.json(product)
});
app.listen(port,()=>console.log(`Server is working on Port ${port}`));