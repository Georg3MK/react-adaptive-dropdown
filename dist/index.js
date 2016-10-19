"use strict";
var React = require("react");
var ReactDOM = require("react-dom");
var Redux = require('redux');
var react_redux_1 = require('react-redux');
var react_hot_loader_1 = require("react-hot-loader");
var App_1 = require("./components/App");
var reducers_1 = require('./reducers');
var store = Redux.createStore(reducers_1.default);
ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null, React.createElement(react_redux_1.Provider, {store: store}, React.createElement(App_1.default, null))), document.getElementById('root'));
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", function () {
        var NextApp = require("./components/App").default;
        ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null, React.createElement(react_redux_1.Provider, {store: store}, React.createElement(NextApp, null))), document.getElementById('root'));
    });
}
//# sourceMappingURL=index.js.map