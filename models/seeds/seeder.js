const mongoose = require('mongoose')
const urlConvert = require('../urlConvert') // 載入 todo model

const db = require('../../config/mongoose')


db.once('open', () => {
    urlConvert.create({source:'https://www.youtube.com/',shortCode:'Pj1Vn'})
})