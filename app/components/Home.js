import React from 'react';
import GoogleSignIn from './Auth/GoogleSignIn.js'

class Home extends React.Component {
	render () {
		return (
			<div>
				<p>Sign in with Google</p>
				<GoogleSignIn />
			</div>
		)
	}
}

export default Home;