const { Pool } = require('pg');
const dotenv = require('dotenv');
const server = require('./app');
dotenv.config();
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'database1',
    password: process.env.PASSWORD,
    post: 5432
});


module.exports = pool; /*{
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
}*/