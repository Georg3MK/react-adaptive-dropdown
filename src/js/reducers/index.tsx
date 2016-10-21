import grids from './grids'
import dropdowns from './dropdowns'
import { combineReducers } from 'redux'

const reduxForm = require('redux-form').reducer
const combinedReducer = combineReducers({
    grids,
    dropdowns,
    form: reduxForm
})

export default combinedReducer
