import React from 'react';
import Box from "@mui/material/Box";
import MyPost from "./MyPost/MyPost";
import {PostDataType} from "../../../redux/store";

type MyPostType = {
    postsData: PostDataType[]
}
const MyPosts: React.FC<MyPostType> = (props) => {
    return (
        <Box>
            {props.postsData.map( p => <MyPost message={p.message} likes={p.likes} key={p.id}/>)}
        </Box>
    )
}

export default MyPosts;

