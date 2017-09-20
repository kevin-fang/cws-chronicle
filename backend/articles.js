var fs = require('fs')

function getArticles(directory) {
	return new Promise((resolve, reject) => {
		fs.readdir(directory, (err, items) => {
			if (err) reject(err)
			resolve(items)
		})
	})
}

module.exports = {
	getArticles: getArticles
}