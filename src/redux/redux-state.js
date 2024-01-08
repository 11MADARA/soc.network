import { applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import DialogsReducer from "./dialogsPageReducer";
import ProfileReducer from "./profilePageReducer";
import UsersReducer from "./usersReducer";
import authReducer from "./authReducer";
import {thunk as thunkMiddleware} from "redux-thunk";
import appReducer from "./appReducer";
let reducers=combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    usersPage:UsersReducer,
    auth:authReducer,
    app:appReducer,
})

let state=createStore(reducers,applyMiddleware(thunkMiddleware));
window.state=state;

export default state;