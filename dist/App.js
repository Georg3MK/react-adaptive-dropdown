"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "Hello world!"), React.createElement("div", null, "Welcome to hot-reloading React written in TypeScript!")));
    };
    return App;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
//# sourceMappingURL=App.js.map