import {ActionTypes, DialogsStateType} from "./state";

type DialogsReducerType = (state: DialogsStateType, action: ActionTypes) => DialogsStateType

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer: DialogsReducerType = (state, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body
            return state
        } case SEND_MESSAGE: {
            state.messagesData.push({id: 5, message: state.newMessageBody})
            state.newMessageBody = 'nexBody'
            return state
        } default: {
            return state
        }
    }
}

export const updateNewMessageBodyAC = (body: string)=> ({type: UPDATE_NEW_MESSAGE_BODY, body: body}) as const
export const sendMessageAC = ()=> ({type: SEND_MESSAGE}) as const

export default dialogsReducer;