import {combineReducers, createStore} from "redux";
import UsersReducer from "./UsersReducer";


const rootReducers=combineReducers({
    UsersReducer
})
export const store=createStore(rootReducers);

export type AppRootType=ReturnType<typeof rootReducers>
