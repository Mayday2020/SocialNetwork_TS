import React from "react";
import Box from "@mui/material/Box";

type NewPostType = {
    addPost: ()=> void
    newPostText: string
    updateNewPostText: (text: string) => void
}

const NewPost: React.FC<NewPostType> = (props) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.addPost()
        props.updateNewPostText('')
    }
    let onPostChange = () => {
        postMessageRef.current?.value && props.updateNewPostText(postMessageRef.current.value)
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

