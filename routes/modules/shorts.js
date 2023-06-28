// 連線用const
const express = require('express')

const router = express.Router()

const urlConvert = require('../../models/urlConvert')

router.get('/:url', (req, res) => {
  const urls = req.params.url
  // 根據五碼搜尋來源網址
  return urlConvert.find({ shortCode: urls })
    .lean()
    .then(Convert => res.redirect(`${Convert[0].source}`))
    .catch(error => console.log(error))
})

// exports 給app.js
module.exports = router
