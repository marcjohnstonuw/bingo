import React from 'react'
const Router = require('react-router');
import { Route, IndexRoute } from 'react-router'

import App from '../components/App.js'
import Home from '../components/Home.js';
import GamesView from '../components/Games/GamesView.js';
import GameView from '../components/Games/GameView.js';
import TemplatesView from '../components/Templates/TemplatesView.js';
import TemplateView from '../components/Templates/TemplateView.js';

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/templates" component={TemplatesView} />
		<Route path="/templates/:templateID" component={TemplateView} />
		<Route path="/games" component={GamesView} />
		<Route path="/games/:gameID" component={GameView} />
	</Route>
);


export default routes;