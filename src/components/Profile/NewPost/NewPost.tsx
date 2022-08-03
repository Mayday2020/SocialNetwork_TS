import React from "react";
import Box from "@mui/material/Box";
import {ActionTypes} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";

type NewPostType = {
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const NewPost: React.FC<NewPostType> = (props) => {
    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    let onPostChange = () => {
        postMessageRef.current?.value && props.dispatch(updateNewPostTextAC(postMessageRef.current.value))
    }
    return (
        <div>
            <Box p={2}>
                <textarea ref={postMessageRef} onChange={onPostChange} value={props.newPostText}></textarea>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </Box>
        </div>
    )
}

export default NewPost;

