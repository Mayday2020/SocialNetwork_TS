import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReduser";

let reducers = combineReducers({
    profileReducer,
    dialogsReducer
})

let store = createStore(reducers);

export default store