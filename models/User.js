const db = require('../db');
const validator = require('validator');
const bcrypt = require('bcrypt');

let User = function (data) {
    this.data = data;
    this.errors = [];
};
// Clean up the inputs
User.prototype.cleanUp = function () {
    console.log('user data', this.data)
    // The type of the fields must be String
    if(typeof(this.data.username) !== "string"){this.data.username == ""};
    if(typeof(this.data.email) !== "string"){this.data.email == ""};
    if(typeof(this.data.password) !== "string"){this.data.password == ""};
    if(typeof(this.data.samePassword) !== "string"){this.data.samePassword == ""};
    // Trim and lowercase the fields for uniformity
    if (this.data.username) {this.data.username = this.data.username.trim().toLowerCase()}
    if (this.data.email) {this.data.email = this.data.email.trim().toLowerCase()};
    if (this.data.password) {this.data.password = this.data.password.trim().toLowerCase()};
    if (this.data.samepassword) {this.data.samepassword = this.data.samepassword.trim().toLowerCase()};
    console.log("Clean up complete", this.data);
};
// Validate username, email and password
User.prototype.validate = function () {
    return new Promise((resolve, reject) => {
        // Username field can't be empty
        if(this.data.username == ""){this.errors.push("Username field cannot be empty")};

        // Usernames can only be alpha numeric
        if(this.data.username != "" && !validator.isAlphanumeric(this.data.username)){this.errors.push("Usernames can only conatin letters or numbers")};
        
        // Username cant be too short
        if(this.data.username.length > 0 && this.data.username.length < 3){this.errors.push("Username must be at least 3 characters long")};
        
        // Username cant be too long
        if(this.data.username.length > 30){this.erros.push("Usernames cannot exceed 50 characters")};
        
        // Email address must be valid
        if(!validator.isEmail(this.data.email)){this.errors.push("You must enter a valid email address")};
        
        // Password field cant be empty
        if(this.data.password == ""){this.errors.push("Password field cannot be empty")};
        
        // Password cant be too short
        if(this.data.password.length > 0 && this.data.password.length < 8){this.errors.push("Password must be at least 8 characters long")};
        
        // Password cant be too long
        if(this.data.password.length > 50){this.errors.push("Your password cannot exceed 50 characters")};

        // Passwords must match
        if(this.data.password != this.data.samepassword){this.errors.push("Passwords must be matching")};

        // Check is username is valid then check if email exists in db
        if(this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)){
            // Do it in here
            console.log("must check existence in db");
        };
        resolve();
    });
};
User.prototype.register = function () {
    return new Promise(async (resolve, reject) => {
        this.cleanUp()
        await this.validate()
        // If there are no errors add the user to the database
        if(!this.errors.length){
            // May have to ommit the password field temporarily
            this.data = {
                username: this.data.username,
                email: this.data.email,
                email_verified: false
            };
            // Take values and assign to an array
            let toStore = Object.keys(this.data).map(x => this.data[x]);
            console.log("Storing array:", toStore);
                // Database operation
            await db.query(`
            INSERT INTO users(username, email, email_verified, date_created)
            VALUES($1, $2, $3, NOW()) 
            ON CONFLICT DO NOTHING`, 
            toStore
            )
            .then((param) => {
                console.log("success adding user to database");
                resolve(param);
            })
            .catch((err) => {
                console.log("error querying the database from user.register", err);
            });  
        }else{
            console.log(this.errors);
            reject(this.errors);
        };
    });
};
User.prototype.logIn = function () {
    return new Promise((resolve, reject) => {
        // Always clean the fields
        this.cleanUp()
        try {
            db.query(`
            SELECT * FROM users
            WHERE email=$1
            `,[this.data.email]).then(response => {
                this.data = response.rows[0]
                resolve(this.data)
            }).catch(err => reject(err))
            } catch (err) {
                reject(err)
            };
    });
};
module.exports = User;