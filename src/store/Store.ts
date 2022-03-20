import {applyMiddleware, combineReducers, createStore} from "redux";
import UsersReducer from "./UsersReducer";
import thunk from "redux-thunk";


const rootReducers=combineReducers({
    UsersReducer
})
export const store=createStore(rootReducers,applyMiddleware(thunk));

export type AppRootType=ReturnType<typeof rootReducers>
