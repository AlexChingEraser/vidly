# Middleware

## Definition
`middleware` is actually a function, called `middleware fucntion` and execed in sequence through a request handling cycle.

## Build self-defined middleware
```javascript
const app = express()

app.use(function(req, rep, next) {
    // your own handling logic

    next(); // pass control to next middleware
})
```

## Built-in middleware
- `express.json()`
- `express.urlencoded()`: { extended: true }
- `express.static(<static/folder>)`

## Third-party middleware [website: http://expressjs.com/en/resources/middleware.html]
- `helmet`: secure middleware
- `morgan`: logger middleware
