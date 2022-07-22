import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";
import Whoops404 from "../Whoops404/Whoops404";
import TestComponent from "../TestComponent/TestComponent";
import {StoreType} from "../../redux/state";

export type MainPropsType = {
    store: StoreType
}

const Main: React.FC<MainPropsType> = (props) => {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/'}/>
                <Route path={'profile'} element={<Profile profilePage={props.store._state.profilePage}
                                                          addPost={props.store.addPost.bind(props.store)}
                                                          updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                                />}
                />
                <Route path={'messages'}
                       element={<Dialogs messagesPage={props.store._state.messagesPage}/>}
                />
                <Route path={'*'} element={<Whoops404/>}/>
            </Routes>
        </Box>
    )
}

export default Main;

