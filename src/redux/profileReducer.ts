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
    newPostText: 'any text'
}


const profileReducer: ProfileReducerType = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let body = state.newPostText
            let newPost = {id: 6, message: body, likes: 0}
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''}
        } case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        } default: {
            return state
        }
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string)=> {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText} as const
}

export default profileReducer;