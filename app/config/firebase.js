import React from 'react';

class Firebase extends React.Component {
	render () {
		return (
			<div>
				<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase.js"></script>
				<script>
				  // Initialize Firebase
				  var config = {
				    apiKey: "AIzaSyBUT3MODh5NHfwqWmEDJSAMm_KJ9arqCW4",
				    authDomain: "byobingo.firebaseapp.com",
				    databaseURL: "https://byobingo.firebaseio.com",
				    storageBucket: "byobingo.appspot.com",
				    messagingSenderId: "265156813364"
				  };
				  firebase.initializeApp(config);
				</script>
			</div>
		)
	}
}

export default Firebase