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
            state.postsData.push(
                {id: 6, message: state.newPostText, likes: 0}
            )
            state.newPostText = 'nextPost'
            return state
        } case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        } default: {
            return state
        }
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updateNewPostTextAC = (newText: string)=> ({type: UPDATE_NEW_POST_TEXT, newText: newText}) as const

export default profileReducer;