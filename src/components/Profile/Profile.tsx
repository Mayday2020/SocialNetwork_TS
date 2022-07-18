import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import {Typography} from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";

type ProfileType = {
    profilePage: {
        postsData: PostDataType[]
    }
    addPost: (post: string)=> void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Profile</Typography>
            <ProfileInfo />
            <NewPost addPost={props.addPost}/>
            <MyPosts postsData={props.profilePage.postsData}/>
        </div>
    )
}
export default Profile;

