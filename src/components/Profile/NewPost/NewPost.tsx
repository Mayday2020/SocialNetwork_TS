import React from "react";
import Box from "@mui/material/Box";
import {updateNewPostTextAC} from "../../../redux/profileReducer";

type NewPostType = {
    newPostText: string
    updateNewPostText: (ref: any) => void
    addPost: () => void
}

const NewPost: React.FC<NewPostType> = (props) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    return (
        <div>
            <Box p={2}>
                <textarea ref={ postMessageRef }
                          onChange={ () => props.updateNewPostText(postMessageRef) }
                          value={ props.newPostText }>
                </textarea>
                <div>
                    <button onClick={ props.addPost }>Add post</button>
                </div>
            </Box>
        </div>
    )
}

export default NewPost;

