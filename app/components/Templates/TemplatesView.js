import React from 'react';
class TemplatesView extends React.Component {
	render () {
		return (<div>
			<h1>This is templates</h1>
			{this.props.children}
		</div>);
	}
}

export default TemplatesView;