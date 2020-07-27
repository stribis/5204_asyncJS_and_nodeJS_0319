const express = require('express')
const app = express()

// Normal Static Route
app.get('/', (req, res) => {
  console.log('Got a GET request')
  res.send('GET ROOT')
})

// This route will match acd & abcd
app.get('/ab?cd', (req, res) => {
  res.send('Go to /acd or abcd')
})

// This route will match abcd or abbcd or abbbcd and so on 
app.get('/ab+cd', (req, res) => {
  res.send('Go toabcd or abbcd or abbbcd and so on ')
})

// This route will match abcd, abxcd, abRANDOMcd, & so on
app.get('/ab*cd', (req, res) => {
  res.send('Go to abcd, abxcd, abRANDOMcd, & so on')
})

// This route will match /abe and /abcde
app.get('/ab(cd)?e', (req, res) => {
  res.send('Go to /abe and /abcde')
})

// This route will match anything with an 'a'
app.get(/a/, (req, res) => {
  res.send('Go to /abe and /abcde')
})


// This route will match anything with 'fly' at the end (dragonfly)
app.get(/.*fly$/, (req, res) => {
  res.send('fly at the end (dragonfly)')
})

app.listen(3000, () => {
  console.log('Server is running')
})