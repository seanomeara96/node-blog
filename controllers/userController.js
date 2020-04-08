const User = require('../models/User');

exports.logIn = (req, res) => {
    
};

exports.logOut = (req, res) => {

};

exports.register = (req, res) => {
    // Let the user new a new instance of User
    console.log('User is registering', req.body);
    let user = new User(req.body);
    user.register().then((response) => {
        console.log(response.rows);
        res.redirect('login');
    }).catch((err) => {
        console.log("something bad happened", err);
    });
};