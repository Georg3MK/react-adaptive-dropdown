import grids from './grids'
import dropdowns from './dropdowns'
import smartFrame from './smartFrame'
import { combineReducers } from 'redux'

const reduxForm = require('redux-form').reducer
const combinedReducer = combineReducers({
    grids,
    dropdowns,
    smartFrame,
    form: reduxForm
})

export default combinedReducer
