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
        var items = this.props.items;
        var itemCount = 0, liHeight = 44;
        return (React.createElement("label", {className: "dropdown", ref: "dropdown"}, React.createElement("input", {type: "checkbox"}), React.createElement("ul", {className: "dropdown-list"}, React.createElement("li", {ref: "li"}, this.state.currentItem), items.map(function (item) {
            return React.createElement("li", {key: item + itemCount++, onClick: function () { _this.setState({ currentItem: item }); }, style: (_this.state.direction === 'top') ?
                { bottom: liHeight * itemCount } :
                { top: liHeight * itemCount }}, item);
        }))));
    };
    Dropdown2.prototype.componentDidMount = function () {
        var elem = this.refs['li'], dropdownHeight = elem.offsetHeight * (this.props.items.length + 1);
        function findOffset(fromElement, toElement, dropdownHeight) {
            var el = fromElement, elOffset = fromElement, offset = elOffset.offsetTop;
            while (!el.parentNode.classList.contains(toElement)) {
                el = el.parentNode;
                if (el.offsetParent !== elOffset && !el.parentNode.classList.contains(toElement)) {
                    offset += el.offsetTop;
                    elOffset = el.offsetParent;
                }
            }
            offset = el.offsetHeight - offset;
            if (offset >= dropdownHeight) {
                return 'bottom';
            }
            else {
                return 'top';
            }
        }
        this.setState({ direction: findOffset(this.refs['dropdown'], 'grid', dropdownHeight) });
    };
    return Dropdown2;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dropdown2;
//# sourceMappingURL=Dropdown.js.map