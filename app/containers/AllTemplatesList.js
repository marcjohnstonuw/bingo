import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as templateActions from '../actions/templateActions.js'
import TemplateList from '../components/Templates/TemplateList.js'

console.log('template actions ', templateActions)

const mapStateToProps = (state, ownProps) => {
	return {
		templates: state.templates
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	/*var thinger = {
		onTemplateAdd: (name) => {
			dispatch({
				type: 'TEMPLATES.ADD',
				name
			})
		} //templateActions.addTemplate(name)
	}
	debugger;
	return thinger;*/
	const actions = bindActionCreators(templateActions, dispatch)
	debugger;
	return {
		foo: 'bar',
		another: {
			thing: 'finally'
		},
		addTemplate: (name) => {
			debugger;
			dispatch(templateActions.addTemplate(name))
		},
		nop: function () {}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateList)
//it is all for rebecca.. she is so pretty. she made you pizza right at this time#lovee
