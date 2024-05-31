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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Button } from 'antd';
import ActivityList from './ActivityList';
import AddActivity from './AddActivityToList';
import Filter from './Filter';
import './style/TodolistStyle.css';
function TodoList() {
    var _a = useState(["Śniadanie", "Praca", "Obiad", "Ćwiczenia", "Kolacja", "Mycie", "Spanie"].map(function (item) { return ({ name: item, checked: false }); })), dailyItems = _a[0], setDailyItems = _a[1];
    var _b = useState(["Odbierz pocztę", "Umyj podłogi", "Zatankuj Samochód"].map(function (item) { return ({ name: item, checked: false }); })), oneTimeItems = _b[0], setOneTimeItems = _b[1];
    var _c = useState(""), newItem = _c[0], setNewItem = _c[1];
    var _d = useState(false), isDaily = _d[0], setIsDaily = _d[1];
    var _e = useState("Wszystkie"), filter = _e[0], setFilter = _e[1];
    useEffect(function () {
        var endOfDayTimer = setInterval(function () {
            var now = new Date();
            if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
                onEndDayClicked();
            }
        }, 1000);
        return function () { return clearInterval(endOfDayTimer); };
    }, []);
    var onAddClicked = function () {
        if (newItem) {
            var newItemData = { name: newItem, checked: false };
            if (isDaily) {
                setDailyItems(__spreadArray(__spreadArray([], dailyItems, true), [newItemData], false));
            }
            else {
                setOneTimeItems(__spreadArray(__spreadArray([], oneTimeItems, true), [newItemData], false));
            }
            setNewItem("");
            // Funckja Fetch
            fetch('http://localhost:27017/Iwai/ToDoList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItemData),
            })
                .then(function (response) { return response.json(); })
                .then(function (data) {
                console.log('Success:', data);
            })
                .catch(function (error) {
                console.error('Error:', error);
            });
        }
    };
    var onEndDayClicked = function () {
        setDailyItems(dailyItems.map(function (item) { return (__assign(__assign({}, item), { checked: false })); }));
        setOneTimeItems([]);
    };
    var onNewItemChange = function (event) {
        setNewItem(event.target.value);
    };
    var onIsDailyChange = function (event) {
        setIsDaily(event.target.checked);
    };
    var onItemCheckChange = function (index, isDaily) {
        if (isDaily) {
            setDailyItems(dailyItems.map(function (item, i) { return i === index ? __assign(__assign({}, item), { checked: !item.checked }) : item; }));
        }
        else {
            setOneTimeItems(oneTimeItems.map(function (item, i) { return i === index ? __assign(__assign({}, item), { checked: !item.checked }) : item; }));
        }
    };
    var onFilterChange = function (value) {
        setFilter(value);
    };
    var dailyItemListItems = dailyItems.filter(function (item) { return filter === "Wszystkie" || filter === "Dzienne"; });
    var oneTimeItemListItems = oneTimeItems.filter(function (item) { return filter === "Wszystkie" || filter === "Jednorazowe"; });
    return (_jsxs("div", __assign({ className: "Todo-list" }, { children: [_jsx("div", { children: _jsxs("div", __assign({ className: "Menu" }, { children: [_jsx(AddActivity, { newItem: newItem, onNewItemChange: onNewItemChange, onAddClicked: onAddClicked, onIsDailyChange: onIsDailyChange, isDaily: isDaily }), _jsx(Filter, { filter: filter, onFilterChange: onFilterChange }), _jsx(Button, __assign({ onClick: onEndDayClicked }, { children: "Zako\u0144cz dzie\u0144" }))] })) }), _jsxs("div", __assign({ className: "lista" }, { children: [filter !== "Jednorazowe" && (_jsxs("div", { children: [_jsx("h4", { children: "Dzienne aktywno\u015Bci" }), _jsx(ActivityList, { items: dailyItemListItems, onItemCheckChange: onItemCheckChange, isDaily: true })] })), filter !== "Dzienne" && (_jsxs("div", { children: [_jsx("h4", { children: "Jednorazowe zadania" }), _jsx(ActivityList, { items: oneTimeItemListItems, onItemCheckChange: onItemCheckChange, isDaily: false })] }))] }))] })));
}
export default TodoList;
