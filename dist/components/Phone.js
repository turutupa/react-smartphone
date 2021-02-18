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
import { phoneWidth, phoneHeight, phoneColor, phoneSecondaryColor, dark, cameraColor, } from './constants';
import Lockscreen from './Lockscreen';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  cursor: pointer;\n  height: ", ";\n  width: ", ";\n  background-color: ", ";\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  transition: all 0.2s linear;\n  box-shadow: 0 10px\n    ", ";\n"], ["\n  position: relative;\n  cursor: pointer;\n  height: ",
    ";\n  width: ",
    ";\n  background-color: ",
    ";\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  transition: all 0.2s linear;\n  box-shadow: 0 10px\n    ",
    ";\n"])), function (props) {
    return props.height ? props.height : phoneHeight + 'px';
}, function (props) {
    return props.width ? props.width : phoneWidth + 'px';
}, function (props) {
    return props.color ? props.color : phoneColor;
}, function (props) {
    return props.shadowColor ? props.shadowColor : phoneSecondaryColor;
});
var UpperSpeaker = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 200px;\n  height: 15px;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 25px;\n  background-color: ", ";\n"], ["\n  width: 200px;\n  height: 15px;\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  border-radius: 25px;\n  background-color: ",
    ";\n"])), function (props) {
    return props.color ? props.color : dark;
});
var Screen = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", ";\n  height: ", ";\n  width: ", ";\n  position: absolute;\n  left: 30px;\n  top: 50px;\n  border-radius: 25px;\n  overflow: hidden;\n"], ["\n  background-color: ",
    ";\n  height: ",
    ";\n  width: ",
    ";\n  position: absolute;\n  left: 30px;\n  top: 50px;\n  border-radius: 25px;\n  overflow: hidden;\n"])), function (props) {
    return props.color ? props.color : dark;
}, function (props) {
    return props.height ? "calc(" + props.height + " - 110px)" : phoneHeight - 110 + 'px';
}, function (props) {
    return props.width ? "calc(" + props.width + " - 60px)" : phoneWidth - 60 + 'px';
});
var HomeButton = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  box-shadow: 0 3px\n    ", ";\n  border-radius: 25px;\n  position: absolute;\n  width: 125px;\n  height: 30px;\n  left: 0;\n  right: 0;\n  bottom: 17px;\n  margin: 0 auto;\n  transition: all 0.2s linear;\n\n  &:active {\n    box-shadow: 0 0px\n      ", ";\n    transform: translateY(4px);\n  }\n"], ["\n  background-color: ",
    ";\n  box-shadow: 0 3px\n    ",
    ";\n  border-radius: 25px;\n  position: absolute;\n  width: 125px;\n  height: 30px;\n  left: 0;\n  right: 0;\n  bottom: 17px;\n  margin: 0 auto;\n  transition: all 0.2s linear;\n\n  &:active {\n    box-shadow: 0 0px\n      ",
    ";\n    transform: translateY(4px);\n  }\n"])), function (props) {
    return props.color ? props.color : dark;
}, function (props) {
    return props.shadowColor ? props.shadowColor : phoneSecondaryColor;
}, function (props) {
    return props.shadowColor ? props.shadowColor : phoneSecondaryColor;
});
var Camera = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border-radius: 50%;\n  background-color: ", ";\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 15px;\n  right: 10%;\n"], ["\n  border-radius: 50%;\n  background-color: ",
    ";\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 15px;\n  right: 10%;\n"])), function (props) {
    return props.color ? props.color : cameraColor;
});
var VolumeButtons = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  background-color: ", ";\n  height: ", "px;\n  width: 7px;\n  position: absolute;\n  left: -7px;\n  top: 100px;\n  border-radius: 2px;\n  transition: all 0.2s linear;\n\n  &:active {\n    width: 3px;\n    transform: translateX(4px);\n  }\n"], ["\n  background-color: ",
    ";\n  height: ", "px;\n  width: 7px;\n  position: absolute;\n  left: -7px;\n  top: 100px;\n  border-radius: 2px;\n  transition: all 0.2s linear;\n\n  &:active {\n    width: 3px;\n    transform: translateX(4px);\n  }\n"])), function (props) {
    return props.color ? props.color : phoneSecondaryColor;
}, phoneHeight / 6);
var LockButton = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  background-color: ", ";\n  height: ", "px;\n  width: 7px;\n  position: absolute;\n  right: -7px;\n  top: 100px;\n  border-radius: 2px;\n  transition: all 0.2s linear;\n\n  &:active {\n    width: 3px;\n    transform: translateX(-4px);\n  }\n"], ["\n  background-color: ",
    ";\n  height: ", "px;\n  width: 7px;\n  position: absolute;\n  right: -7px;\n  top: 100px;\n  border-radius: 2px;\n  transition: all 0.2s linear;\n\n  &:active {\n    width: 3px;\n    transform: translateX(-4px);\n  }\n"])), function (props) {
    return props.color ? props.color : phoneSecondaryColor;
}, phoneHeight / 10);
var Content = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  height: ", ";\n  width: ", ";\n  border-radius: 25px;\n  z-index: -1;\n"], ["\n  height: ",
    ";\n  width: ",
    ";\n  border-radius: 25px;\n  z-index: -1;\n"])), function (props) {
    return props.height ? "calc(" + props.height + " - 110px)" : phoneHeight - 110 + 'px';
}, function (props) {
    return props.width ? "calc(" + props.width + " - 60px)" : phoneWidth - 60 + 'px';
});
var Title = styled.h3(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  color: white;\n  padding-top: 200px;\n  font-weight: 700;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"], ["\n  color: white;\n  padding-top: 200px;\n  font-weight: 700;\n  height: 100%;\n  width: 100%;\n  text-align: center;\n"])));
var renderDefault = function (text) { return (_jsx(Title, { children: text || 'Thanks for using react-phone.' }, void 0)); };
export default function Phone(props) {
    var height = props.height, width = props.width, caseColor = props.caseColor, detailsColor = props.detailsColor, cameraColor = props.cameraColor, shadowColor = props.shadowColor, volumeButtonsColor = props.volumeButtonsColor, text = props.text, children = props.children, content = props.content, screenColor = props.screenColor;
    var component = children
        ? children
        : content
            ? content
            : renderDefault(text);
    var _a = React.useState(false), lockscreen = _a[0], toggleLockScreen = _a[1];
    return (_jsxs(Container, __assign({ height: height, width: width, shadowColor: shadowColor, color: caseColor }, { children: [_jsx(UpperSpeaker, { color: detailsColor }, void 0),
            _jsx(Camera, { color: cameraColor, width: width }, void 0),
            _jsx(VolumeButtons, { color: volumeButtonsColor }, void 0),
            _jsx(LockButton, { onClick: function () { return toggleLockScreen(!lockscreen); } }, void 0),
            _jsxs(Screen, __assign({ color: screenColor, height: height, width: width }, { children: [_jsx(Lockscreen, { status: lockscreen }, void 0),
                    _jsx(Content, __assign({ height: height, width: width }, { children: component }), void 0)] }), void 0),
            _jsx(HomeButton, { color: detailsColor, shadowColor: detailsColor }, void 0)] }), void 0));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=Phone.js.map