import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import {Typography} from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../index";

type ProfileType = {
    postsData: PostDataType[]
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Profile</Typography>
            <ProfileInfo />
            <NewPost />
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}
export default Profile;

