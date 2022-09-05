import {ActionTypes, DialogsStateType} from "./store";

type DialogsReducerType = (state: DialogsStateType, action: ActionTypes) => DialogsStateType

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState: DialogsStateType = {
    dialogsData: [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Vladislav'},
        {id: 3, name: 'Willy'},
        {id: 4, name: 'Billy'},
    ],
    messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Where are u from?'},
        {id: 4, message: 'Nice case bro!'},
    ],
    newMessageBody: 'body'
}

const dialogsReducer: DialogsReducerType = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state}
            stateCopy.newMessageBody = action.body
            return stateCopy
        } case SEND_MESSAGE: {
            let stateCopy = {...state}
            stateCopy.messagesData = [...stateCopy.messagesData, {id: 5, message: stateCopy.newMessageBody}]
            stateCopy.newMessageBody = ''
            return stateCopy
        } default: {
            return state
        }
    }
}

export const updateNewMessageBodyAC = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const

export default dialogsReducer;