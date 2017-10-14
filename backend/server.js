const express = require('express')
const app = express()

const cors = require('cors')

const util = require('./util.js')
const upload = require('./upload.js')
const config = require('./config.json')
const getArticles = require('./routes/getArticles.js')
const servePDF = require('./routes/servePDF.js')

app.use(cors())

app.get('/', getArticles)

app.post('/upload', upload.article, (req, res) => {
	console.log(req.file)
})

app.get('/article/:filename', servePDF)

const startServer = async () => {
	app.listen(config.port)
	util.log("Server listening on port " + config.port)
}

startServer()