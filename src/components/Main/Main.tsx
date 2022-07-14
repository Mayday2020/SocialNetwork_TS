import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";

function Main() {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/messages'} element={<Dialogs/>}/>
            </Routes>
        </Box>
    )
}

export default Main;

