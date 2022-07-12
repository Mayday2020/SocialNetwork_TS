import React from "react";
import Profile from "../Profile/Profile";
import Box from "@mui/material/Box";

function Main(){
    return (
        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Profile />
        </Box>
    )
}
export default Main;

