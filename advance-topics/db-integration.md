# Database Integration

## How to integrate? 
[website: http://expressjs.com/en/guide/database-integration.html]
- `mongodb`, `mongoose`
- `MySQL`
- `redis`
- `Postgresql`: Mindray use it
- `SQL Server`

## mongoose
1. schema
```javascript
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [ String ],
    date: { type: Date, default: Date.now },
    isPublishde: Boolean
})
```

2. types
- `String`
- `Number`
- `Date`
- `Buffer`
- `Boolean`
- `ObjectID`
- `Array`

3. model
```javascript
const Course = mongoose.model('Course', courseSchema) // Course is a `Class`
let course = new Couese({
    // some properties
})
```

4. save
```javascript
let result = await course.save();
```

5. find methods
```javascript
let courses = await Course
    .find({ name: 'Mosh', isPublished: true })
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 })
console.log(courses)
```
especially, operator in mongodb enable us to do more complex query, like 
- `eq`, `lt`, `gt`, `gte`, `in`, `nin`,etc: Course.find({ price: { $gt: 10 }})
- `or`, `and`: Course.or([{ name: 'node.js' }, { author: 'Mosh' }])
- `regular expression`: Course.find({ name: /.*Mosh.*/i })
- `count`: the result total count
- `skip`

6. update document
- `query first`: find -> modified -> save
- `directly update`: update({}, {$set: {}}, {new: true})

7. delete document
- `deleteOne()`
- `deleteMany()`
- `findIdAndRemove()`