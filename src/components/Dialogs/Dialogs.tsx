import React from 'react'
import {Grid, Typography} from "@mui/material";
import {Outlet} from "react-router";
import {Link} from "react-router-dom";

type DialogsType = {}
type DialogsItem = {
    name: string
    id: number
}
type MessageItem = {
    message: string
}

const DialogsItem = (props: DialogsItem) => {
    return (
        <div>
            <Link to={`/messages/${props.id}`}>{props.name}</Link>
        </div>
    )
}
const MessageItem = (props: MessageItem) => <div>{props.message}</div>

const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    <DialogsItem name={'Dmitriy'} id={1}/>
                    <DialogsItem name={'Vladislav'} id={2}/>
                    <DialogsItem name={'Willy'} id={3}/>
                    <DialogsItem name={'Billy'} id={4}/>
                </Grid>
                <Grid item xs={5}>
                    <MessageItem message={'Hello'}/>
                    <MessageItem message={'How are you?'}/>
                    <MessageItem message={'Where are u from?'}/>
                    <MessageItem message={'Nice case bro!'}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs