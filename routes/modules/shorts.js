// 連線用const
const express = require('express')

const router = express.Router()

const urlConvert = require('../../models/urlConvert')


//搜尋對應短網址路由
router.get('/:url',(req, res) =>{
  const urls = req.params.url
  console.log(urls)
  // 根據五碼搜尋來源網址
  return urlConvert.find()
    .lean()
    .then(Convert => {
      const findURL = Convert.filter(
        ({ shortCode }) =>
          shortCode.includes(urls)
      )
      console.log(findURL[0].source)
      // 轉跳至資料庫內的來源網址    
      res.redirect(`${findURL[0].source}`)      
    })
    .catch(error => console.log(error))
})

//exports 給app.js  
module.exports = router