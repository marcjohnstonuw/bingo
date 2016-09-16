import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes.js'

console.log('routes', routes)
console.log('element', document.getElementById('app'))
ReactDOM.render(
	<div>
	<firebase/>
	<Router>{routes}</Router>
	</div>,
	document.getElementById('app')
)