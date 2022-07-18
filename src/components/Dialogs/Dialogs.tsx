import React from 'react'
import {Grid, Typography} from "@mui/material";
import DialogsItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogDataType, MessageDataType} from "../../redux/state";

type DialogsType = {
    messagesPage: {
        dialogsData: DialogDataType[],
        messagesData: MessageDataType[]
    }
}

const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    {props.messagesPage.dialogsData.map( d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)}
                </Grid>
                <Grid item xs={5}>
                    {props.messagesPage.messagesData.map( m => <MessageItem message={m.message} id={m.id} key={m.id}/>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs