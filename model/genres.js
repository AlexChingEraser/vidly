const db = require('debug')('db')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/vidly')
    .then(res => { db('connecting....') })
    .catch(err => { db('connect error occur', err) })

const genresSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    tag: {
        type: Array,
        required: true,
        validator: {
            validation: function(v) {
                return v && v.length > 0
            },
            message: 'tag should be at least 1.'
        }
    }
})

const genresModel = mongoose.model('Genres', genresSchema)

module.exports = genresModel