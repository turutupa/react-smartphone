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
import Smartphone from './Phone';
import PhoneContent from './PhoneContent';
import Hero from './Hero';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n"], ["\n  position: relative;\n  margin: 0;\n  padding: 0;\n"])));
var PhoneWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 150px;\n  left: 850px;\n  padding-bottom: 100px;\n"], ["\n  position: fixed;\n  top: 150px;\n  left: 850px;\n  padding-bottom: 100px;\n"])));
export default function Component(props) {
    return (_jsxs(Container, { children: [_jsx(Hero, {}, void 0),
            _jsx(PhoneWrapper, { children: _jsx(Smartphone, __assign({}, props.phoneParams, { children: _jsx(PhoneContent, {}, void 0) }), void 0) }, void 0)] }, void 0));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=Header.js.map