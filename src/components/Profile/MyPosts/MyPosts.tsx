import React from 'react';
import Box from "@mui/material/Box";
import MyPost from "./MyPost/MyPost";
import {PostDataType} from "../../../redux/state";

type MyPostType = {
    postsData: PostDataType[]
}
function MyPosts(props: MyPostType){
    return (
        <Box>
            {props.postsData.map( p => <MyPost message={p.message} likes={p.likes} key={p.id}/>)}
        </Box>
    )
}

export default MyPosts;

