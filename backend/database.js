const sql = require('sqlite3')
const config = require('./config.json')
const util = require('./util.js')

const Sequelize = require('sequelize')
const sequelize = new Sequelize('database', 'kfang', null, {
	host: 'localhost',
	dialect: 'sqlite',
	storage: config.article_database,
	operatorsAliases: Sequelize.Op,
	logging: false
})

const Article = sequelize.define('article', {
	name: Sequelize.STRING,
	filename: Sequelize.STRING,
	description: Sequelize.STRING
})

sequelize.authenticate()
	.then(() => {
		util.log("Database connected.")
	}).catch(err => {
		util.err("Unable to connect to database: " + err)
	})

const insertArticle = (articleInfo) => {
	return new Promise((resolve, reject) => {
		Article.sync().then(() => {
			Article.findOne({ // will only add if the article does not already exist in the database
				where: {
					name: articleInfo.name,
					filename: articleInfo.filename,
					description: articleInfo.description
				}
			}).then(article => {
				if (article === null) {
					Article.create({
						name: articleInfo.name,
						filename: articleInfo.filename,
						description: articleInfo.description
					}).then(() => {
						resolve(`${JSON.stringify(articleInfo)} was successfully added to database.`)
					}).catch(() => {
						reject(`${JSON.stringify(articleInfo)} failed to add to database.`)
					})
				} else {
					reject("Article already exists.")
				}
			})
			
		})
	})
}

const getArticles = () => {
	return new Promise((resolve, reject) => {
		Article.findAll().then(articles => {
			resolve(articles)
		}).catch(err => {
			reject(err)
		})
	})
}

Article.sync()
getArticles().then(articles => {
	console.log(articles)
})

module.exports = {
	insertArticle: insertArticle,
	getArticles: getArticles
}
