import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'


import userRoutes from './routes/userRoutes.js';

import connectDB from './config/db.js';
dotenv.config();

//const port =5000;
const port=process.env.PORT || 5000;
//connect to mongodb
connectDB(); 

const app= express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/',(req,res)=>{

    res.send('Nezar API is working... ')
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>console.log(`Server is working on Port ${port}`));