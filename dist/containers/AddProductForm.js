"use strict";
var React = require('react');
var react_redux_1 = require('react-redux');
var reduxConnect = react_redux_1.connect;
var Field = require('redux-form').Field, reduxForm = require('redux-form').reduxForm, formValueSelector = require('redux-form').formValueSelector;
var AddProductForm = function (props) {
    var productCategoryValue = props.productCategoryValue, productModelValue = props.productModelValue, productManufacturerValue = props.productManufacturerValue, productPriceValue = props.productPriceValue, productQuantityValue = props.productQuantityValue, productSupplierValue = props.productSupplierValue, productSupplyDateValue = props.productSupplyDateValue, handleSubmit = props.handleSubmit, pristine = props.pristine, reset = props.reset, submitting = props.submitting;
    return (React.createElement("form", {onSubmit: handleSubmit}, React.createElement("h2", null, "Add Product"), React.createElement("div", null, React.createElement("label", null, "Product Category"), React.createElement("div", null, React.createElement(Field, {name: "productCategory", component: "select"}, React.createElement("option", {value: "none"}, "Select category"), React.createElement("option", {value: "phones"}, "Phones"), React.createElement("option", {value: "computers"}, "Computers"), React.createElement("option", {value: "power-banks"}, "Power Banks"), React.createElement("option", {value: "memory-cards"}, "Memory Cards")))), productCategoryValue !== 'none' && React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Product Model"), React.createElement("div", null, React.createElement(Field, {name: "productModel", component: "input", type: "text", placeholder: "Product Model"}))), React.createElement("div", null, React.createElement("label", null, "Product Manufacturer"), React.createElement("div", null, React.createElement(Field, {name: "productManufacturer", component: "input", type: "text", placeholder: "Product Manufacturer"}))), React.createElement("div", null, React.createElement("label", null, "Product Price"), React.createElement("div", null, React.createElement(Field, {name: "productPrice", component: "input", type: "text", placeholder: "Product Price"}))), React.createElement("div", null, React.createElement("label", null, "Product Quantity"), React.createElement("div", null, React.createElement(Field, {name: "productQuantity", component: "input", type: "text", placeholder: "Product Quantity"}))), React.createElement("div", null, React.createElement("label", null, "Product Supplier"), React.createElement("div", null, React.createElement(Field, {name: "productSupplier", component: "input", type: "text", placeholder: "Product Supplier"}))), React.createElement("div", null, React.createElement("label", null, "Product Supply Date"), React.createElement("div", null, React.createElement(Field, {name: "productSupplyDate", component: "input", type: "text", placeholder: "Product Supply Date"})))), React.createElement("div", null, React.createElement("button", {type: "submit", disabled: pristine || submitting}, "Submit ", productModelValue), React.createElement("button", {type: "button", disabled: pristine || submitting, onClick: reset}, "Clear Values"))));
};
// Decorate with redux-form
AddProductForm = reduxForm({
    form: 'addProductValues' // a unique identifier for this form
})(AddProductForm);
// Decorate with connect to read form values
var selector = formValueSelector('addProductValues'); // <-- same as form name
AddProductForm = reduxConnect(function (state) {
    var productCategoryValue = selector(state, 'productCategory');
    var _a = selector(state, 'productModel', 'productManufacturer', 'productPrice', 'productQuantity', 'productSupplier', 'productSupplyDate'), productModelValue = _a.productModelValue, productManufacturerValue = _a.productManufacturerValue, productPriceValue = _a.productPriceValue, productQuantityValue = _a.productQuantityValue, productSupplierValue = _a.productSupplierValue, productSupplyDateValue = _a.productSupplyDateValue;
    return {
        productCategoryValue: productCategoryValue,
        productModelValue: productModelValue,
        productManufacturerValue: productManufacturerValue,
        productPriceValue: productPriceValue,
        productQuantityValue: productQuantityValue,
        productSupplierValue: productSupplierValue,
        productSupplyDateValue: productSupplyDateValue
    };
})(AddProductForm);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddProductForm;
//# sourceMappingURL=AddProductForm.js.map