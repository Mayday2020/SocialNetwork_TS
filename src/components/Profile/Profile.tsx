import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import {Typography} from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostDataType} from "../../redux/state";

type ProfileType = {
    profilePage: {
        postsData: PostDataType[]
        newPostText: string
    }
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Profile</Typography>
            <ProfileInfo />
            <NewPost dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
            <MyPosts postsData={props.profilePage.postsData}/>
        </div>
    )
}
export default Profile;

