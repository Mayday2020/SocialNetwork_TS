import React from 'react';
import {PostDataType, ProfileStateType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: ProfileStateType): { postsData: PostDataType[]} => {
    return {
        postsData: state.postsData
    }
}

const MyPostsContainer = connect(mapStateToProps)(MyPosts)


export default MyPostsContainer;

