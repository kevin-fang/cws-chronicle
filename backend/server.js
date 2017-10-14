const express = require('express')
const app = express()

const cors = require('cors')

const util = require('./util.js')
const upload = require('./upload.js')
const config = require('./config.json')
const getArticles = require('./routes/getArticles.js')
const servePDF = require('./routes/servePDF.js')
const database = require('./database.js')

app.use(cors())

app.get('/', getArticles)

app.post('/upload', upload.article, async (req, res) => {
	util.log("Upload of file")
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
})

app.get('/article/:filename', servePDF)

const startServer = () => {
	app.listen(config.port)
	util.log("Server listening on port " + config.port)
}

startServer()