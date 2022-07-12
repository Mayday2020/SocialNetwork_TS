import React from "react";
import Box from "@mui/material/Box";

function NewPost(){
    return (
        <div>
            <Box p={2}>
                <textarea name="newPost" id="" cols="30" rows="2"> </textarea>
                <div>
                    <button>Add post</button>
                </div>
            </Box>
        </div>
    )
}

export default NewPost;

