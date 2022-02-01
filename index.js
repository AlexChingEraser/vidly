const express = require('express');
const app = express();
const debug = require('debug')('main')
const homeRouter = require('./routers/home.js')
const config = require('config')

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json()); // parse body to .json and append to req.body property
app.use('/', homeRouter)

debug(`the name of app: ${config.get('appname')}`)
debug(`the passwd of app: ${config.get('passwd')}`)

const port = process.env.PORT || 31121
app.listen(port, () => debug(`listening port ${port}...`))