// Need a way of storing sessions
// connect-pg-simple?
const express = require('express');
const app = express();
const router = require('./router');
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
const db = require('./db');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: "postgres",
    saveUninitialized:false,
    cookie: { 
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
    resave: false,
    store: new pgSession({
        pool: db,
        tableName: "session",
    }),
}));
app.use((req, res, next) => {
    res.locals.user = req.session.user
    next()
});
app.set('views','views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router);
const server = require('http').createServer(app)
module.exports = server;
app.listen(3000)