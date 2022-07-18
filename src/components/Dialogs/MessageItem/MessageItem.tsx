import React from "react";

type MessageItem = {
    message: string
    id: number
}

const MessageItem = (props: MessageItem) => <div>{props.message}</div>

export default MessageItem