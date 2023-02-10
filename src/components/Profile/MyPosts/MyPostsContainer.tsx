import React from 'react';
import {PostDataType, ProfileStateType, StoreType} from "../../../redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import store from '../../../redux/redux-store'

/*const mapStateToProps = (state: ProfileStateType): { postsData: PostDataType[]} => {
    return {
        postsData: state.postsData
    }
}*/

const MyPostsContainer = () => {
    let newPostData = store.getState().profilePage.postsData
    return (
        <MyPosts postsData={newPostData}/>
    )
}


export default MyPostsContainer;

