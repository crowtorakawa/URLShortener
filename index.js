const http = require('http')
const hostname = 'localhost'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('This is my first server created in Node.js')
  })
  
server.listen(port, hostname, () => {
    console.log(`The server is listening on http://${hostname}:${port}`)
  })