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

exports.viewSingle = async (req, res) => {
    try{
        // query db for post with an id == req.params.id
        let singlePost = await Post.view(req.params.id);
        // return object
        res.render('post-single', {post: singlePost});
    } catch (err) {
        console.log("Error fetching post:", err);
        res.render('404');
    };
};
