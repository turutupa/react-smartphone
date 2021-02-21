var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
// interface Props {
//   width:
// }
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  margin-right: -65px;\n  padding-right: 50px;\n  overflow-y: scroll;\n\n  @media (pointer: none), (pointer: coarse) {\n    margin-right: 0;\n    padding-right: 0;\n  }\n"], ["\n  height: 100%;\n  margin-right: -65px;\n  padding-right: 50px;\n  overflow-y: scroll;\n\n  @media (pointer: none), (pointer: coarse) {\n    margin-right: 0;\n    padding-right: 0;\n  }\n"])));
export default function PhoneContent(props) {
    return _jsx(Container, { children: props.children }, void 0);
}
var templateObject_1;
//# sourceMappingURL=PhoneContent.js.map