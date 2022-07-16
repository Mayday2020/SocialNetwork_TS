import React from 'react'
import {Grid, Typography} from "@mui/material";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

type DialogsType = {}

const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    Dialogs column
                    <div><Link to={'/messages/1'}>Dmitriy</Link></div>
                    <div><Link to={'/messages/2'}>Vladislav</Link></div>
                    <div><Link to={'/messages/3'}>Willy</Link></div>
                    <div><Link to={'/messages/4'}>Billy</Link></div>
                </Grid>
                <Grid item xs={5}>
                    Items column
                    <div>Hello</div>
                    <div>How are you?</div>
                    <div>Where are u from?</div>
                    <div>Nice case bro!</div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs