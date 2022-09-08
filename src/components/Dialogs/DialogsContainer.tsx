import React from 'react'
import {DialogDataType, DialogsStateType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReduser";
import Dialogs, {DialogsType} from "./Dialogs";
import {connect, ConnectedComponent} from "react-redux";


// type DialogsContainerType = ConnectedComponent<React.FC<DialogsType>, Omit<DialogsType & {children?: React.ReactNode}, "addMessage" | "onChangeMessage">>
let mapStateToProps = (state: DialogsStateType): { dialogsData: DialogDataType[] } => {
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
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer