//連線用const
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send(`this is my first Express Web App`)
  })
  
app.listen(port, () => {
    console.log(`The server is listening on http://hostname:${port}`)
  })