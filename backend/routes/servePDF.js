const article = require('../articles.js')
const config = require('../config.json')
const util = require('../util.js')

const servePDF = async (req, res) => {
	let filename = req.params.filename
	util.log(`Request for ${filename}`)

	res.setHeader('Content-Type', 'application/pdf')
	try {
		let content = await article.getArticle(filename, config.article_directory)
		res.send(content)
	} catch (err) {
		util.err(err)
	}
}

module.exports = servePDF