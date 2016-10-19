"use strict";
var React = require('react');
var react_redux_1 = require('react-redux');
var Field = require('redux-form').Field, reduxForm = require('redux-form').reduxForm, formValueSelector = require('redux-form').formValueSelector;
var SelectingFormValuesForm = function (props) {
    var favoriteColorValue = props.favoriteColorValue, fullName = props.fullName, handleSubmit = props.handleSubmit, hasEmailValue = props.hasEmailValue, emailValue = props.emailValue, sureEmailValue = props.sureEmailValue, pristine = props.pristine, reset = props.reset, submitting = props.submitting;
    return (React.createElement("form", {onSubmit: handleSubmit}, React.createElement("div", null, React.createElement("label", null, "First Name"), React.createElement("div", null, React.createElement(Field, {name: "firstName", component: "input", type: "text", placeholder: "First Name"}))), React.createElement("div", null, React.createElement("label", null, "Last Name"), React.createElement("div", null, React.createElement(Field, {name: "lastName", component: "input", type: "text", placeholder: "Last Name"}))), React.createElement("div", null, React.createElement("label", {htmlFor: "hasEmail"}, "Has Email?"), React.createElement("div", null, React.createElement(Field, {name: "hasEmail", id: "hasEmail", component: "input", type: "checkbox"}))), hasEmailValue && React.createElement("div", null, React.createElement("label", null, "Email"), React.createElement("div", null, React.createElement(Field, {name: "email", component: "input", type: "email", placeholder: "Email"})), emailValue && React.createElement("div", null, React.createElement("label", null, "Are you sure?"), React.createElement("div", null, React.createElement(Field, {name: "sureEmail", component: "input", type: "text", placeholder: "yes / no"})), (sureEmailValue === 'sure' || sureEmailValue === 'yes') && React.createElement("div", null, React.createElement("label", null, "Repeat your email!"), React.createElement("div", null, React.createElement(Field, {name: "repeatEmail", component: "input", type: "email", placeholder: "Repeat email"}))))), React.createElement("div", null, React.createElement("label", null, "Favorite Color"), React.createElement("div", null, React.createElement(Field, {name: "favoriteColor", component: "select"}, React.createElement("option", null), React.createElement("option", {value: "#ff0000"}, "Red"), React.createElement("option", {value: "#00ff00"}, "Green"), React.createElement("option", {value: "#0000ff"}, "Blue")))), favoriteColorValue && React.createElement("div", {style: {
        height: 80,
        width: 200,
        margin: '10px auto',
        backgroundColor: favoriteColorValue
    }}), React.createElement("div", null, React.createElement("button", {type: "submit", disabled: pristine || submitting}, "Submit ", fullName), React.createElement("button", {type: "button", disabled: pristine || submitting, onClick: reset}, "Clear Values"))));
};
// The order of the decoration does not matter.
// Decorate with redux-form
SelectingFormValuesForm = reduxForm({
    form: 'selectingFormValues' // a unique identifier for this form
})(SelectingFormValuesForm);
// Decorate with connect to read form values
var selector = formValueSelector('selectingFormValues'); // <-- same as form name
SelectingFormValuesForm = react_redux_1.connect(function (state) {
    // can select values individually
    var hasEmailValue = selector(state, 'hasEmail'), emailValue = selector(state, 'email'), sureEmailValue = selector(state, 'sureEmail'), repeatEmailValue = selector(state, 'repeatEmail'), favoriteColorValue = selector(state, 'favoriteColor');
    // or together as a group
    var _a = selector(state, 'firstName', 'lastName'), firstName = _a.firstName, lastName = _a.lastName;
    return {
        hasEmailValue: hasEmailValue,
        emailValue: emailValue,
        sureEmailValue: sureEmailValue,
        repeatEmailValue: repeatEmailValue,
        favoriteColorValue: favoriteColorValue,
        fullName: (firstName || '') + " " + (lastName || '')
    };
})(SelectingFormValuesForm);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SelectingFormValuesForm;
//# sourceMappingURL=AddProductForm.js.map