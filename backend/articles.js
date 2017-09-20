var fs = require('fs')
var path = require('path')

function getArticleList(directory) {
	return new Promise((resolve, reject) => {
		fs.readdir(directory, (err, items) => {
			if (err) reject(err)
			resolve(
				items.map(item => {
					return item.split('.')
				}).map(item => {
					return {title: item[0].split('-').join(" "), extension: item[1]}
				}).reduce((list, item) => {
					return list.concat(item)
				}, new Array()))
		})
	})
}

function getArticle(filename, directory) {
	console.log(filename + ", " + directory)
	return new Promise((resolve, reject) => {
		var file = path.join(directory, filename)
		fs.readFile(file, (err, content) => {
			var buffer = "";
			if (err) {
				reject(err)
			} else {
				buffer += content
			}
			resolve(buffer)

		})
	})
}

module.exports = {
	getArticleList: getArticleList,
	getArticle: getArticle
}