import {ActionTypes, ProfileStateType} from "./store";

type ProfileReducerType = (state: ProfileStateType, action: ActionTypes) => ProfileStateType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState: ProfileStateType = {
    postsData: [
        {id: 1, message: 'That\'s MyPost', likes: 2},
        {id: 2, message: 'Hello!!', likes: 3},
        {id: 3, message: 'WHF?!', likes: 89},
        {id: 4, message: 'Zzz...', likes: 5},
    ],
    newPostText: 'text'
}


const profileReducer: ProfileReducerType = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let stateCopy = {...state}
            stateCopy.postsData = [...stateCopy.postsData, {id: 6, message: stateCopy.newPostText, likes: 0}]
            stateCopy.newPostText = ''
            return stateCopy
        } case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        } default: {
            return state
        }
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string)=> ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const

export default profileReducer;