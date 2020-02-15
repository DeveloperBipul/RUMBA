const express = require("express");
require("../models/Post");
const mongoose = require("mongoose");
const Post = mongoose.model("Post");
const User = mongoose.model("User");
const router = express.Router();
//@ create Read Update and Delete

//@desc create user posts
//@routes Add /posts
//@access public

// @desc  Create a store
// @route POST /api/v1/stores
// @access Public

router.addPosts = async (req, res, next) => {
  try {
    const post = await Post.createPost(req.body, req.user._id);

    return res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//@desc get all user posts
//@routes get /posts
//@access public

router.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("user");
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json(err);
  }
};

router.getPostsList = async (req, res) => {
  try {
    const posts = await Post.list();
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(400).json(err);
  }
  // try {
  //   res.send({
  //     text: req.post.text
  //   });
  // } catch (error) {
  //   res.send("No data found to display.");
  // }
};

module.exports = router;
