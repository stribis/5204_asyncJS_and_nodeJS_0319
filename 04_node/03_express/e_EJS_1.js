const express = require('express')
const app = express()


app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  console.log('Someone accessed the / ')
  res.render('index.ejs')
})

app.get('/about', (req, res) => {
  res.render('about.ejs')
})

app.listen(3000, () => {
  console.log('Server is running')
})


