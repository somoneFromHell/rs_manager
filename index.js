const express = require('express');
const bodyParser = require('body-parser');
const menuRout = require("./routes/menu")
require('dotenv').config({'path':'config.env'})
const app = express();



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use("/api/menu",menuRout)
app.all('*',(req,res,next)=>{
    res.status(404).json({status:'fail',message:`there is no thing at ${req.originalUrl}`})
})



const  port =  process.env.PORT || 3200;
app.listen(port,()=>{
    console.log("server running on port 3200")
})



