import React from 'react';
import { Link } from 'react-router'

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

class App extends React.Component {
	componentWillMount () {
		var config = {
		    apiKey: "AIzaSyBUT3MODh5NHfwqWmEDJSAMm_KJ9arqCW4",
		    authDomain: "byobingo.firebaseapp.com",
		    databaseURL: "https://byobingo.firebaseio.com",
		    storageBucket: "byobingo.appspot.com",
		    messagingSenderId: "265156813364"
		};
		firebase.initializeApp(config);
	}
	render () {
		console.log('hello from app')
		return (<div>
			<nav className="navbar navbar-default">
				<ul className="row">
					<Link to="/" activeStyle={{}}><li className="col-sm-4">Home</li></Link>
					<Link to="/games" activeStyle={{}}><li className="col-sm-4">Games</li></Link>
					<Link to="/templates" activeStyle={{}}><li className="col-sm-4">Templates</li></Link>
				</ul>
			</nav>
			<div className="the-kids">{this.props.children}</div>
		</div>)
	}
}


export default App;