import React from 'react'
import Home from '../components/Home.js';
const Router = require('react-router');
const Route = Router.Route;

console.log('router', Router);
console.log('route', Route);

const routes = (
	<Route path="/" component={Home}>
	</Route>
);

export default routes;