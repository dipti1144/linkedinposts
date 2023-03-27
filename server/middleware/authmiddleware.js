
const JWT=require("jsonwebtoken");

const requiresignin=async(req,res,next)=>{
  try {
    const decoded=JWT.verify(
        req.headers.authorizzation,
        process.env.JWT_SECRET
    );
    req.user=decoded
    next()
  } catch (error) {
    console.log(error.message)
  }
}

module.exports=requiresignin