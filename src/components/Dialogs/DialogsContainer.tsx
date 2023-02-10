import React from 'react'
import {DialogDataType, DialogsStateType, StoreType} from "../../redux/store";
import {addMessageAC, onChangeMessageAC} from "../../redux/dialogsReduser";
import Dialogs, {DialogsType} from "./Dialogs";
import {connect, ConnectedComponent} from "react-redux";
import store from '../../redux/redux-store'

//type DialogsContainerType = ConnectedComponent<React.FC<DialogsType>, Omit<DialogsType & {children?: React.ReactNode}, "addMessage" | "onChangeMessage">>
/*let mapStateToProps = (state: DialogsStateType): { dialogsData: DialogDataType[] } => {
    return {
        dialogsData: state.dialogsData
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(sendMessageAC())
        },
        onChangeMessage: (ref: any) => {
            dispatch(updateNewMessageBodyAC(ref.current?.value))
        }
    }
}*/

const DialogsContainer = () => {
    let newDialogsData = store.getState().messagesPage
    return (
        <Dialogs state={newDialogsData} addMessage={addMessageAC} onChangeMessage={onChangeMessageAC}/>
    )
}

export default DialogsContainer