import React from "react";
import Box from "@mui/material/Box";
import {ActionTypes, addPostAC, updateNewPostTextAC} from "../../../redux/state";

type NewPostType = {
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const NewPost: React.FC<NewPostType> = (props) => {
    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostAC())
        props.dispatch(updateNewPostTextAC(''))
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

