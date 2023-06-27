const express = require('express')
const router = express.Router()

const urlConvert = require('../../models/urlConvert')

// const generatePathCode = require('./generate_trans_code')

router.get('/:url',(req, res) =>{
    const urls = req.params.url
    console.log(urls)
    return urlConvert.find()
        .lean()
        .then(Convert => {
          const findURL = Convert.filter(
            ({ shortCode }) =>
            shortCode.includes(urls)
          )
          console.log(findURL[0].source)
          // 有找到
          res.redirect(`${findURL[0].source}`)
        //    res.redirect('/')
        })
        
        .catch(error => console.log(error))
})
  
module.exports = router