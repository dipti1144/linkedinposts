const express=require("express");
const { PostingPost, getPost, updatePost, deletePost } = require("../controller/postController");


const PostRouter=express.Router();

PostRouter.post("/",PostingPost)
PostRouter.post("/",getPost)
PostRouter.post("/",updatePost)
PostRouter.post("/",deletePost)


module.exports=PostRouter;