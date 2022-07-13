import React from 'react';
import Box from "@mui/material/Box";
import MyPost from "./MyPost/MyPost";

function MyPosts(){
    return (
        <Box>
            <MyPost message={"That's MyPost"} likes={2}/>
            <MyPost message={"Hello!!"} likes={3}/>
            <MyPost message={"Tinkoff is cool!"} likes={89}/>
            <MyPost message={"Zzz..."} likes={5}/>
        </Box>
    )
}

export default MyPosts;

