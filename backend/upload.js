const multer = require('multer')
const path = require('path')
const config = require('./config.json')

let storage = multer.diskStorage({
  	destination: function (req, file, callback) {
    	callback(null, path.join(__dirname, config.article_directory))
  	},
  	filename: function (req, file, callback) {
  		callback(null, file.originalname)
  	}
})

let article = multer({
	storage: storage,
}).single('article')

module.exports = {
	article
}