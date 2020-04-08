const db = require('../db');

let Post = function () {
    this.data = data;
    this.errors = errors;
};

Post.prototype.create = function () {
    return new Promise(async (resolve, reject) => {
        if (!this.errors.length) {
            let toStore = [
                this.data.title,
                this.data.body,
                1,
                "Sean O'Meara"
            ]
            await db.query(`
                INSERT INTO posts(title, body, user_id, author, date_created)
                VALUES($1, $2, $3, $4, NOW() )
            `, toStore
            )
            .then((q_res) => {
                console.log("Success adding post to db:", param);
                resolve(q_res)
            })
            .catch((err) => {
                console.log("Error adding post to db:", err);
            });
        } else {
            console.log("Error with post:", this.errors);
            reject(this.errors);
        };
    });
};