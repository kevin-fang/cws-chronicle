import React from 'react'

export default class SubmitComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			file: null
		}
	}

	/*
	Article:
		name: String
		filename: String
		description: String
		date: Date
	*/



	getArticleName = () => (
		<div className="field">
	  		<label className="label">Article Name</label>
	  		<div className="control">
	   			 <input className="input" type="text" placeholder="Name"/>
			</div>
		</div>
	)

	getArticleDescription = () => (
		<div className="field">
  			<label className="label">Description</label>
  			<div className="control">
    			<textarea className="textarea" placeholder="A brief description of the article"></textarea>
  			</div>
		</div>
	)

	getSubmitButton = () => (
		<div className="field">
	  		<div className="control">
	    		<button className="button">Submit</button>
			</div>
		</div>
	)

	handleFileSelect = (event) => {
		var article = event.target.files[0]
		this.setState({file: article})
	}

	getArticle = () => (
		<div className="file has-name is-fullwidth">
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
      			{ this.state.file !== null &&
	      			<span className="file-name">
	      				{this.state.file.name}
	      			</span>
      			}
  			</label>
		</div>
	)

	render() {
		return (
			<form>
				{this.getArticleName()}
				{this.getArticleDescription()}
				{this.getArticle()}<br/>
				{this.getSubmitButton()}
			</form>
		)
	}
}