export const getArticles = (req, res) => {
	var filename = req.params.filename

	res.setHeader('Content-Type', 'application/pdf')
	article.getArticle(filename, config.article_directory)
		.then(content => {
			res.send(content)
		})
		.catch(err => console.log("error: " + err))
}