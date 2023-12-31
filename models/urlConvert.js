const mongoose = require('mongoose')
const Schema = mongoose.Schema
const convertSchema = new Schema({
  source: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  shortCode: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  done: {
    type: Boolean
  }
})
module.exports = mongoose.model('urlConvert', convertSchema)
