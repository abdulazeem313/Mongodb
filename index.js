const express=require('express')
const userRoutes=require('./routes/userRoutes')
const productRoutes=require('./routes/productRoutes')
const db = require('./config/mongodb');
const app=express();
const port=3000;
app.use(express.json())
app.use('/users',userRoutes)
app.use('/products',productRoutes)

app.get('/',(req,res)=>{
    res.send('Welcome to home page');
})

app.listen(port,(err)=>{
    if(!err)
      console.log(`server is in live on ${port}`)
})