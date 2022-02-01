const express = require('express');
const router = express.Router()

router.get('/', (req, rep) => {
    rep.render('home.pug', { title: 'VIDLY', message: 'Welcome to VIDLY!' })
})

module.exports = router