import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, hashHistory } from 'react-router';
import routes from './config/routes.js';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js'
// import { syncHistoryWithStore } from 'react-router-redux'

const store = configureStore();
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
	<div className="the-top">
		<Provider store={store}>
			<Router history={browserHistory}>{routes}</Router>
		</Provider>
	</div>,
	document.getElementById('app')
)