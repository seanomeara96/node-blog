const User = require("../models/User");

exports.logIn = (req, res) => {
  console.log("user is logging in:", req.body);
  let user = new User(req.body);
  user
    .logIn()
    .then((response) => {
      console.log("Log in success:", response);
      req.session.user = {
        username: user.data.username,
        email: user.data.email,
      };
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Error logging in", err);
      res.redirect("/login");
    });
};

exports.logOut = (req, res) => {
  console.log("User is logging out:", req.session.user);
  req.session.destroy(() => {
    console.log("Logged out", req.session);
    res.redirect("/");
  });
};

exports.register = (req, res) => {
  console.log("User is registering:", req.body);
  let user = new User(req.body);
  user
    .register()
    .then((response) => {
      console.log("Registration success:", response.rows);
      res.redirect("login");
    })
    .catch((err) => {
      console.log("Error registering user:", err);
      res.redirect("/register");
    });
};

// Checks if user is logged in
// if not, redirects to login
exports.isUserLoggedIn = (req, res, next) => {
  // Check to see if there is session data
  if (req.session.user) {
    next();
  } else {
    res.redirect("/login");
  }
};
