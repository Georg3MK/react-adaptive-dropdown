"use strict";
var react_1 = require('react');
var react_redux_1 = require('react-redux');
var redux_form_1 = require('redux-form');
var SelectingFormValuesForm = function (props) {
    var favoriteColorValue = props.favoriteColorValue, fullName = props.fullName, handleSubmit = props.handleSubmit, hasEmailValue = props.hasEmailValue, emailValue = props.emailValue, sureEmailValue = props.sureEmailValue, pristine = props.pristine, reset = props.reset, submitting = props.submitting;
    return (react_1.default.createElement("form", {onSubmit: handleSubmit}, react_1.default.createElement("div", null, react_1.default.createElement("label", null, "First Name"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "firstName", component: "input", type: "text", placeholder: "First Name"}))), react_1.default.createElement("div", null, react_1.default.createElement("label", null, "Last Name"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "lastName", component: "input", type: "text", placeholder: "Last Name"}))), react_1.default.createElement("div", null, react_1.default.createElement("label", {htmlFor: "hasEmail"}, "Has Email?"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "hasEmail", id: "hasEmail", component: "input", type: "checkbox"}))), hasEmailValue && react_1.default.createElement("div", null, react_1.default.createElement("label", null, "Email"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "email", component: "input", type: "email", placeholder: "Email"})), emailValue && react_1.default.createElement("div", null, react_1.default.createElement("label", null, "Are you sure?"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "sureEmail", component: "input", type: "text", placeholder: "yes / no"})), (sureEmailValue === 'sure' || sureEmailValue === 'yes') && react_1.default.createElement("div", null, react_1.default.createElement("label", null, "Repeat your email!"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "repeatEmail", component: "input", type: "email", placeholder: "Repeat email"}))))), react_1.default.createElement("div", null, react_1.default.createElement("label", null, "Favorite Color"), react_1.default.createElement("div", null, react_1.default.createElement(redux_form_1.Field, {name: "favoriteColor", component: "select"}, react_1.default.createElement("option", null), react_1.default.createElement("option", {value: "#ff0000"}, "Red"), react_1.default.createElement("option", {value: "#00ff00"}, "Green"), react_1.default.createElement("option", {value: "#0000ff"}, "Blue")))), favoriteColorValue && react_1.default.createElement("div", {style: {
        height: 80,
        width: 200,
        margin: '10px auto',
        backgroundColor: favoriteColorValue
    }}), react_1.default.createElement("div", null, react_1.default.createElement("button", {type: "submit", disabled: pristine || submitting}, "Submit ", fullName), react_1.default.createElement("button", {type: "button", disabled: pristine || submitting, onClick: reset}, "Clear Values"))));
};
// The order of the decoration does not matter.
// Decorate with redux-form
SelectingFormValuesForm = redux_form_1.reduxForm({
    form: 'selectingFormValues' // a unique identifier for this form
})(SelectingFormValuesForm);
// Decorate with connect to read form values
var selector = redux_form_1.formValueSelector('selectingFormValues'); // <-- same as form name
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
//# sourceMappingURL=ProductForm.js.map