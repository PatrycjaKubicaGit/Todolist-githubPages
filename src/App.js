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
import './App.css';
import TodoList from './components/ToDoList';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
var App = function () {
    return (_jsx(Provider, __assign({ store: store }, { children: _jsx(Router, { children: _jsxs("div", __assign({ className: "App" }, { children: [_jsx("header", __assign({ className: "App-header" }, { children: _jsx("nav", { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, __assign({ to: "/" }, { children: "Home" })) }), _jsx("li", { children: _jsx(Link, __assign({ to: "/about" }, { children: "About" })) }), _jsx("li", { children: _jsx(Link, __assign({ to: "/contact" }, { children: "Contact" })) }), _jsx("li", { children: _jsx(Link, __assign({ to: "/todos" }, { children: "Todo List" })) })] }) }) })), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/todos", element: _jsx(TodoList, {}) })] })] })) }) })));
};
export default App;
