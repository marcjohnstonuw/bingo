import React from 'react';
class GamesView extends React.Component {
	render () {
		return (<div>
			<h1>This is games</h1>
			{this.props.children}
		</div>);
	}
}

export default GamesView;