var fs = require('fs')
var path = require('path')

// return a promise with a list of all the PDF files in the directory
function getArticleList(directory) {
	return new Promise((resolve, reject) => {
		fs.readdir(directory, (err, items) => {
			if (err) reject(err)
			var articleList = 
				items.map(item => { // remove .df extension
					return item.split('.')
				}).filter(item => {
					return item[1] === 'pdf'
				}).map(item => {
					return { // replace hyphens with spaces
						title: item[0].split('-').join(" "), 
						extension: item[1]
					}
				}).reduce((list, item) => { // add articles to list
					return list.concat(item)
				}, new Array())
			resolve(articleList)
		})
	})
}

// get an article by file name
function getArticle(filename, directory) {
	return new Promise((resolve, reject) => {
		var file = path.join(directory, filename)
		//console.log(file)
		fs.readFile(file, (err, content) => {
			resolve(content)
		})
	})
}

module.exports = {
	getArticleList: getArticleList,
	getArticle: getArticle
}