import {combineReducers, legacy_createStore as createStore} from "redux";
import DialogsReducer from "./dialogsPageReducer";
import ProfileReducer from "./profilePageReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers=combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage:UsersReducer,
    auth:authReducer
})

let state=createStore(reducers);
window.state=state;

export default state;