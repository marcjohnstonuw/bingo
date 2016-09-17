import React from 'react';

class GoogleSignIn extends React.Component {
	constructor () {
		super();
		this.state = {
			user: 'emjay'
		};
	}
	onClickSignIn (event) {
		firebase.auth().signInWithPopup(this.provider).then((result) => {
			var token = result.credential.accessToken;
			var user = result.user;
			debugger;
			this.setState({user: user})
		}).catch((error) => {
			var errorCode = error.code;
			var errorMessage = error.message;
			var email = error.email;
			var credential = error.credential;
		});
	}
	
	componentWillMount () {
		this.provider = new firebase.auth.GoogleAuthProvider();
		this.provider.addScope('https://www.googleapis.com/auth/plus.login');
		console.log('can I have firebase?' + this.provider)
	}
	render () {
		return (
			<div>
				<button onClick={() => this.onClickSignIn()}>SIGN IN</button>
				{JSON.stringify(this.state.user)}
			</div>
		)
	}
}

export default GoogleSignIn;