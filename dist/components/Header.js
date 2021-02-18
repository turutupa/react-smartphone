var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import Smartphone from './Phone';
import PhoneContent from './PhoneContent';
import Hero from './Hero';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n"], ["\n  position: relative;\n  margin: 0;\n  padding: 0;\n"])));
var PhoneWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  top: 150px;\n  right: 5%;\n"], ["\n  position: absolute;\n  top: 150px;\n  right: 5%;\n"])));
export default function Component() {
    return (_jsxs(Container, { children: [_jsx(Hero, {}, void 0),
            _jsx(PhoneWrapper, { children: _jsx(Smartphone, { children: _jsx(PhoneContent, {}, void 0) }, void 0) }, void 0)] }, void 0));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=Header.js.map