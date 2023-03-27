const mongoose=require("mongoose");
const connection=()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true
    })
    .then((data)=>{
        console.log(`Mongodn coonected with server`)
    })
}

module.exports=connection