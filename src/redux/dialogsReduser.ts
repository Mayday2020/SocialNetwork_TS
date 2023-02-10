import {ActionTypes, DialogsStateType} from "./store";

type DialogsReducerType = (state: DialogsStateType, action: ActionTypes) => DialogsStateType

const ONCHANGE_MESSAGE = 'ONCHANGE-MESSAGE'
const ADD_MESSAGE = 'ADD-MESSAGE'

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
    let stateCopy = { ...state, messagesData: [ ...state.messagesData ] }

    switch (action.type){
        case ONCHANGE_MESSAGE: {
            return {...stateCopy, newMessageBody: action.textOfMessage}
        } case ADD_MESSAGE: {
            let body = stateCopy.newMessageBody
            return {...stateCopy, messagesData: [...stateCopy.messagesData, {id: 5, message: body }], newMessageBody: ''}
        } default: {
            return stateCopy
        }
    }
}

export const onChangeMessageAC = (textOfMessage: string) => ({type: ONCHANGE_MESSAGE, textOfMessage}) as const
export const addMessageAC = () => ({type: ADD_MESSAGE}) as const

export default dialogsReducer;