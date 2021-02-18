var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 50%;\n"], ["\n  width: 50%;\n"])));
var Input = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 240px;\n"], ["\n  width: 240px;\n"])));
var Label = styled.h3(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
export default function Slider(props) {
    return (_jsxs(Container, { children: [_jsx(Label, { children: props.label }, void 0),
            _jsx(Input, { type: 'range', min: props.min, max: props.max, value: props.value, id: props.label, onChange: function (e) { return props.onChange(Number(e.target.value)); } }, void 0)] }, void 0));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Slider.js.map