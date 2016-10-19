"use strict";
var React = require('react');
var Dropdown_1 = require('./Dropdown');
var Grid = function (props) {
    var _a = props;
    var list1 = ['lamborghini', 'ferrari', 'porsche', 'aston martin', 'maserati'], list2 = ['audi', 'BMW', 'Mercedes', 'Lexus', 'Infinity'];
    return (React.createElement("div", {className: "grid"}, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "State 1"), React.createElement("th", null, "State 2"), React.createElement("th", null, "State 3"), React.createElement("th", null, "State 4"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, React.createElement(Dropdown_1.default, {items: list1})), React.createElement("td", null, React.createElement(Dropdown_1.default, {items: list2})), React.createElement("td", null, "3"), React.createElement("td", null, "4")), React.createElement("tr", null, React.createElement("td", null, "1"), React.createElement("td", null, "2"), React.createElement("td", null, "3"), React.createElement("td", null, React.createElement(Dropdown_1.default, {items: list1}))), React.createElement("tr", null, React.createElement("td", null, "2"), React.createElement("td", null, "3"), React.createElement("td", null, React.createElement(Dropdown_1.default, {items: list2})), React.createElement("td", null, React.createElement("select", null, React.createElement("option", null, "lamborghini"), React.createElement("option", null, "ferrari"), React.createElement("option", null, "porsche with no brakes"), React.createElement("option", null, "aston martin"), React.createElement("option", null, "maserati"))))))));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Grid;
//# sourceMappingURL=Grid.js.map