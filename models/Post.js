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

Post.view = function (postId) {
    return new Promise(async (resolve, reject) => {
        try {
            let postToServe = await db.query(`
                SELECT * FROM posts
                WHERE pid=$1
                `, [postId]
            );
            resolve(postToServe.rows[0]);
        } catch (err) {
            reject(err)
        }
    });  
};

Post.viewFeed = function () {
    return new Promise(async (resolve, reject) => {
        try{
            let postsFeed = await db.query(`
                SELECT * FROM posts 
                ORDER BY date_created DESC
            `);
            if(postsFeed.rows){
                resolve(postsFeed.rows);
            }else{
                reject("There was an error with viewFeed");
            };
        } catch (err) {
            reject(err);
        }
    });
};


module.exports = Post;