var express = require('express')
var app = express()
var config = require('./config.json')
var article = require('./articles.js')

app.get('/', (req, res) => {
	console.log(config.article_directory)
	res.setHeader('Content-Type', 'text/json')
	article.getArticleList(config.article_directory)
		.then(articles => {
			res.send(JSON.stringify(articles))
		}).catch(console.log)
})

app.get('/article', (req, res) => {
	var filename = req.query.file

	res.setHeader('Content-Type', 'text/html')
	article.getArticle(filename, config.article_directory)
		.then(content => {
			res.send(content)
		})
		.catch(console.log)
})

const startServer = () => {
	app.listen(config.port)
	console.log("Server listening on port " + config.port)
	
	article.getArticleList(config.article_directory)
		.then(console.log)
		.catch(console.log)
}

startServer()