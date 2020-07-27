const express = require('express')
const app = express()


app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  
  const students = [
    {name: 'Luca', grade: 6},
    {name: 'Chin', grade: 2},
    {name: 'Alban', grade: 4},
    {name: 'Sabrina', grade: 5}
  ]

  const message = 'It is easy to send data with express'


  res.render('index.ejs', {
    students: students,
    message : message
  })
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.listen(3000, () => {
  console.log('Server is running')
})


