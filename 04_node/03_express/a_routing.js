const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('Got a GET request')
  res.send('GET ROOT')
})

app.get('/about', (req, res) => {
  console.log('User accessed /about')
  res.send('You are in the about section !')
})

app.post('/', (req, res) => {
  console.log('Got a POST request')
  res.send('Hello POST, how are you?')
})

app.listen(3000, () => {
  console.log('Server is running')
})