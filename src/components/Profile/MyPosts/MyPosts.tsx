import React from 'react';
import Box from "@mui/material/Box";
import MyPost from "./MyPost/MyPost";

type postDataType = {
    id: number
    message: string
    likes: number
}
function MyPosts(){
    let postData: postDataType[] = [
        {id: 1, message: 'That\'s MyPost', likes: 2},
        {id: 1, message: 'Hello!!', likes: 3},
        {id: 1, message: 'Tinkoff!', likes: 89},
        {id: 1, message: 'Zzz...', likes: 5},
    ]
    return (
        <Box>
            {postData.map(post => <MyPost message={post.message} likes={post.likes} key={post.id}/>)}
        </Box>
    )
}

export default MyPosts;

