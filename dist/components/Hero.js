var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { gray, yellow } from './constants';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: center;\n  justify-content: center;\n  padding-left: 80px;\n"], ["\n  background-color: ", ";\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  align-content: center;\n  justify-content: center;\n  padding-left: 80px;\n"])), gray);
var H1 = styled.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 40px;\n  font-family: Courier New;\n  box-shadow: 0 5px ", ";\n  color: white;\n  margin-top: 0;\n"], ["\n  font-size: 40px;\n  font-family: Courier New;\n  box-shadow: 0 5px ", ";\n  color: white;\n  margin-top: 0;\n"])), yellow);
var Description = styled.p(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  color: white;\n  font-family: Courier New;\n  font-size: 20px;\n  max-width: 500px;\n  margin-top: 0;\n"], ["\n  color: white;\n  font-family: Courier New;\n  font-size: 20px;\n  max-width: 500px;\n  margin-top: 0;\n"])));
var Badge = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n  font-weight: bold;\n  margin-right: 10px;\n\n  &:hover {\n    filter: brightness(1.2);\n  }\n"], ["\n  background-color: ", ";\n  color: ", ";\n  border-radius: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n  font-weight: bold;\n  margin-right: 10px;\n\n  &:hover {\n    filter: brightness(1.2);\n  }\n"])), yellow, gray);
export default function Component() {
    return (_jsxs(Container, { children: [_jsx(H1, { children: "react-smartphone" }, void 0),
            _jsx(Description, { children: "Wrap your content in a stylish yet simple Smartphone!" }, void 0),
            _jsxs("p", { children: [_jsx(Badge, __assign({ href: 'https://github.com/turutupa/react-smartphone', target: '_blank' }, { children: "Github" }), void 0),
                    _jsx(Badge, __assign({ href: 'https://www.buymeacoffee.com/turutupa', target: '_blank' }, { children: "Buy me a Beer" }), void 0)] }, void 0)] }, void 0));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=Hero.js.map