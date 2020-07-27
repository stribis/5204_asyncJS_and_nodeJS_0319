const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', (req, res, next) => {
  // When we throw an error, the function will stop executing
  // throw new Error('Error, try again')

  fs.readFile('my-file-that-doesnt-exist.txt', (err, data) => {
    if (err) {
      // do something
      // throw new Error ('There was an error', err)
      next(err) // Pass errors to Express using the next callback
    }else {
      res.send(data)
    }
  })

  res.send('Hello World')
})

app.listen(3000, () => {
  console.log('server running')
})


// PAUSE BIS 18: 25