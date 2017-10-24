const config = require('../config.json')
const article = require('./articles.js')
const util = require('../util.js')
const db = require('../database.js')

const getArticles = async (req, res) => {
	res.setHeader('Content-Type', 'text/json')
	db.getArticles().then(articles => {
		res.send(articles)
		console.log(articles)
	}).catch(err => {
		console.error(err)
	})
	/*
	util.log("List of articles requested")
	try {
		let articles = await article.getArticleList(config.article_directory)
		res.send(JSON.stringify(articles))
	} catch (err) {
		util.error(err)
	}
	*/


}

module.exports = getArticles