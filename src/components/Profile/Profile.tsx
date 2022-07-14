import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";

type ProfileType = {}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <h5>Profile</h5>
            <div>ava+description</div>
            <NewPost />
            <MyPosts />
        </div>
    )
}
export default Profile;

