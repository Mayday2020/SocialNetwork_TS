import React from 'react';
import {StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";

type MyPostContainerType = {
    store: StoreType
}
const MyPostsContainer: React.FC<MyPostContainerType> = (props) => {
    let state = props.store.getState().profilePage.postsData
    return (
        <MyPosts postsData={state}/>
    )
}

export default MyPostsContainer;

