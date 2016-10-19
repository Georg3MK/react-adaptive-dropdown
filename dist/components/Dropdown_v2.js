"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Dropdown2 = (function (_super) {
    __extends(Dropdown2, _super);
    function Dropdown2(props, context) {
        _super.call(this, props, context);
        this.state = {
            currentItem: props.items[0]
        };
    }
    Dropdown2.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, direction = _a.direction;
        var itemCount = 0, liHeight = 44;
        return (React.createElement("label", {className: "dropdown"}, React.createElement("input", {type: "checkbox"}), React.createElement("ul", {className: "dropdown-list"}, React.createElement("li", null, this.state.currentItem), items.map(function (item) {
            return React.createElement("li", {key: item + itemCount++, ref: 'li' + itemCount, onClick: function () { _this.setState({ currentItem: item }); }, style: (direction === 'top') ?
                { bottom: liHeight * itemCount } :
                { top: liHeight * itemCount }}, item);
        }))));
    };
    Dropdown2.prototype.componentDidMount = function () {
        //this.setState({currentItem: 'Gogop'})
    };
    return Dropdown2;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dropdown2;
//# sourceMappingURL=Dropdown_v2.js.map