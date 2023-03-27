const express=require("express");
const connection=require("./config/db");
const PostRouter = require("./routes/postRoute");
const userRouter = require("./routes/userRoute");
const app=express();
require("dotenv").config();
app.use(express.json());
const port=process.env.PORT

app.get("/",(req,res)=>{
    res.status(200).send({"msg":"home page"})
})

app.use("/user",userRouter)
app.use("/post",PostRouter)

connection()
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})

