import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";
import Whoops404 from "../Whoops404/Whoops404";

function Main() {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/profile'} element={<Profile />}/>
                <Route path={'/messages'} element={<Dialogs />}/>
                <Route path={'*'} element={<Whoops404 />}/>
            </Routes>
        </Box>
    )
}

export default Main;

