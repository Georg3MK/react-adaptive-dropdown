import { combineReducers } from 'redux'

const reduxForm = require('redux-form').reducer
const combinedReducer = combineReducers({
    form: reduxForm
})

export default combinedReducer
