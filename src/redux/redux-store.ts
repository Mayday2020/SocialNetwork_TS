import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduser";
import {StoreType} from "./store";

let reducers = combineReducers({
    profilePage:profileReducer,
    messagesPage:dialogsReducer
})

let store: StoreType = createStore(reducers);


export default store