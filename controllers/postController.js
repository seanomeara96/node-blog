const Post = require('../models/Post');

// Just logic that handles getting the
// create post page
exports.createScreen = (req, res) => {
    res.render('create-post')
};

exports.create =  (req, res) => {
    console.log("Creating post:", req.body);
    let post = new Post(req.body);
    post.create()
    .then(response => {
        // respond with post id
        let newId = response.pid;
        res.redirect(`/posts/${newId}`);
    }).catch(err => {
        console.log("Error creating post:", err);
        res.render("404");
    });
};

exports.delete = (req, res) => {

};

exports.edit = (req, res) => {

};

exports.viewSingle = (req, res) => {
    let response = {
        title: "this is the title of the post",
        body: "this is the body of the post",
        date_created: new Date(),
        author: "sean jensen o'meara"
    }
    res.render('post-single', {post: response})
};
