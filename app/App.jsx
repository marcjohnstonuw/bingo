import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './config/routes.jsx'

console.log('routes', routes)
console.log('element', document.getElementById('app'))
ReactDOM.render(
	<Router>{routes}</Router>,
	document.getElementById('app')
)