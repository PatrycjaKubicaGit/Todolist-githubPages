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
import { Select } from 'antd';
var Option = Select.Option;
var Filter = function (_a) {
    var filter = _a.filter, onFilterChange = _a.onFilterChange;
    return (_jsxs(Select, __assign({ style: { margin: '0 10px' }, value: filter, onChange: onFilterChange }, { children: [_jsx(Option, __assign({ value: "Wszystkie" }, { children: "Wszystkie" })), _jsx(Option, __assign({ value: "Dzienne" }, { children: "Dzienne" })), _jsx(Option, __assign({ value: "Jednorazowe" }, { children: "Jednorazowe" }))] })));
};
export default Filter;
