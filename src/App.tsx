import React from 'react'
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Main from "./components/Main/Main";
import {Typography} from "@mui/material";
import {DialogDataType, PostDataType, MessageDataType} from "./index";

type AppType = {
    postsData: PostDataType[]
    dialogsData: DialogDataType[]
    messageData: MessageDataType[]
}

function App(props: AppType) {
    return (
        <Container fixed>
            <Grid container>
                <Grid item xs={12}>
                    <Header />
                </Grid>
                <Grid item xs={2}>
                    <Navbar/>
                </Grid>
                <Grid item xs={10}>
                    <Main postsData={props.postsData} dialogsData={props.dialogsData} messagesData={props.messageData}/>
                </Grid>
                <Grid item xs={12} sx={{backgroundColor: 'lightgrey'}}>
                    <Typography>
                        This is Footer component
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;

