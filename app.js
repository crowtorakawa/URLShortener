//連線用const
const express = require('express')
const app = express()
const port = 3000

const generatePathCode = require('./generate_trans_code')

// handlebars
const exphbs =  require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set ('view engine', 'hbs')

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
const urlConvert = require('./models/urlConvert')




app.get('/',(req, res) => {
    res.render('index')
  })

app.post('/shorts',(req,res) => {
  
})

app.post('/',(req,res) => {
  const urlSource = req.body
  const pathCode = generatePathCode()
  const news = { source: urlSource.Unshort, shortCode: pathCode }
  
  console.log(news)
  if (urlSource.Unshort.length === 0) {
    console.log('0000')
    return res.render('index',{ error: '請重新輸入'})
  }else{
    urlConvert.find()
      .lean()
      .then(Convert => {
        const findURL = Convert.filter(
          ({ source }) =>
            source.toLowerCase().includes(urlSource.Unshort)
        )
        // 有找到
        if(findURL.length !== 0){     
          console.log('0001')
          return res.render('index',{ pathCode: findURL[0].shortCode})
        }else{
          console.log('0002')
          return urlConvert.create(news)
           .then(() => res.render('index', {pathCode :pathCode}))
           .catch(err => console.log(err))
        }           
      })
      
    .catch(error => console.log(error))
  }
})

app.listen(port, () => {
    console.log(`The server is listening on http://hostname:${port}`)
  })


