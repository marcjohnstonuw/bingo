import React from 'react';
class GameView extends React.Component {
	render () {
		return (<div>
			<h1>This is a game</h1>
			{this.props.children}
		</div>);
	}
}

export default GameView;