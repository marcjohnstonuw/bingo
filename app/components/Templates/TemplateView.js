import React from 'react';
class TemplateView extends React.Component {
	render () {
		return (<div>
			<h1>This is one template: {this.params}</h1>
			{this.props.children}
		</div>);
	}
}

export default TemplateView;