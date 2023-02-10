import React from "react";
import {MessageDataType} from "../../../redux/store";

const MessageItem: React.FC<MessageDataType> = (props) => {
    return (
        <div>{props.message}</div>
    )
}

export default MessageItem