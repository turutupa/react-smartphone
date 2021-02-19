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
import Logo from '../assets/logo.svg';
import { yellow } from './constants';
var reactLinkColor = '#61dafb';
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"], ["\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n"])));
var AppLogo = styled.img(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: App-logo-spin infinite 20s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"], ["\n  pointer-events: none;\n\n  @media (prefers-reduced-motion: no-preference) {\n    animation: App-logo-spin infinite 20s linear;\n  }\n\n  @keyframes App-logo-spin {\n    from {\n      transform: rotate(0deg);\n    }\n    to {\n      transform: rotate(360deg);\n    }\n  }\n"])));
var AppHeader = styled.nav(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  font-size: calc(10px + 1.5vmin);\n  color: white;\n  text-align: center;\n  padding: 50px 20px;\n"], ["\n  font-size: calc(10px + 1.5vmin);\n  color: white;\n  text-align: center;\n  padding: 50px 20px;\n"])));
var Title = styled.p(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-family: Arial;\n"], ["\n  font-family: Arial;\n"])));
var Link = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  box-shadow: 0 4px ", ";\n  font-family: Courier New;\n  font-weight: bold;\n  text-decoration: none;\n  color: white;\n\n  &:hover {\n    color: ", ";\n    filter: brightness(1.2);\n  }\n"], ["\n  color: ", ";\n  box-shadow: 0 4px ", ";\n  font-family: Courier New;\n  font-weight: bold;\n  text-decoration: none;\n  color: white;\n\n  &:hover {\n    color: ", ";\n    filter: brightness(1.2);\n  }\n"])), reactLinkColor, yellow, yellow);
var P = styled.p(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  font-size: calc(10px + 1vmin);\n"], ["\n  font-size: calc(10px + 1vmin);\n"])));
export default function ExampleContent() {
    return (_jsx(Container, { children: _jsxs(AppHeader, { children: [_jsx(AppLogo, { src: Logo }, void 0),
                _jsx(Title, { children: "Place a component inside Smartphone Container and you're set to go!" }, void 0),
                _jsx(Link, __assign({ href: 'https://github.com/Turutupa/react-smartphone', target: '_blank' }, { children: "react-smartphone" }), void 0),
                _jsx("br", {}, void 0),
                _jsx("br", {}, void 0),
                _jsx(Title, { children: "Scrolling test!" }, void 0),
                _jsx(Title, { children: "Scroll like in a regular smartphoen!" }, void 0),
                _jsx(P, { children: "There\u2019s a passage I got memorized. Ezekiel 25:17. \u201CThe path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of the darkness, for he is truly his brother\u2019s keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy My brothers. And you will know I am the Lord when I lay My vengeance upon you.\u201D Now\u2026 I been sayin\u2019 that shit for years. And if you ever heard it, that meant your ass. You\u2019d be dead right now. I never gave much thought to what it meant. I just thought it was a cold-blooded thing to say to a motherfucker before I popped a cap in his ass. But I saw some shit this mornin\u2019 made me think twice. See, now I\u2019m thinking: maybe it means you\u2019re the evil man. And I\u2019m the righteous man. And Mr. 9mm here\u2026 he\u2019s the shepherd protecting my righteous ass in the valley of darkness. Or it could mean you\u2019re the righteous man and I\u2019m the shepherd and it\u2019s the world that\u2019s evil and selfish. And I\u2019d like that. But that shit ain\u2019t the truth. The truth is you\u2019re the weak. And I\u2019m the tyranny of evil men. But I\u2019m tryin\u2019, Ringo. I\u2019m tryin\u2019 real hard to be the shepherd." }, void 0)] }, void 0) }, void 0));
}
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=PhoneContent.js.map