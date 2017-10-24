var util = require('../util.js')
const database = require('../database.js')

const saveArticle = async (req, res) => {
	let filename = req.file.originalname
	let name = req.body.name
	let description = req.body.description

	util.log(`Filename: ${filename}, given name: ${name}, description: ${description}\n`)

	try {
		let result = await database.insertArticle({
			name: name,
			filename: filename,
			description: description
		})
		util.log(result)

		if (req.file && req.file.mimetype) {
			res.end(`Successfully uploaded ${req.body.name}`)
		} else {
			throw new Error("Failed to insert into database")
		}
	} catch (err) {
		console.error(err)
		res.status(400).send(err)
	}
}

module.exports = saveArticle