import React from 'react'
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import MyContext from "../../ContextComponent";

type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer: React.FC<any> = (props) => {

    return <MyContext.Consumer>
        {
            (store) => {
                let state = store.getState().messagesPage
                const addMessage = () => {
                    store.dispatch(sendMessageAC())
                }
                const onChangeMessage = (ref: any) => {
                    ref.current?.value && store.dispatch(updateNewMessageBodyAC(ref.current?.value))
                }
                return <Dialogs state={state} addMessage={addMessage} onChangeMessage={onChangeMessage}/>
            }
        }
    </MyContext.Consumer>
}

export default DialogsContainer