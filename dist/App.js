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
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ParamsSelection from './components/ParamsSelection';
import Slider from './components/Slider';
import { phoneWidth, phoneHeight, phoneColor, phoneSecondaryColor, dark, cameraColor as camColor, reactDefaultBackground, } from './components/constants';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 0;\n  padding: 0;\n  padding-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"], ["\n  margin: 0;\n  padding: 0;\n  padding-bottom: 100px;\n  display: flex;\n  flex-direction: column;\n"])));
var Body = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 10px;\n  text-align: center;\n\n  @media (min-width: 1200px) {\n    margin-left: 80px;\n    padding: 50px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    max-width: 800px;\n    flex-wrap: wrap;\n    overflowx: auto;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0 10px;\n  text-align: center;\n\n  @media (min-width: 1200px) {\n    margin-left: 80px;\n    padding: 50px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    max-width: 800px;\n    flex-wrap: wrap;\n    overflowx: auto;\n  }\n"])));
var ResultWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n"])));
var Code = styled.code(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 10px 10px;\n  font-size: 14px;\n  border-radius: 15px;\n  background-color: #f3f3f3;\n  width: 100%;\n  text-align: left;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    padding: 30px 30px;\n  }\n"], ["\n  padding: 10px 10px;\n  font-size: 14px;\n  border-radius: 15px;\n  background-color: #f3f3f3;\n  width: 100%;\n  text-align: left;\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    padding: 30px 30px;\n  }\n"])));
var CodeBlock = styled.p(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin-top: 0;\n  margin-bottom: 0;\n"], ["\n  margin-top: 0;\n  margin-bottom: 0;\n"])));
function App() {
    var _a = React.useState(phoneColor), caseColor = _a[0], setCaseColor = _a[1];
    var _b = React.useState(reactDefaultBackground), screenColor = _b[0], setScreenColor = _b[1];
    var _c = React.useState(phoneSecondaryColor), shadowColor = _c[0], setShadowsColor = _c[1];
    var _d = React.useState(dark), detailsColor = _d[0], setDetailsColor = _d[1];
    var _e = React.useState(camColor), cameraColor = _e[0], setCameraColor = _e[1];
    var _f = React.useState(phoneSecondaryColor), volumeButtonsColor = _f[0], setVolumeButtonsColor = _f[1];
    var _g = React.useState(phoneWidth), width = _g[0], setWidth = _g[1];
    var _h = React.useState(phoneHeight), height = _h[0], setHeight = _h[1];
    var phoneParams = {
        caseColor: caseColor,
        screenColor: screenColor,
        detailsColor: detailsColor,
        shadowColor: shadowColor,
        cameraColor: cameraColor,
        volumeButtonsColor: volumeButtonsColor,
        width: width + 'px',
        height: height + 'px',
    };
    return (_jsxs(Container, { children: [_jsx(Header, { phoneParams: phoneParams }, void 0),
            _jsxs(Body, { children: [_jsx("p", { children: _jsxs("em", __assign({ style: { fontWeight: 600 } }, { children: ["**Kudos to", ' ', _jsx("a", __assign({ href: 'http://casesandberg.github.io/react-color/#api-onChange', target: '_blank' }, { children: "casesandberg" }), void 0), ' ', "for his awesome react-color color picker!"] }), void 0) }, void 0),
                    _jsx(Slider, { label: 'Phone width', value: width, min: 300, max: 800, onChange: setWidth }, void 0),
                    _jsx(Slider, { label: 'Phone height', value: height, min: 500, max: 1000, onChange: setHeight }, void 0),
                    _jsx(ParamsSelection, { label: 'Phone case color', onChange: setCaseColor }, void 0),
                    _jsx(ParamsSelection, { label: 'Screen color', onChange: setScreenColor }, void 0),
                    _jsx(ParamsSelection, { label: 'Shadows colors', onChange: setShadowsColor }, void 0),
                    _jsx(ParamsSelection, { label: 'Details color', onChange: setDetailsColor }, void 0),
                    _jsx(ParamsSelection, { label: 'Camera color', onChange: setCameraColor }, void 0),
                    _jsx(ParamsSelection, { label: 'Volume Buttons color', onChange: setVolumeButtonsColor }, void 0),
                    _jsxs(ResultWrapper, { children: [_jsx("h3", __assign({ style: { textAlign: 'left', paddingTop: '30px' } }, { children: "Result" }), void 0),
                            _jsxs(Code, { children: [_jsx(CodeBlock, { children: "\n        <Smartphone" }, void 0),
                                    _jsx("span", { children: ("\n          height='" + (height + 'px') + "' // regular height values px/%/vh/vw...\n          width='" + (width + 'px') + "' // regular width values px/%/vh/vw...\n          caseColor='" + screenColor + "' // hex or rgb\n          detailsColor='" + detailsColor + "' // hex or rgb\n          cameraColor='" + cameraColor + "' // hex or rgb\n          shadowColor='" + shadowColor + "' // hex or rgb\n          volumeButtonsColor='" + volumeButtonsColor + "' // hex or rgb\n          screenColor='" + screenColor + "' // hex or rgb\n          >")
                                            .split('\n')
                                            .map(function (row) { return (_jsx(CodeBlock, __assign({ style: { marginLeft: '25px' } }, { children: row }), row)); }) }, void 0),
                                    _jsx("p", __assign({ style: { margin: '15px 25px', fontWeight: 'bolder' } }, { children: "// Your component goes here!" }), void 0),
                                    _jsx(CodeBlock, { children: "\n        </Smartphone>\n        " }, void 0)] }, void 0)] }, void 0)] }, void 0)] }, void 0));
}
export default App;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=App.js.map