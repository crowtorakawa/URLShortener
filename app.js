// 連線用const
const port = 3000
const express = require('express')

// handlebars
const exphbs = require('express-handlebars')

const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const app = express()

// 引用路由器
const routes = require('./routes')
// mongoose
require('./config/mongoose')

// handlebars
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 載入 method-override
app.use(methodOverride('_method'))
// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.urlencoded({ extended: true }))    備用測試
// css js 資料夾位置
app.use(express.static('public'))
app.use(routes)
app.listen(port, () => {
  console.log(`The server is listening on http://hostname:${port}`)
})
