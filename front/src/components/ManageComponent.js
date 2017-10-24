import React from 'react'
import Axios from 'axios'
var config = require('../config.json')

export default class ManageComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			articles: null
		}
	}

	componentWillMount = () => {
		Axios.get(`${config.server}`)
			.then(response => {
				console.log(response.data)
				this.setState({
					articles: response.data
				})
			}).catch(err => {
				console.log(err)
			})
	}

	render() {
		return (
			<div>
				{ this.state.articles &&
					<ul>
						{this.state.articles.map(article => (
							<li key={article.id}>{article.name}</li>
						))}
					</ul>
				}
			</div>
		)
	}
}