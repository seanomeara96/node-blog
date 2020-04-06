const pool = require('../db');

const User = (data) => {
    this.data = data;
    this.errors = [];
};

// Clean up the inputs
User.prototype.cleanUp = () => {
    // The type of the fields must be String
    if(this.data.username){}
};
// Validate username, email and password
User.prototype.validate = () => {
    return 'x'
};
User.prototype.register = () => {
    return 'x'
};

module.exports = User