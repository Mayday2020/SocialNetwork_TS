import {ActionTypes, ProfileStateType} from "./state";

type ProfileReducerType = (state: ProfileStateType, action: ActionTypes) => ProfileStateType

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer: ProfileReducerType = (state, action) => {
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