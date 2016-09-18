import React from 'react';

class TemplateList extends React.Component {
	render() {
		return (<div className="template-list">
			<div className="move-me add">
				<button onClick={() => this.props.addTemplate('new guy')}>Add one</button>
			</div>
			{JSON.stringify(this.props)}
			{typeof this.props.addTemplate}
			<div className="header row">
				<div className="col-sm-10 col-xs-12">Template</div>
				<div className="col-sm-1 col-xs-0">Squares</div>
				<div className="col-sm-1 col-xs-0">Games</div>
			</div>
			<div className="body">
				{this.props.templates.map(template => (
					<div key={template.id} className="row">
						<div className="col-sm-10 col-xs-12">{template.name}</div>
						<div className="col-sm-1 col-xs-0">{template.squares}</div>
						<div className="col-sm-1 col-xs-0">{template.games}</div>
					</div>	
				)
				)}
			</div>
			
		</div>)
	}
}

TemplateList.propTypes = {
	templates: React.PropTypes.array.isRequired,
	// actions: React.PropTypes.object.isRequired,
	// onAddTemplate: React.PropTypes.func
}

export default TemplateList;

/*{this.props.templates.map(template => (
					<div className="row">
						<div className="col-sm-10 col-xs-12">{template.name}</div>
						<div className="col-sm-1 col-xs-0">{template.squares}</div>
						<div className="col-sm-1 col-xs-0">{template.games}</div>
					</div>	
				)
				)}*/
// <div>{JSON.stringify(this.props)}</div>

//onClick={this.props.onTemplateAdd('new thing')}