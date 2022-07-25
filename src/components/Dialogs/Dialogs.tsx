import React from 'react'
import {Grid, Typography} from "@mui/material";
import DialogsItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {ActionTypes, DialogDataType, MessageDataType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/state";

type DialogsType = {
    messagesPage: {
        dialogsData: DialogDataType[],
        messagesData: MessageDataType[]
        newMessageBody: string
    }
    dispatch: (action: ActionTypes) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {
    let textMessageRef = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        props.dispatch(sendMessageAC())
    }
    const onChangeMessage = (e: any) => {
        textMessageRef.current?.value && props.dispatch(updateNewMessageBodyAC(textMessageRef.current?.value))
    }
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
                <Grid>
                    <textarea ref={textMessageRef} onChange={onChangeMessage} value={props.messagesPage.newMessageBody}> </textarea>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Dialogs