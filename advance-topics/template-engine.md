# Template Engine

## Types
- `pug`
- `mustache`
- `EJS`

## How to use `Pug` as our tempalte engine?
```javascript
const express = require('express');
const app = express()

//set `pug` as our template engine
app.set('view engine', 'pug');
app.set('views', './views') //store template html

app.get('/', (req, rep) => {
    rep.render('index.pug', { title: 'My Express App', message: 'message' })
})

//index.pug
html
    head
        title= title
    body
        h1= message
```