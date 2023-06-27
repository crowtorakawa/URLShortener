// 連線用const
const express = require('express')
const router = express.Router()

// atabase
const urlConvert = require('../../models/urlConvert')
// 亂數五碼產生
const generatePathCode = require('../../generateTransCode')

router.post('/',(req, res) => {
  const urlSource = req.body
  console.log(urlSource)
  
  // 先判斷有沒有內容在裡面
  if (urlSource.Unshort.length === 0) {
    console.log('0000')
    return res.render('index',{ error: '請重新輸入'})
  }else{
    // 有內容就先從資料庫看看有無紀錄
    urlConvert.find()
      .lean()
      .then(Convert => {
        const findURL = Convert.filter(
          ({ source }) => source.toLowerCase().includes(urlSource.Unshort)
        )
          // 有從資料庫找到相同的網址，直接用資料庫裏面的五碼
        if(findURL.length !== 0){     
          console.log('0001')
          return res.render('index',{ pathCode: findURL[0].shortCode})
        }else{
          // 沒有從資料庫找到相同的網址，產生新的五碼
          const pathCode = generatePathCode()
          // news = 新的網址 + 新的五碼
          const news = { source: urlSource.Unshort, shortCode: pathCode }

          console.log(news)
          console.log('0002')
          // 把新的資料建立在database
          return urlConvert.create(news)
            .then(() => res.render('index', {pathCode :pathCode}))
            .catch(err => console.log(err))
        }           
      })  
      .catch(error => console.log(error))
    }
  })

//首頁  
router.get('/',(req, res) => {
  res.render('index')
})

module.exports = router
