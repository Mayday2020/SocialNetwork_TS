import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduser";
import {StoreType} from "./store";
import usersReducer from "./usersReducers";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer,
    usersPage:usersReducer
})

let store: StoreType = createStore(reducers);


export default store