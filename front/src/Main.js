import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleComponent from './components/ArticleComponent.js'
import LoginComponent from './components/LoginComponent.js'
import SubmitComponent from './components/SubmitComponent.js'

export default class Main extends React.Component {

	render = () => (
		<main style={{margin: 24}}>
			{/*Set up roting*/}
			<Switch>
				<Route exact path='/' component={ArticleComponent} />
				<Route path='/login' component={LoginComponent}/>
				<Route path='/submit' component={SubmitComponent}/>
			</Switch>
		</main>
	)
}