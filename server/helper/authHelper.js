const bcrypt=require("bcrypt");

const hashpassword=async(password)=>{
    try {
        const saltRounds=5;
        const hashedPassword=await bcrypt.hash(password , saltRounds);
        return hashedPassword
    } catch (error) {
        console.log(error.message)
    }
}

const comparePassword= async(password, hashpasswordAtlas)=>{
    return bcrypt.compare(password,hashpasswordAtlas)
}

module.exports={
    hashpassword,
    comparePassword
}