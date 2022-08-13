import React from 'react'
import {Grid, Typography} from "@mui/material";
import DialogsItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsStateType} from "../../redux/store";

type DialogsType = {
    state: DialogsStateType
    addMessage: () => void
    onChangeMessage: (ref: any) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let textMessageRef = React.createRef<HTMLTextAreaElement>()

    return (
        <div>
            <Typography variant="h4">Dialogs</Typography>
            <Grid container>
                <Grid item xs={5}>
                    {props.state.dialogsData.map( d => <DialogsItem name={d.name} id={d.id} key={d.id}/>)}
                </Grid>
                <Grid item xs={5}>
                    {props.state.messagesData.map( m => <MessageItem message={m.message} id={m.id} key={m.id}/>)}
                </Grid>
                <Grid item xs={10}>
                    <textarea ref={textMessageRef} onChange={() => props.onChangeMessage(textMessageRef)} value={props.state.newMessageBody}> </textarea>
                    <div>
                        <button onClick={props.addMessage}>Add message</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs