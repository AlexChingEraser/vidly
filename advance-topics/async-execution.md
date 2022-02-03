# Async Execution

## Three way
- callbacks
- promise
- async/await

## Promise
1. generate
```javascript
let p = new Promise((resolve, reject) => {
    // do something async
})
```

2. consuming
use `then`, `catch` to consume a promise with **fulfilled** status.