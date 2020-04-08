const Post = require('../models/Post');

exports.createScreen = (req, res) => {
    res.render('create-post')
};

exports.create =  (req, res) => {
    console.log("Creating post:", req.body);
    let post = new Post(req.body);
    post.create()
    .then(response => {
        console.log("res.json from post controller", );
        res.json(response)
        // respond with post id
        //let newId = x;
        //res.redirect(`/posts/${newId}`);
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
    //query db for post with an id == req.params.id

    // return json object

    //render single post page
    let singlePost = {}
    res.render('single-post', singlePost)
};
