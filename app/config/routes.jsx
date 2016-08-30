import React from 'react'
import Home from '../components/Home.jsx';
const Router = require('react-router');
const Route = Router.Route;

console.log('router', Router);
console.log('route', Route);

const routes = (
	<Route path="/" component={Home}>
	</Route>
);

export default routes;