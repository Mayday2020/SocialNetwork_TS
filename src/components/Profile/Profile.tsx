import React from "react";
import NewPost from "./NewPost/NewPost";
import MyPosts from "./MyPosts/MyPosts";
import {Typography} from "@mui/material";

type ProfileType = {}

const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Profile</Typography>
            <div>
                <Typography>
                    Ava+description
                </Typography>
            </div>
            <NewPost />
            <MyPosts />
        </div>
    )
}
export default Profile;

