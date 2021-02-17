var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
var yellow = 'rgb(245, 223, 77)';
var gray = 'rgb(147, 149, 151)';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 500px;\n  background-color: ", ";\n"], ["\n  height: 500px;\n  background-color: ", ";\n"])), gray);
var Nav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100%;\n  height: 70px;\n"], ["\n  background-color: ", ";\n  width: 100%;\n  height: 70px;\n"])), gray);
var NavItem = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-weight: bold;\n  box-shadow: 0 2px ", ";\n"], ["\n  font-weight: bold;\n  box-shadow: 0 2px ", ";\n"])), yellow);
export default function ExampleContent() {
    return (_jsx(Container, { children: _jsx(Nav, { children: _jsx(NavItem, { children: "Example" }, void 0) }, void 0) }, void 0));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ExampleDiv.js.map