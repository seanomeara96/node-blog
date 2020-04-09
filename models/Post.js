const db = require('../db');

let Post = function (data) {
    this.data = data;
    this.errors = [];
};

// Not finished yet
// Needs: 
//  - dynamic username
//  - dynamic user id
Post.prototype.create = function () {
    return new Promise(async (resolve, reject) => {
        if (!this.errors.length) {
            let toStore = [
                this.data.title,
                this.data.body,
                1,
                "sean"
            ]
            await db.query(`
                INSERT INTO posts(title, body, user_id, author, date_created)
                VALUES($1, $2, $3, $4, NOW() )
                RETURNING pid
            `, toStore
            )
            .then((q_res) => {
                console.log("Success adding post to db:", q_res);
                resolve(q_res.rows[0])
            })
            .catch((err) => {
                console.log("Error adding post to db:", err);
                reject(err);
            });
        } else {
            console.log("Error with post:", this.errors);
            reject(this.errors);
        };
    });
};
module.exports = Post;