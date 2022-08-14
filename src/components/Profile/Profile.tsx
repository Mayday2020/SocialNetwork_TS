import React from "react";
import {Typography} from "@mui/material";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import NewPostContainer from "./NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileType = {
    store: StoreType
}

const Profile: React.FC<any> = (props) => {
    return (
        <div>
            <Typography variant="h4">Profile</Typography>
            <ProfileInfo />
            <NewPostContainer />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;

