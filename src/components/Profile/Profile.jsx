import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className='content'>
            <div>ava+description</div>
            <NewPost />
            <MyPosts />
        </div>
    )
}
export default Profile;

