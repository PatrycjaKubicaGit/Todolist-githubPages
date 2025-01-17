import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
var store = configureStore({
    reducer: rootReducer,
});
export default store;
