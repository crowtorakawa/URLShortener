const express = require('express')
const router = express.Router()

const urlConvert = require('../../models/urlConvert')

const generatePathCode = require('../../generateTransCode')


router.post('/',(req, res) => {
    const urlSource = req.body
    console.log(urlSource)
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

router.get('/',(req, res) => {
    res.render('index')
})

module.exports = router
