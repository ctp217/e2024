import express from 'express';

const port =5000;

const app= express();

app.get('/',(req,res)=>{

    res.send('Nezar API is working... ')
});

app.listen(port,()=>console.log(`Server is working on Port ${port}`));