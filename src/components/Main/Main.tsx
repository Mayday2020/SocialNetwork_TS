import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";
import Whoops404 from "../Whoops404/Whoops404";
import TestComponent from "../TestComponent/TestComponent";
import {StateType} from "../../redux/state";

export type MainPropsType = {
    state: StateType
    addPost: (post: string)=> void
}

const Main = (props: MainPropsType) => {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/'}/>
                <Route path={'profile'} element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path={'messages'}
                       element={<Dialogs messagesPage={props.state.messagesPage} />}
                />
                <Route path={'*'} element={<Whoops404/>}/>
            </Routes>
        </Box>
    )
}

export default Main;

