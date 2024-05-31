import { combineReducers } from 'redux';
var initialActivityListState = {
    items: [],
};
var initialAddActivityState = {
    newItem: '',
    isDaily: false,
};
var initialFilterState = {
    filter: '',
};
var activityListReducer = function (state, action) {
    if (state === void 0) { state = initialActivityListState; }
    return state;
};
var addActivityReducer = function (state, action) {
    if (state === void 0) { state = initialAddActivityState; }
    return state;
};
var filterReducer = function (state, action) {
    if (state === void 0) { state = initialFilterState; }
    return state;
};
// Kombinacja wszystkich reducerów
var rootReducer = combineReducers({
    activityList: activityListReducer,
    addActivity: addActivityReducer,
    filter: filterReducer,
});
export default rootReducer;
