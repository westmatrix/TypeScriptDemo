"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
class Counter extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            count: 0
        };
        this.increment = () => {
            this.setState({
                count: (this.state.count + 1)
            });
        };
        this.decrement = () => {
            this.setState({
                count: (this.state.count - 1)
            });
        };
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null, this.state.count),
            React.createElement("button", { onClick: this.increment }, "Increment"),
            React.createElement("button", { onClick: this.decrement }, "Decrement")));
    }
}
exports.default = Counter;
