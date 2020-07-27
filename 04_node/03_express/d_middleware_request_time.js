const express = require('express')
const app = express()

// Logger Middleware
const requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
} 

// Make the express server use the Logger Middleware
app.use(requestTime)


app.get('/', (req, res) => {
  let responseText = 'Hello World! <br>'
  responseText += '<small>Requested at :</small>' + req.requestTime
  res.send(responseText)
})

app.listen(3000, () => {
  console.log('Server is running')
})


