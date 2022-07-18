import React from "react";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import Box from "@mui/material/Box";
import {Route, Routes} from "react-router";
import Whoops404 from "../Whoops404/Whoops404";
import TestComponent from "../TestComponent/TestComponent";
import {DialogDataType, MessageDataType, PostDataType} from "../../index";

type MainDataType = {
    postsData: PostDataType[]
    dialogsData: DialogDataType[]
    messagesData: MessageDataType[]
}

function Main(props: MainDataType) {
    return (
        <Box component='main' sx={{flexGrow: 1, p: 3}}>
            <Routes>
                <Route path={'/'} />
                <Route path={'profile'} element={<Profile postsData={props.postsData}/>}/>
                <Route path={'messages'} element={<Dialogs dialogs={props.dialogsData} messages={props.messagesData}/>}/>
                <Route path={'*'} element={<Whoops404 />}/>
            </Routes>
        </Box>
    )
}

export default Main;

