import React from 'react'
import {Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";

type DialogsType = {}
type DialogsItem = {
    name: string
    id: number
}
type MessageItem = {
    message: string
    id: number
}

const DialogsItem = (props: DialogsItem) => <div><Link to={`/messages/${props.id}`}>{props.name}</Link></div>
const MessageItem = (props: MessageItem) => <div>{props.message}</div>

let dialogsData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Vladislav'},
    {id: 3, name: 'Willy'},
    {id: 4, name: 'Billy'},
]
let messageData = [
    {id: 1, message: 'Hello'},
    {id: 1, message: 'How are you?'},
    {id: 1, message: 'Where are u from?'},
    {id: 1, message: 'Nice case bro!'},
]
const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    {dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id} key={dialog.id}/>)}
                </Grid>
                <Grid item xs={5}>
                    {messageData.map(message => <MessageItem message={message.message} id={message.id} key={message.id}/>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs