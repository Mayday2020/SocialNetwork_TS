import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route} from "react-router";

function Main(){
    return (
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Route component={Profile}/>
            <Route component={Dialogs}/>
            {/*<Profile />*/}
            <Dialogs />
        </Box>
    )
}
export default Main;

