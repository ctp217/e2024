import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes.js'


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


app.use('/api/products', productRoutes)

app.listen(port,()=>console.log(`Server is working on Port ${port}`));