var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
import { CompactPicker } from 'react-color';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50%;\n"], ["\n  width: 50%;\n"])));
var Label = styled.h3(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
export default function Component(props) {
    return (_jsxs(Container, { children: [_jsx(Label, { children: props.label }, void 0),
            _jsx(CompactPicker, { onChange: function (color) { return props.onChange(color.hex); } }, void 0)] }, void 0));
}
var templateObject_1, templateObject_2;
//# sourceMappingURL=ParamsSelection.js.map