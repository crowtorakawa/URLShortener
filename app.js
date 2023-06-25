//連線用const
const express = require('express')
const app = express()
const port = 3000

const generatePathCode = require('./generate_trans_code')

// handlebars
const exphbs =  require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set ('view engine', 'handlebars')

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.urlencoded({ extended: true }))    備用測試

// css js 資料夾位置
app.use(express.static('public'))


app.get('/',(req, res) => {
    res.render('index')
  })

app.get('/shorts/:url',(req,res) => {
  
})

app.post('/',(req,res) => {
  const urlSource = req.body
  const pathCode = generatePathCode()
  console.log('req.body', urlSource)
  console.log('pathCode', pathCode)
  res.render('index',{ pathCode: pathCode})
})

app.listen(port, () => {
    console.log(`The server is listening on http://hostname:${port}`)
  })


