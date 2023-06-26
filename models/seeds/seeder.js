const mongoose = require('mongoose')
const urlConvert = require('../urlConvert') // 載入 todo model
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
    urlConvert.create({source:'https://www.youtube.com/',shortCode:'Pj1Vn'})
})