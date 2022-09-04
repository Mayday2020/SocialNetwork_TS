import React from "react";
import {ProfileStateType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapStateToProps = (state: ProfileStateType) : { newPostText: string } => {
    return {
        newPostText: state.newPostText
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        onPostChange: (ref: any) => dispatch(updateNewPostTextAC(ref.current.value)),
        addPost: () => dispatch(addPostAC())
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;

