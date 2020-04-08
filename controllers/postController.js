const Post = require('../models/Post');

exports.createScreen = function (req, res) {
    res.render('create-post')
};

exports.create = function () {
    let post = new Post(req.body);
    post.create()
    .then(response => {
        console.log("Successful post creation");
        // respond with post id
        let newId = x;
        res.redirect(`/posts/${newId}`);
    }).catch(err => {
        console.log("Error creating post:", err);
        res.render("404");
    });
};

exports.delete = function () {

};

exports.edit = function () {

};

exports.viewSingle = function () {
    //query db for post with an id == req.params.id

    // return json object

    //render single post page
    let singlePost = {}
    res.render('single-post', singlePost)
};
