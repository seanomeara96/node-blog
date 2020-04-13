const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.render('index')
    console.log(req.session)
});
router.get('/about', (req, res) => res.render('about'));
router.get('/contact', (req, res) => res.render('contact'));
router.get('/login', (req, res) => res.render('login'));
router.get('/register', (req, res) => res.render('register'));
router.get('/404', (req, res) => res.render('404'));
module.exports = router;