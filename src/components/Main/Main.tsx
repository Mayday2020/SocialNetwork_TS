import React from "react";
import Profile from "../Profile/Profile";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";
import Whoops404 from "../Whoops404/Whoops404";
import {ActionTypes, StoreType} from "../../redux/store";
import DialogsContainer from "../Dialogs/DialogsContainer";
import Users from "../Users/Users";

export type MainPropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

const Main: React.FC<any> = (props) => {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/'}/>
                <Route path={'profile'} element={<Profile />}
                />
                <Route path={'messages'}
                       element={<DialogsContainer />}
                />
                <Route path={'users'} element={<Users />}/>
                <Route path={'*'} element={<Whoops404/>}/>
            </Routes>
        </Box>
    )
}

export default Main;

