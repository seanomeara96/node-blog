const User = require('../models/User');

exports.logIn = (req, res) => {
    console.log("user is logging in:", req.body)
    let user = new User(req.body);
    user.logIn()
    .then((response) => {
        console.log("Log in success:", response);
        res.redirect('/');
    })
    .catch(err => {
        console.log("Error loggin in", err);
        res.redirect('/login');
    });
};

exports.logOut = (req, res) => {
    console.log("User is logging out:", req.body);
    let user = new User(req.body);
    user.logOut()
    .then(response => {
        console.log("Log out success:", response);
        res.redirect('/');
    })
    .catch(err => {
        console.log("Error logging out:", err);
        res.redirect('/');
    });
};

exports.register = (req, res) => {
    console.log('User is registering:', req.body);
    let user = new User(req.body);
    user.register()
    .then(response => {
        console.log("Registration success:", response.rows);
        res.redirect('login');
    })
    .catch(err => {
        console.log("Error registering user:", err);
        res.redirect('/register');
    });
};