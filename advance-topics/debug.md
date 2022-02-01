# debug

`debug` means we do not to use `console.log()` functions to log some debug info we need in terminal.
install npm pakage `debug`, It's solve the problems we meet.

## How to use?
```javascript
const debug = require('debug')('<namespace-you-tick>');

debug('this is a debug message');

//first way, we can export a environment variable, like:
//export DEBUG=namespace
//nodemon index.js

//second way, we can explictly write；
//DEBUG=namespace nodemon index.js
```

## Windows
```powershell
#cmd
#set DEBUG=*,-not_this
#set DEBUG=* & node app.js

$env:DEBUG = "*,-not_this"
$env:DEBUG='app';node app.js
```
