const { hashpassword } = require("../helper/authHelper");
const User = require("../model/userModel");

const signupUser=async(req,res)=>{
    try {
        const {name , email ,password ,gender , city ,age, is_married}=req.body;
        
        const exitUser=await User.findOne({email});
        if(exitUser){
            return res.status(200).send({"msg":"Already Register please login"})
        }

        const hashedPassword= await hashpassword(password);

        const user= await new User({
            name,
            email,
            password:hashedPassword,
            gender,
            city,
            age,
            is_married
        }).save()

        res.status(200).send({"msg":"user Register successfully",user})
        
    } catch (error) {
        res.status(401).send({"msg":"error in registration"})
    }
}

module.exports={
    signupUser
}