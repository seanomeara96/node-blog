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
async function startApplication () {
    await pool.connect().then((client) => {
        console.log('Successful connection to the database');
        server.listen(3000);
        module.exports = pool;
        client.release();
    }).catch((err) => {
        console.log('Cannot connect to database', err);
    });
};
startApplication();
