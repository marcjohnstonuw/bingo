import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './config/routes.js'

console.log('routes', routes)
console.log('element', document.getElementById('app'))
ReactDOM.render(
	<div className="the-top">
		<Router history={browserHistory}>{routes}</Router>
	</div>,
	document.getElementById('app')
)