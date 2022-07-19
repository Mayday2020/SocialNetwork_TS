import React from 'react'
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Main from "./components/Main/Main";
import {Typography} from "@mui/material";
import {StateType} from "./redux/state";

export type AppPropsType = {
    state: StateType
    addPost: ()=> void
    updateNewPostText: (text: string) => void
}

const App = (props: AppPropsType) => {
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
                    <Main state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
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

