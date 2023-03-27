const express=require("express");
const { signupUser } = require("../controller/userControler");

const userRouter=express.Router();
userRouter.post("/signup",signupUser)

module.exports=userRouter;




