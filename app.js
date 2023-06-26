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

// mongoose
const mongoose = require('mongoose')
  //dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})




app.get('/',(req, res) => {
    res.render('index')
  })

app.get('/shorts/:url',(req,res) => {
  
})

app.post('/',(req,res) => {
  const urlSource = req.body
  const pathCode = generatePathCode()
  if (urlSource.Unshort.length === 0) {
    res.render('index',{ error: '請重新輸入'})
  }else{
    console.log('req.body', urlSource)
    console.log('pathCode', pathCode)
    res.render('index',{ pathCode: pathCode})
  }
})

app.listen(port, () => {
    console.log(`The server is listening on http://hostname:${port}`)
  })


