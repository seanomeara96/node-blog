const pool = require('../db');
const validator = require('validator');
let User = function (data) {
    this.data = data;
    this.errors = [];
};
// Clean up the inputs
User.prototype.cleanUp = () => {
    // The type of the fields must be String
    if(typeof(this.data.username) !== "string"){this.data.username == ""};
    if(typeof(this.data.email) !== "string"){this.data.email == ""};
    if(typeof(this.data.password) !== "string"){this.data.password == ""};
    if(typeof(this.data.samePassword) !== "string"){this.data.samePassword == ""};

    // Trim and lowercase the fields for uniformity
    this.data = {
        username: this.data.username.trim().toLowerCase(),
        email: this.data.email.trim().toLowerCase(),
        password: this.data.password.trim().toLowerCase(),
        otherPassword: this.data.otherPassword.trim().toLowerCase()
    };
};
// Validate username, email and password
User.prototype.validate = () => {
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
        if(this.data.password.length < 50){this.errors.push("Your password cannot exceed 50 characters")};

        // Passwords must match
        if(this.data.password != this.data.otherPassword){this.errors.push("Passwords must be matching")};

        // Check is username is valid then check if email exists in db
        if(this.data.username.length > 2 && this.data.username.length < 31 && validator.isAlphanumeric(this.data.username)){
            // Do it in here
            console.log("username is valid")
        };
        resolve();
    });

    
};
User.prototype.register = () => {
    return new Promise(async (resolve, reject) => {
        this.cleanUp()
        await this.validate()
        // If there are no errors add the user to the database
        if(!this.errors.length){
            // May have to ommit the password field temporarily
            this.data = {
                username: this.data.username,
                email: this.data.email
            }
            await //some database operation
            resolve();
        }else{
            reject();
        };
    });
};

module.exports = User