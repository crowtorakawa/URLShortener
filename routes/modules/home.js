// 連線用const
const express = require('express')
const router = express.Router()

// atabase
const urlConvert = require('../../models/urlConvert')
// 亂數五碼產生
const generatePathCode = require('../../public/javascripts/generateTransCode')
const URLlValid = require('../../public/javascripts/URLValid')

router.post('/', (req, res) => {
  const urlSource = req.body
  // 先判斷有沒有內容在裡面，或有沒有符合url合法性
  if (urlSource.Unshort.length === 0 || URLlValid(urlSource.Unshort) !== true) {
    return res.render('index', { error: '請重新輸入' })
  }
  // 有內容就先從資料庫看看有無紀錄
  urlConvert.find({ source: urlSource.Unshort })
    .lean()
    .then(Convert => {
      if (Convert.length !== 0) {
        return res.render('index', { pathCode: Convert[0].shortCode })
      }
      // 沒有從資料庫找到相同的網址，產生新的五碼
      const pathFiveCode = generatePathCode()
      // news = 新的網址 + 新的五碼
      const news = { source: urlSource.Unshort, shortCode: pathFiveCode }
      // 把新的資料建立在database
      return urlConvert.create(news)
        .then(() => res.render('index', { pathCode: pathFiveCode }))
        .catch(err => console.log(err))
    })
    .catch(error => console.log(error))
})
// 首頁
router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
