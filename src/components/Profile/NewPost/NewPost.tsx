import React from "react";
import Box from "@mui/material/Box";

type NewPostType = {
    addPost: (post: string)=> void
}

const NewPost = (props: NewPostType) => {

    let postMessageRef = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        postMessageRef.current?.value && props.addPost(postMessageRef.current.value)
    }

    return (
        <div>
            <Box p={2}>
                <textarea name="newPost" ref={postMessageRef} cols={30} rows={2}></textarea>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </Box>
        </div>
    )
}

export default NewPost;

