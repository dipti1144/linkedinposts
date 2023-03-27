const User = require("../model/userModel");

const signupUser=async(req,res)=>{
    try {
        const {name , email ,password ,gender , city ,age, is_married}=req.body;
        if(!name || !email || !password || !gender || !city || !age || !is_married){
            return res.status(401).send({"msg":"all filed are require"})
        }
        const exitUser=await User.findOne({email});
        if(exitUser){
            return res.status(200).send({"msg":"Already Register please login"})
        }
    } catch (error) {
        
    }
}

module.exports={
    signupUser
}