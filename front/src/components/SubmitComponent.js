import React from 'react'
import Axios from 'axios'

var config = require('../config.json')

export default class SubmitComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			file: null,
			articleDetails: {
				name: "",
				description: ""
			}
		}
	}

	/*
	Article:
		name: String
		filename: String
		description: String
		date: Date
	*/

	handleArticleName = (event) => {
		let articleDetails = this.state.articleDetails
		articleDetails.name = event.target.value
		this.setState({ articleDetails })
	} 


	getArticleName = () => (
		<div className="field">
	  		<label className="label">Article Name</label>
	  		<div className="control">
	   			 <input 
	   			 	value={this.state.articleDetails.name}
	   			 	onChange={this.handleArticleName}
	   			 	className="input" 
	   			 	type="text" 
	   			 	placeholder="Name"/>
			</div>
		</div>
	)

	handleArticleDescription = (event) => {
		let articleDetails = this.state.articleDetails
		articleDetails.description = event.target.value
		this.setState({ articleDetails })
	}

	getArticleDescription = () => (
		<div className="field">
  			<label className="label">Description</label>
  			<div className="control">
    			<textarea 
    				value={this.state.articleDetails.description}
    				onChange={this.handleArticleDescription}
    				className="textarea" 
    				placeholder="A brief description of the article"></textarea>
  			</div>
		</div>
	)

	submit = () => {
		console.log(this.state)
		let article = new FormData()
		article.append("article", this.state.file)
		article.append("name", this.state.articleDetails.name)
		article.append("description", this.state.articleDetails.description)
		Axios.post(`${config.server}/upload`, article, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(response => {
				console.log(response)
				alert("Successfully uploaded article.")
			}).catch(err => {
				console.error(err)
				alert("Failed to upload article")
			})
	}

	getSubmitButton = () => (
		<div className="field">
	  		<div className="">
	    		<button className="button" onClick={this.submit}>Submit</button>
			</div>
		</div>
	)

	handleFileSelect = (event) => {
		let article = event.target.files[0]
		let articleDetails = this.state.articleDetails
		if (articleDetails.name === "") {
			articleDetails.name = article.name.slice(0, -4)
		}
		this.setState({file: article, articleDetails})
	}

	getArticle = () => (
		<div className="file has-name is-fullwidth is-primary">
  			<label className="file-label">
    			<input className="file-input" accept='.pdf' type="file" id="article" name="files[]" onChange={this.handleFileSelect}/>
    				<span className="file-cta">
    					<span className="file-icon">
        					<i className="fa fa-upload"></i>
      					</span>
      					<span className="file-label">
      						Choose a file..
      					</span>
    				</span>
      			{ this.state.file !== null && this.state.file !== undefined ?
	      			<span className="file-name">
	      				{this.state.file.name !== null &&this.state.file.name}
	      			</span>
	      			: null
      			}
  			</label>
		</div>
	)

	render() {
		return (
			<div>
				{this.getArticleName()}
				{this.getArticleDescription()}
				{this.getArticle()}<br/>
				{this.getSubmitButton()}
			</div>
		)
	}
}