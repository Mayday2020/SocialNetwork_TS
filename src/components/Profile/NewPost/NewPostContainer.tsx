import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import NewPost from "./NewPost";
import MyContext from "../../../ContextComponent";

type NewPostContainerType = {
    store: StoreType
}

const NewPostContainer = () => {

    return <MyContext.Consumer>
        {
            (store) => {

                let state = store.getState().profilePage.newPostText

                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                let onPostChange = (ref: any) => {
                    ref.current?.value && store.dispatch(updateNewPostTextAC(ref.current.value))
                }
                return <NewPost newPostText={state} onPostChange={onPostChange} addPost={addPost}/>
            }
        }
    </MyContext.Consumer>
}


export default NewPostContainer;

