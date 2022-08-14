import React from 'react'
import {StoreType} from "./redux/store";
import store from "./redux/redux-store";

let MyContext = React.createContext({} as StoreType)

type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <MyContext.Provider value={props.store}>
        {props.children}
    </MyContext.Provider>
}

export default MyContext