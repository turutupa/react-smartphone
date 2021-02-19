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
import Smartphone from './Phone';
import PhoneContent from './PhoneContent';
import Hero from './Hero';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  margin: 0;\n  padding: 0;\n"], ["\n  position: relative;\n  margin: 0;\n  padding: 0;\n"])));
var PhoneWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 40px 20px;\n\n  @media (min-width: 1200px) {\n    position: fixed;\n    top: 5vh;\n    left: 850px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  padding: 40px 20px;\n\n  @media (min-width: 1200px) {\n    position: fixed;\n    top: 5vh;\n    left: 850px;\n  }\n"])));
var Popup = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  bottom: 0;\n  font-weight: bold;\n"], ["\n  position: absolute;\n  bottom: 0;\n  font-weight: bold;\n"])));
export default function Component(props) {
    var _a = React.useState(''), popup = _a[0], setPopup = _a[1];
    var _b = React.useState(), time = _b[0], setTime = _b[1];
    React.useEffect(function () {
        setTime(setTimeout(function () {
            setPopup('');
        }, 3500));
        return function () {
            clearTimeout(time);
        };
    }, [popup]);
    function homeButtonPress() {
        setPopup('Home button pressed');
    }
    function volumeButtonPress() {
        setPopup('Volume button pressed');
    }
    return (_jsxs(Container, { children: [_jsx(Hero, {}, void 0),
            _jsxs(PhoneWrapper, { children: [_jsx(Smartphone, __assign({}, props.phoneParams, { volumeButtonEvent: volumeButtonPress, homeButtonEvent: homeButtonPress }, { children: _jsx(PhoneContent, {}, void 0) }), void 0),
                    popup && _jsx(Popup, { children: popup }, void 0)] }, void 0)] }, void 0));
}
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=Header.js.map