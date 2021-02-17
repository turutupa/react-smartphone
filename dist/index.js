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
import ReactDOM from 'react-dom';
import Smartphone from './components';
import reportWebVitals from './reportWebVitals';
ReactDOM.render(_jsx(React.StrictMode, { children: _jsx(Smartphone, __assign({ height: '880px', width: '550px' }, { children: _jsxs("div", __assign({ style: {
                textAlign: 'center',
                color: 'white',
                backgroundColor: 'salmon',
            } }, { children: [_jsx("h1", { children: "I love this app!" }, void 0),
                _jsx("p", { children: "Looks freakin amazing!" }, void 0)] }), void 0) }), void 0) }, void 0), document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export default Smartphone;
//# sourceMappingURL=index.js.map