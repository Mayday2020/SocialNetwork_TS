import React from "react";
import {MessageDataType} from "../../../redux/state";

const MessageItem = (props: MessageDataType) => <div>{props.message}</div>

export default MessageItem