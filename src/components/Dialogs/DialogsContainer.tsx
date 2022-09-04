import React from 'react'
import {DialogDataType, DialogsStateType, StoreType} from "../../redux/store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

type DialogsContainerType = {
    store: StoreType
}


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