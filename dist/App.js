var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Header from './components/Header';
import ParamsSelection from './components/ParamsSelection';
import styled from 'styled-components';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n"], ["\n  margin: 0;\n  padding: 0;\n"])));
function App() {
    return (_jsxs(Container, { children: [_jsx(Header, {}, void 0),
            _jsx(ParamsSelection, {}, void 0)] }, void 0));
}
export default App;
var templateObject_1;
//# sourceMappingURL=App.js.map