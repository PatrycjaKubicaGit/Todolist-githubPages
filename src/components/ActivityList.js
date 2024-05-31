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
import { List, Checkbox } from 'antd';
import './style/ActivityListStyle.css';
var ActivityList = function (_a) {
    var items = _a.items, onItemCheckChange = _a.onItemCheckChange, isDaily = _a.isDaily;
    return (_jsx(List, { className: "activity-list", dataSource: items, renderItem: function (item, index) {
            var label;
            var checkbox = null;
            if (typeof item === 'object') {
                label = item.name;
                checkbox = _jsx(Checkbox, { checked: item.checked, onChange: function () { return onItemCheckChange(index, isDaily); } });
            }
            else {
                label = item;
                checkbox = _jsx(Checkbox, { onChange: function () { return onItemCheckChange(index, isDaily); } });
            }
            return (_jsxs(List.Item, { children: [_jsx("span", __assign({ className: "activity-label" }, { children: label })), _jsx("div", __assign({ className: "activity-checkbox" }, { children: checkbox }))] }));
        } }));
};
export default ActivityList;
