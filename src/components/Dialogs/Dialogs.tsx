import React from 'react'
import {Grid, Typography} from "@mui/material";
import DialogsItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogDataType, MessageDataType} from "../../index";

type DialogsType = {
    dialogs: DialogDataType[]
    messages: MessageDataType[]
}

const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    {props.dialogs.map( d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)}
                </Grid>
                <Grid item xs={5}>
                    {props.messages.map( m => <MessageItem message={m.message} id={m.id} key={m.id}/>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs