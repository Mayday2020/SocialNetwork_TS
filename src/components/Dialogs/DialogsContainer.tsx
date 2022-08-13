import React from 'react'
import {StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    let state = props.store.getState().messagesPage
    const addMessage = () => {
        props.store.dispatch(sendMessageAC())
    }
    const onChangeMessage = (ref: any) => {
        ref.current?.value && props.store.dispatch(updateNewMessageBodyAC(ref.current?.value))
    }
    return (<Dialogs state={state} addMessage={addMessage} onChangeMessage={onChangeMessage}/>)
}

export default DialogsContainer