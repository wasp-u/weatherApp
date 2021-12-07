import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducer from "./app_reducer";
import searchReducer from "./search_reducer";

let reducers = combineReducers({
    searchData: searchReducer,
    app: appReducer,
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;