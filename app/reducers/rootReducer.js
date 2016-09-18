// import * as ActionTypes from '../actions'
// import { routerReducer as routing } from 'react-router-redux'
// import { combineReducers } from 'redux'

import { combineReducers } from 'redux'
import templates from './templates.js'

const rootReducer = combineReducers({
    templates
})

export default rootReducer