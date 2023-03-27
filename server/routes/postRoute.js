const express=require("express");
const { PostingPost, getPost, updatePost, deletePost } = require("../controller/postController");


const PostRouter=express.Router();

PostRouter.post("/",PostingPost)
PostRouter.get("/",getPost)
PostRouter.patch("/:id",updatePost)
PostRouter.delete("/:id",deletePost)


module.exports=PostRouter;