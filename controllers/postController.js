const Post = require('../models/Post');

// Just logic that handles getting the
// create post page
exports.createScreen = (req, res) => {
    res.render('create-post')
};

exports.create =  async (req, res) => {
    console.log("Creating post:");
    let post = new Post(req.body);
    try {
        let createdPost = await post.create();
        // Created post has a post id object
        res.redirect(`/posts/${ createdPost.pid }`);
    } catch (err) {
        console.log("Error creating post:", err);
        res.render("404");
    };
};

exports.delete = (req, res) => {
    console.log("Deleting post:");
    Post.delete().then(() => res.redirect('/posts'))
    .catch(err => console.log("There was an error deleting the post"));
};

exports.edit = (req, res) => {
    let post = new Post(req.body);
    try{
        let updatedPost = post.update();
        res.render('post-single', { post: updatedPost });
    } catch (err) {
        console.log("There was an error updating this post");
    };
};

exports.viewFeed = async (req, res) => {
    try {
        let feed = await Post.viewFeed();
        console.log("viewfeed query resolved");
        res.render('posts', { posts: feed });
    } catch (err) {
        console.log("viewfeed query rejected", err);
        res.render('404');
    };
};

exports.viewSingle = async (req, res) => {
    try{
        // query db for post with an id == req.params.id
        let singlePost = await Post.view(req.params.id);
        // return object
        res.render('post-single', { post: singlePost });
    } catch (err) {
        console.log("Error fetching post:", err);
        res.render('404');
    };
};
