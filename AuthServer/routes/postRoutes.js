const express = require("express");
const {
  getPostById,
  addPosts,
  getPostsList
} = require("../controllers/postController");
const router = express.Router();
const requireToken = require("../middleware/requireToken");

router.post("/post/add", requireToken, addPosts);
router.get("/post/:id", getPostById);
router.get("/post", requireToken, getPostsList);

module.exports = router;
