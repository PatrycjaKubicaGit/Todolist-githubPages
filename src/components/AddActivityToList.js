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
import { Checkbox, Input, Button, Row, Col } from 'antd';
var AddActivity = function (_a) {
    var newItem = _a.newItem, onNewItemChange = _a.onNewItemChange, onAddClicked = _a.onAddClicked, isDaily = _a.isDaily, onIsDailyChange = _a.onIsDailyChange;
    return (_jsxs(Row, __assign({ align: "middle" }, { children: [_jsx(Col, { children: _jsx(Checkbox, __assign({ checked: isDaily, onChange: onIsDailyChange }, { children: "Dodaj Dzienne" })) }), _jsx(Col, __assign({ flex: "auto" }, { children: _jsx(Input, { value: newItem, onChange: onNewItemChange }) })), _jsx(Col, { children: _jsx(Button, __assign({ onClick: onAddClicked }, { children: "Dodaj" })) })] })));
};
export default AddActivity;
