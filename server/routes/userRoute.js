const express=require("express");
const { signupUser, loginuser } = require("../controller/userControler");

const userRouter=express.Router();
userRouter.post("/signup",signupUser)
userRouter.post("/login",loginuser)

module.exports=userRouter;




