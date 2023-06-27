const express = require('express')
const router = express.Router()



const home = require('./modules/home')
const short = require('./modules/shorts')
// 引入 home 模組程式碼
router.use('/shorts', short)
router.use('/', home)
// 引入 todos 模組程式碼


module.exports = router
