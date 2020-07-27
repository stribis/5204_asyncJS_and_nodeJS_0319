const express = require('express')
const app = express()

// Logger Middleware
const myLogger = function (req, res, next) {
  console.log('User has logged into the server')
  next()
} 

// Make the express server use the Logger Middleware
app.use(myLogger)


app.get('/', (req, res) => {
  //console.log('Got a GET request')
  res.send('GET ROOT')
})

app.listen(3000, () => {
  console.log('Server is running')
})


