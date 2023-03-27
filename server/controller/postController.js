const JWT=require("jsonwebtoken")
const Post = require("../model/postModel");

const PostingPost=async(req,res)=>{
    const payload=req.body;
    try {
       const new_Post=new Post(payload);
       await new_Post.save();
       res.status(200).send({msg:"new post created"},new_Post) 
    } catch (error) {
        res.status(401).send({msg:"error in posting"})
    }
}

const getPost=async(req,res)=>{
    
    try {
        const list=await Post.find();
        res.status(200).send(list)
        
    } catch (error) {
        res.status(404).send({msg:"error"})
        
    }
}
const deletePost=async(req,res)=>{
    try {
        const {id}=req.params;
        const del=await Post.findByIdAndDelete(id)
        res.status(200).send({msg:del})
        
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

const updatePost=async(req,res)=>{
    try {
        const payload=req.body
        const {id}=req.params;
        const post= await Post.findByIdAndUpdate(id,payload)
        res.status(200).send({msg:"post updated",post})
    } catch (error) {
        res.status(404).send({msg:"error"})
    }
}

module.exports={
    PostingPost,
    getPost,
    deletePost,
    updatePost
}