const express = require('express')
const app = express()
const config = require('./config.json')
const article = require('./articles.js')
const multer = require('multer')
const cors = require('cors')
const util = require('util')

app.use(cors())

app.use(multer({
	dest: './articles'
}).single('article'))

app.get('/', (req, res) => {
	console.log(config.article_directory)
	res.setHeader('Content-Type', 'text/json')
	article.getArticleList(config.article_directory)
		.then(articles => {
			res.send(JSON.stringify(articles))
		}).catch(console.log)
})

app.post('/upload', (req, res, next) => {
	console.log("Upload request")
	if (req.files) {
		console.log(util.inspect(req.files))
		if (req.files.article.size === 0) {
			return next(new Error("Please select an article"))
		}
		fs.exists(req.files.article.path, (exists) => {
			if (exists) {
				res.end("Successfully uploaded")
			} else {
				res.end("Upload failed. Please try again")
			}
		})
	}
})

app.get('/article/:filename', (req, res) => {
	var filename = req.params.filename

	res.setHeader('Content-Type', 'application/pdf')
	article.getArticle(filename, config.article_directory)
		.then(content => {
			res.send(content)
		})
		.catch(err => console.log("error: " + err))
})

const startServer = () => {
	app.listen(config.port)
	console.log("Server listening on port " + config.port)
	
	article.getArticleList(config.article_directory)
		.then(console.log)
		.catch(console.log)
}

startServer()