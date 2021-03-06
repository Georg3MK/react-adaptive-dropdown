"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        _super.apply(this, arguments);
    }
    Welcome.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", null, "Welcome to products management system, ", this.props.user, "!"), React.createElement("p", null, "Here you can add, edit and remove products in stock.")));
    };
    return Welcome;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Welcome;
//# sourceMappingURL=Welcome.js.map