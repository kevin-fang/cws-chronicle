const multer = require('multer')
const path = require('path')
const config = require('./config.json')
const db = require('./database.js')

// use multer to store uploaded files
let storage = multer.diskStorage({
  	destination: function (req, file, callback) {
    	callback(null, path.join(__dirname, config.article_directory))
  	},
  	filename: function (req, file, callback) {
  		callback(null, file.originalname)
  	}
})

// only allow PDF upload from frotnend
let fileFilter = (req, file, callback) => {
	if (path.extname(file.originalname) !== '.pdf') {
		return callback("Failed to upload. Only PDF files are allowed.")
	}
	callback(null, true)
}

let article = multer({
	storage: storage,
	fileFilter: fileFilter
}).single('article')

module.exports = {
	article
}