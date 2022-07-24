import React from 'react'
import './App.css';
import {Header} from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Main from "./components/Main/Main";
import {Typography} from "@mui/material";
import {ActionTypes, StoreType} from "./redux/state";

export type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
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
                    <Main store={props.store} dispatch={props.dispatch}/>
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

