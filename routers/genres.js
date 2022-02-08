const genresDebug = require('debug')('genres')
const express = require('express')
const router = express.Router()
const Genres = require('../model/genres.js')

router.get('/', async (req, rep) => {
    let result = await Genres.find()
    rep.send(result) //not `write` or `render`
})

router.post('/', async (req, rep) => {
    const genre = new Genres({
        name: req.body.name,
        tag: req.body.tag
    })
    let result = await genre.save()
    if (result) rep.send(genre)
    else rep.send('error to save genres.')
})

router.delete('/', async (req, rep) => {
    let result = await Genres.findByIdAndRemove(req.query.id)
    if (result) rep.send(req.query.id)
    else rep.send('error to remove genres.')
})

router.put('/', async (req, rep) => {
    let result = await Genres.findByIdAndUpdate(req.query.id, {
        name: req.body.name,
        tag: req.body.tag
    }, { returnDocument: 'after' })
    if (result) rep.send(result)
    else rep.send('error to update genres.')
})

module.exports = router