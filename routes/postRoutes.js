const postController  = require('../controllers/postController');
const express = require('express');
const router = express.Router();

// Create Post
router.post('/create-post', postController.create)

// Delete Post
router.post('/delete-post', postController.delete)

// Edit Post
router.post('/edit-post', postController.edit)

// View Post
router.get('/post:id', postController.view)

module.exports = router;