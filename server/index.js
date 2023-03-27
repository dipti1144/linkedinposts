const express=require("express");
const connection=require("./config/db")
const app=express();
require("dotenv").config();
app.use(express.json());
const port=process.env.PORT

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"home page"})
})

connection()
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

