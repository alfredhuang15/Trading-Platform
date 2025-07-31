import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authRedecer from "./Auth/Reducer";

const rootReducer=combineReducers({
    auth:authRedecer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))