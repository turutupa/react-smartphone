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
import Logo from '../assets/logo.svg';
import { yellow } from './constants';
var reactLinkColor = '#61dafb';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  margin: 0 auto;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n"], ["\n  height: 100%;\n  margin: 0 auto;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n"])));
var AppLogo = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: App-logo-spin infinite 20s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: App-logo-spin infinite 20s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])));
var AppHeader = styled.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: calc(10px + 1.5vmin);\n  color: white;\n  text-align: center;\n  padding: 50px 20px;\n"], ["\n  font-size: calc(10px + 1.5vmin);\n  color: white;\n  text-align: center;\n  padding: 50px 20px;\n"])));
var Title = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial;\n"], ["\n  font-family: Arial;\n"])));
var Link = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  box-shadow: 0 4px ", ";\n  font-family: Arial;\n  text-decoration: none;\n\n  &:hover {\n    color: yellow;\n  }\n"], ["\n  color: ", ";\n  box-shadow: 0 4px ", ";\n  font-family: Arial;\n  text-decoration: none;\n\n  &:hover {\n    color: yellow;\n  }\n"])), reactLinkColor, yellow);
export default function ExampleContent() {
    return (_jsx(Container, { children: _jsxs(AppHeader, { children: [_jsx(AppLogo, { src: Logo }, void 0),
                _jsx(Title, { children: "Place a component inside Smartphone Container and you're set to go!" }, void 0),
                _jsx(Link, __assign({ href: 'https://github.com/Turutupa/react-smartphone', target: '_blank' }, { children: "react-smartphone" }), void 0)] }, void 0) }, void 0));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=PhoneContent.js.map