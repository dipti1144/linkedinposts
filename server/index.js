const express=require("express");
const connection=require("./config/db");
const userRouter = require("./routes/userRoute");
const app=express();
require("dotenv").config();
app.use(express.json());
const port=process.env.PORT

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"home page"})
})

app.use("/user",userRouter)

connection()
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

