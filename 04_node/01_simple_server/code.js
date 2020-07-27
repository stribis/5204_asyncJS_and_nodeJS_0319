// console.log('Hello World')

// Get the HTTP module
const http = require('http')

//Set up your hostname & port
const hostname = '127.0.0.1'
const port = 3000

// Create a server (Server has to receive Requests and send Response)
// REQUEST <=== Incoming Message
// RESPONSE ===> Outgoing Message

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})

