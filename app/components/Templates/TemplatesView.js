import React from 'react';
// import TemplateList from './TemplateList.js';
import AllTemplatesList from '../../containers/AllTemplatesList.js'

class TemplatesView extends React.Component {
	render () {
		return (
    		<div>
    			<h1>This is templates</h1>
                <AllTemplatesList />
            </div>
        );
    }
}

export default TemplatesView;
