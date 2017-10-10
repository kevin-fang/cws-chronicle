import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleComponent from './ArticleComponent.js'
import LoginComponent from './LoginComponent.js'

export default class Main extends React.Component {

	render = () => (
		<main style={{margin: 24}}>
			{/*Set up roting*/}
			<Switch>
				<Route exact path='/' component={ArticleComponent} />
				<Route path='/login' component={LoginComponent}/>
			</Switch>
		</main>
	)
}