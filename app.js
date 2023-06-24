//連線用const
const express = require('express')
const app = express()
const port = 3000

const exphbs =  require('express-handlebars')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set ('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(req, res) => {
    res.render('index')
  })

app.get('/shorts/:url',(req,res) => {
  
})

app.post('/shorts' ,(req,res) => {
  
})
app.listen(port, () => {
    console.log(`The server is listening on http://hostname:${port}`)
  })


// app.get('',(req, res) => {
  
// })