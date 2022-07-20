import React from "react";
import {MessageDataType} from "../../../redux/state";

const MessageItem: React.FC<MessageDataType> = (props) => <div>{props.message}</div>

export default MessageItem