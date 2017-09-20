var express = require('express')
var app = express()
var config = require('./config.json')
var article = require('./articles.js')

app.get('/', (res, req) => {
	console.log(config.article_directory)
	article.getArticles(config.article_directory)
		.then(items => {
			console.log(items)
		}).catch(err => {
			console.log(err)
		})
})

const startServer = () => {
	app.listen(config.port)
	console.log("Server listening on port " + config.port)
	
}

startServer()