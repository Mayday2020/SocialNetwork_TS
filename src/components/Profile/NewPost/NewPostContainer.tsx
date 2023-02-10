import React from "react";
import {ProfileStateType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import store from '../../../redux/redux-store'

/*const mapStateToProps = (state: ProfileStateType) : { newPostText: string } => {
    return {
        newPostText: state.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange: (ref: any) => dispatch(updateNewPostTextAC(ref.current.value)),
        addPost: () => dispatch(addPostAC())
    }
}*/

const NewPostContainer = () => {
    let newPostText = store.getState().profilePage.newPostText
    return (
        <NewPost newPostText={newPostText} addPost={addPostAC} updateNewPostText={updateNewPostTextAC}/>
    )
}

export default NewPostContainer;