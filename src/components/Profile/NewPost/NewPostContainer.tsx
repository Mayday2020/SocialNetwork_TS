import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import NewPost from "./NewPost";

type NewPostContainerType = {
    store: StoreType
}

const NewPostContainer: React.FC<NewPostContainerType> = (props) => {
    let state = props.store.getState().profilePage.newPostText

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onPostChange = (ref: any) => {
        ref.current?.value && props.store.dispatch(updateNewPostTextAC(ref.current.value))
    }
    return <NewPost newPostText={state} onPostChange={onPostChange} addPost={addPost}/>
}

export default NewPostContainer;

