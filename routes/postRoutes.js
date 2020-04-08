const postController  = require('../controllers/postController');
const express = require('express');
const router = express.Router();

// Create Post
router.get('/create', postController.createScreen)
router.post('/create-post', postController.create)

// Delete Post
router.post('/delete-post', postController.delete)

// Edit Post
router.post('/edit-post', postController.edit)

// View Post
router.get('/posts/:id', postController.viewSingle)

module.exports = router;