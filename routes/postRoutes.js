const postController = require("../controllers/postController");
const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

// Create Post
router.get("/create", userController.isUserLoggedIn, postController.createScreen);
router.post("/create-post", postController.create);

// Delete Post
router.post("/delete-post", postController.delete);

// Edit Post
router.post("/edit-post", postController.edit);

// View Post(s)
router.get("/posts", postController.viewFeed);
router.get("/posts/:id", postController.viewSingle);

module.exports = router;
